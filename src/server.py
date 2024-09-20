#! flask/bin/python3
from flask import Flask, jsonify, abort, make_response, request
from flask_cors import CORS
import time
from random import random

items = [
    {"item_id": 1, "companyName": "Bekk", "positionTitle": "Summer Intern Developer", "deadlineDate": "2024-10-12"},
    {"item_id": 2, "companyName": "Microsoft", "positionTitle": "Part Time Software Developer", "deadlineDate": "2024-10-01"},
    {"item_id": 3, "companyName": "Bouvet", "positionTitle": "Software engineer", "deadlineDate": "2024-10-11"},
    {"item_id": 4, "companyName": "Accenture", "positionTitle": "Graduate program", "deadlineDate": "2024-10-21"}
]

app = Flask(__name__)
CORS(app)


# Once your client works, you can apply this decorator
# to one of the endpoints to add a random delay to simulate
# the operation taking a long time due to database transactions etc.
def randomdelay(func):
    print("Applying random delay to", func.__name__)

    def inner(*args, **kwargs):
        time.sleep(random() * 5)
        return func(*args, **kwargs)

    return inner


@app.errorhandler(405)
def not_allowed_error(error):
    text = jsonify({"Code": "405", "Message": "Method Not Allowed"})
    return make_response(text, 405)


@app.errorhandler(404)
def not_found_error(error):
    text = jsonify(
        {"Code": "404", "Message": "Not Found", "Description": error.description}
    )
    return make_response(text, 404)


@app.errorhandler(400)
def bad_request_error(error):
    text = jsonify(
        {"Code": "400", "Message": "Bad Request", "Description": error.description}
    )
    return make_response(text, 400)


@app.route("/api/items/", methods=["GET"])
def get_items():
    return jsonify({"items": items})


@app.route("/api/items/<int:item_id>", methods=["GET"])
def get_item(item_id):
    for item in items:
        if item["item_id"] == item_id:
            return jsonify({"item": item})
    message = f"No item with ID {item_id}."
    abort(404, message)


@app.route("/api/items/", methods=["POST"])
def create_item():
    if not request.json:
        abort(400, "Must be JSON.")
    if "companyName" not in request.json:
        abort(400, "Must contain 'companyName'-field.")
    if not isinstance(request.json["companyName"], str):
        description = f"'companyName'-field must be str."
        abort(400, description)
    new_id = 0 if not items else max(item["item_id"] for item in items) + 1
    item = {"item_id": new_id, "companyName": request.json["companyName"], "positionTitle": request.json["positionTitle"], "deadlineDate": request.json["deadlineDate"]}
    items.append(item)
    print(items)
    return jsonify({"item": item}), 201


@app.route("/api/items/<int:item_id>", methods=["PUT"])
def update_item(item_id):
    if not request.json:
        abort(400, "Must be JSON.")
    wanted_item = None
    for item in items:
        if item["item_id"] == item_id:
            wanted_item = item
            break

    if not wanted_item:
        message = f"No item with ID {item_id}."
        abort(404, message)
    update = request.json
    if "companyName" in update:
        if not isinstance(update["companyName"], str):
            message = f"'companuName' field must be a str."
            abort(404, message)
        wanted_item["companyName"] = update["companyName"]

    if "positionTitle" in update:
        if not isinstance(update["positionTitle"], str):
            message = f"'positionTitle' field must be a string."
            abort(404, message)
        wanted_item["positionTitle"] = update["positionTitle"]

    if "deadlineDate" in update:
        if not isinstance(update["deadlineDate"], str):
            message = f"'deadlineDate' field must be a string."
            abort(404, message)
        wanted_item["deadlineDate"] = update["deadlineDate"]

    return jsonify({"item": wanted_item})


@app.route("/api/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    old_item = False
    for item in items:
        if item["item_id"] == item_id:
            old_item = item
            break
    if not old_item:
        message = f"No item with ID {item_id}."
        abort(404, message)
    items.remove(old_item)
    return jsonify({"deleted": True})


if __name__ == "__main__":
    app.run(port=8080, debug=True)
