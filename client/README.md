# Agile Job Search

## Description
Agile Job Search is a web application designed to streamline the job search process using an Agile workflow inspired by Jira. The software combines Agile principles with a traditional to-do list, enabling users to manage their job applications efficiently.

## Technologies Used
- React
- Redux
- Chakra
- hello-pangea/dnd
- Axios

## Installation
1. Navigate to the project directory:
   ```bash
   cd WEB_API/client
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the project:
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage
* To create todos you can click on the "pluss" symbol. In the popup modal write what you want and press "Add Task".

* If you have typos you can easily edit each card by clicking on the edit button. This will pop up a modal where you can insert your changes and apply them by clicking "Edit Task"

* The items are draggable between the different states. When you start the process of applying to a job, you can move a todo into the "in progress" column. After you have applied you can move it to the "done".

* When finished with a todo and you perhaps have gotten a job oppertunity or rejection you can delete them  from the columns by clicking the remove button.

## Project Structure
```
client
├── public
├── src
│   ├── api/
│   ├── Components/
│   ├── Constants/
│   ├── Models/
│   ├── Models/
│   ├── index.css
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── App.tsx
│   └── index.tsx
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md

```
