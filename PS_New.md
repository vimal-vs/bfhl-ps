# Full-Stack Application Development Task


### Folder Structure

Organize your project as follows:

```
Root Folder: Contains two subfolders, rest (for the backend) and web (for the frontend), 
along with necessary configuration files.
    
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
```

---

## Application Behavior

### Backend
- **Location**: `rest` folder
- **Start Command**: `npm run start`
- **Runs On**: `PORT 3000`

    #### API Endpoint:
    
    **POST** `/process`
    
    **Request Structure:**
    ```json
    {
        "data": {
            "ABC": {
                "test": 11
            }
        },
        "key": "test"
    }
    ```
    
    **Logic:**
    - Parse the `data` field.
    - Compute the sum of all occurrences of the given `key` within the JSON.
    - Support keys that may be single integers or arrays of integers.
    
    **Response:**
    ```json
    {
        "result": 11
    }
    ```
    
    **Optional Feature (Extra Points):**
    - Add a `limit` query parameter to the URL to specify the maximum number of occurrences of the key to sum.
    - If `limit` is not provided, sum all occurrences.
    
    **Example:**

    - **POST:** `process?limit=2` 
    
    - **Request:**
      ```json
      {
          "data": {
              "ABC": {
                  "test": [11, 22, 33]
              }
          },
          "key": "test"
      }
      ```
    - **Response:**
      ```json
      {
          "result": 33
      }
      ```


### Frontend
- **Location**: `web` folder
- **Start Command**: `npm run start`
- **Runs On**: `PORT 3001`

    #### Features:
    - A single-page web application with the following fields:
      - **`data`**: A `<textarea>` for JSON input.
      - **`key`**: A `<textarea>` for the key(s) to search in the JSON.
      - **`output`**: A `<textarea>` for displaying the API response.
    
    #### Behavior:
    1. Click the **Submit** button to:
       - Capture values from the `data` and `key` fields.
       - Send a `POST` request to `http://localhost:3000/process` with the required JSON structure.
    2. Display the API response in the `output` field.
    
    #### Key Notes:
    - Focus on creating reusable components and data validations to enhance code efficiency and maintainability.
    - The `limit` feature allows for creative freedom and can showcase your skills, especially when complemented by backend implementation

---

## Integration with GitHub

### Steps:
1. **Push Code to GitHub**:
   - Include the `Dockerfile` and GitHub Workflow files in the root folder.
   - Ensure the `.github` folder is added and not hidden.

2. **GitHub Actions Pipeline**:
   - Configure the workflow to build a Docker image using GitHub Actions.

3. **Share**:
   - Submit the GitHub repository link.
   - Attach the Docker image link.

---

## Docker and GitHub Package

### Docker Image:
- Built using the provided Dockerfile.

### GitHub Package Link:
- [https://github.com/<profile>?tab=packages](https://github.com/<profile>?tab=packages)

**Note**:
- The package name will match your repository name: `ghcr.io/<profile>/<repo>:latest`

---

## Example Submission Links

- **GitHub Repository**: `[GitHub Repo Link]`
- **Docker Image**: `ghcr.io/<profile>/<repo>:latest`

---