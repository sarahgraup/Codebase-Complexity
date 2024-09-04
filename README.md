# Codebase Complexity

## Description
A visual tool that utilizes Greptile Api to allow users to input their git repository and generate a heatmap of their codebase to show areas of Cyclomatic Complexity. This tool is valuable for project managers and tech leads to identify code hotspots that may require refactoring or additional testing.

### Cyclomatic Complexity
- **Definition**: Measures the number of linearly independent paths through a program’s source code. It counts the number of decisions (e.g., `if` statements, loops) in a function.
- **Why It Matters**: High cyclomatic complexity suggests that the code is hard to test and maintain due to too many paths. A high number typically indicates that the function is doing too much or is overly complicated.
- **Ideal Range**: Typically, a cyclomatic complexity of 1-10 is considered acceptable. Values above 10 might indicate that the function is too complex and may benefit from refactoring.

## Current Features
- **Repository Input**: Users can input their git repository URL.
- **Repository Info**: Users can view basic information about their repository.
- **Generate Analysis**: Users can click to generate an analysis of their codebase.
- **Visual Representation**: A circle packing graph displays all folders, files, and functions within the repository, color-coded from yellow to red based on cyclomatic complexity.

## Future Enhancements
- **Session Management**: Implement session management to retain user data across page reloads.
- **User Login**: Develop user login functionality and create a user database for storing user data.
- **Dynamic Updates**: Enable real-time updates to reflect changes in the codebase.
- **In-depth Error Handling**: Improve error handling mechanisms for better issue identification.
- **Comprehensive Analysis Metrics**: Add features for analyzing lines of code, cohesion and coupling, depth of inheritance, code duplication, and code coverage.
- **Analysis Panel**: Create an analysis panel for filtering and visualizing different metrics.
- **Export to PDF**: Implement functionality to export generated graphs as PDFs.

## Installation

### Backend Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarahgraup/codebase-complexity
   ```

2. Navigate to the `backend` directory:
   ```bash
   cd codebase-complexity/backend
   ```

3. Install NPM packages:
   ```bash
   npm install
   ```

4. Obtain a Greptile API Key.

5. Create a `.env` file in the `backend` directory with the following content:
   ```env
   API_KEY=__api_key__
   API_URL=__greptile_api_url__
   ```

### Frontend Installation

1. Navigate to the `frontend` directory:
   ```bash
   cd codebase-complexity/frontend
   ```

2. Install NPM packages:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add the backend URL:
   ```env
   API_URL=localhost:port
   ```

## Executing

1. Navigate to the `backend` folder and start the backend server:
   ```bash
   npx tsx src/server.ts
   ```

2. Ensure the backend server is running on the correct port.

3. Navigate to the `frontend` folder and start the frontend application:
   ```bash
   npm start
   ```

   Alternatively, you can build the frontend application:
   ```bash
   npm run build
   ```

## Roadmap

- [ ] **Session Management**: Implement session management to retain user data across page reloads.
- [ ] **User Login**: Develop user login functionality and create a user database for storing user data.
- [ ] **Dynamic Updates**: Enable real-time updates to reflect changes in the codebase.
- [ ] **In-depth Error Handling**: Improve error handling mechanisms for better issue identification.
- [ ] **Comprehensive Analysis Metrics**: Add features for analyzing lines of code, cohesion and coupling, depth of inheritance, code duplication, and code coverage.
- [ ] **Analysis Panel**: Create an analysis panel for filtering and visualizing different metrics.
- [ ] **Export to PDF**: Implement functionality to export generated graphs as PDFs.
