Full-Stack Application Development Task
Folder Structure

Organize your project as follows:

    Root Folder: Contains two subfolders, rest (for the backend) and web (for the frontend), along with necessary configuration files.
    
    ├── README.md
    ├── dockerfile
    ├── rest/
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    └── web/
        ├── README.md
        ├── next-env.d.ts
        ├── next.config.ts
        ├── package-lock.json
        ├── package.json
        ├── src/
        │   └── app/
        │       ├── globals.css
        │       ├── layout.tsx
        │       ├── page.module.css
        │       └── page.tsx
        └── tsconfig.json

Application Behavior

Backend:
    Located in the rest folder.
    Starts with the command:
    npm run start
    Runs on PORT 3000.
Frontend:
    Located in the web folder.
    Starts with the command:
    npm run start
    Runs on PORT 3001.
Integration with GitHub
    Push your code to GitHub.
    Attach the provided dockerfile and GitHub Workflow files to the root folder.
    Configure the workflow to build a Docker image using GitHub Actions.
    Share the repository and Docker image link.


Functional Requirements
Backend API
Endpoint:
    POST /process
    Request: Accepts a JSON body with the following structure:
    {
        "data": {
            "ABC": {
                "test": 11
            }
        },
        "key": "test"
    }

    Logic:
    Parse the data field.
    Compute the sum of all occurrences of the given key within the JSON.
    Support keys that may be either a single values integer or an array of integers.

    Response:
    {
        "result": 11
    }


Frontend Application

Features:
    A single-page web application with three <textarea> elements:
    data (for JSON input)
    key (for the key(s) to search in the JSON)
    output (for displaying the API response)
Behavior:
    Upon clicking the Submit button:
    Capture values from data and key fields.
    Send a POST request to http://localhost:3000/process with the captured values in the required JSON structure.
    Display the API response in the output field.



Note:
Execute github Actions pipeline using the provided workflow yaml file. If `.github` folder is not visible then unhide the same and make sure to add this to the root folder of the project and, then submit your GitHub Profile link, as well as the artifact / package (docker image) created to the provided form. Last submission will be counted as final.
Github Package Link will be available at: https://github.com/<profile>?tab=packages : Find and attach the package with latest tag in the form. Package name will be the same as your repo name, for eg: ghcr.io/<profile>/<repo>:latest