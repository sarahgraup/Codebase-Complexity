import { IRepositoryInfo, IRepoAnalysis } from "./interfaces";
export const mockRepoInfo: IRepositoryInfo = {
  repository: "sarahgraup/sudokusolver",
  remote: "github",
  branch: "main",
  private: false,
  status: "completed",
  filesProcessed: 9,
  numFiles: 9,
  sha: "33fabd9fa224fa884e2bceb1af9fa632655c0060",
};

export const mockResult: IRepoAnalysis = {
    
    "sources": [
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/app.js",
            "linestart": 48,
            "lineend": 65,
            "summary": "This is an arrow function that listens for a GET request to a specific endpoint with two parameters: difficulty and filename. It then uses these parameters to create a file path and attempts to solve a Sudoku puzzle from the file using a CDCL solver. If the puzzle is solved, it sends back all the steps taken to solve it. If it fails to solve the puzzle or process it, it sends an appropriate error message.",
            "distance": 0.2466184055891384
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "",
            "linestart": null,
            "lineend": null,
            "summary": "The directory named `sudoku-solver` contains a Sudoku puzzle solver project with a user-friendly interface. The project has a backend built using Express and a frontend built using React. The backend includes configuration files, error handling middleware, and modules for handling Sudoku puzzles. The frontend includes configuration files for ESLint and TypeScript, as well as React components, hooks, and utility functions used in the application. The `package.json` file specifies a single dependency for the project, which is the eslint package with a version of at least 9.9.0. The `README.md` file provides an overview of the project, including information on the tech stack used, setup instructions, features, and a roadmap for future improvements.",
            "distance": 0.2589780666880396
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src/Controls",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-frontend/src/Controls` directory contains two TypeScript files. \n\nThe first file, `ControlPanel.tsx`, exports a React functional component called `ControlPanel`. This component renders a `Grid` component with five `Button` components. The `ControlPanel` component takes in an object with `onStart`, `onPause`, `onResume`, `onStepForward`, and `onStepBackward` properties as props, which are used as `onClick` handlers for the `Button` components. The `IPanelProps` interface defines the shape of the props object passed to the `ControlPanel` component. It has five properties, all of which are functions: `onStart`, `onPause`, `onResume`, `onStepForward`, and `onStepBackward`.\n\nThe second file, `DifficultySelector.tsx`, exports a function component called `DifficultySelector`. This component displays a list of puzzles based on the selected difficulty level. It takes in two props: `onSelectPuzzle` and `puzzles`. The function also contains two `useState` hooks that set the selected puzzle value and the active difficulty level. Additionally, there are two arrow functions: `handleChange` and `renderDifficultyValue`. `handleChange` sets a new filename based on the value of the event target and calls three functions: `setActiveDifficulty`, `setSelectedPuzzleVal`, and `onSelectPuzzle`. `renderDifficultyValue` returns an arrow function that either returns a substring of the selected puzzle value or the uppercase version of the difficulty level.",
            "distance": 0.27152146014186285
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-frontend` directory contains the frontend code for a Sudoku game. It includes configuration files for ESLint and TypeScript, as well as an EditorConfig file for maintaining consistent coding styles. The `public` directory contains the main HTML file and a manifest file for the web application. The `src` directory contains the React components, hooks, and utility functions used in the application. The `App` component manages the overall state of the app, including the current Sudoku board, solver status, and selected difficulty and puzzle list. The `SudokuBoard` component displays the Sudoku grid, while the `SudokuCell` component represents an individual cell in the grid. The `ControlPanel` component provides buttons for controlling the solver, and the `DifficultySelector` component allows selection of difficulty levels and specific puzzles. The `useSudokuSolver` hook defines a custom hook for the Sudoku solver application. The `index.tsx` file is the entry point for the React application, and the `reportWebVitals.js` and `setupTests.js` files provide performance measurement and testing functionality, respectively.",
            "distance": 0.2730181325045471
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/README.md",
            "linestart": null,
            "lineend": null,
            "summary": "The file /README.md provides an overview of the Sudoku Solver project. It explains that the project is a Conflict-Driven Clause Learning (CDCL) algorithm for solving Sudoku puzzles, which is combined with a user-friendly interface to efficiently solve puzzles of varying difficulty. The file also provides information on the tech stack used, setup instructions, features, and a roadmap for future improvements.\n\n- `Overview`: Provides an overview of the project and its purpose.\n- `Tech Stack`: Lists the technologies used in the project.\n- `Setup`: Provides instructions on how to clone and install the project.\n- `Features`: Lists the features of the Sudoku Solver.\n- `Roadmap`: Lists future improvements planned for the project.",
            "distance": 0.2749782905021271
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-frontend/src` directory contains the source code for a React application that provides a Sudoku solver. The main file is `App.tsx`, which exports a React function component called `App` that renders the entire application. The application includes a `QueryClientProvider` component, a `SudokuProvider` component, a `ThemeProvider` component, a `CssBaseline` component, a `Grid` component, a `Header` component, a `Divider` component, a `SudokuBoardPanel` component, and an `InstructionsPanel` component. The `/sudoku-frontend/src/Controls` directory contains two TypeScript files that define the `ControlPanel` and `DifficultySelector` components. The `/sudoku-frontend/src/SudokuBoard` directory contains two TypeScript files that define the `SudokuBoard` and `SudokuCell` components. The `SudokuSolverContext.tsx` file defines a React context for a Sudoku solver application. The `/sudoku-frontend/src/components` directory contains three code files that define the `Header`, `InstructionsPanel`, and `SudokuBoardPanel` components. The `/sudoku-frontend/src/hooks` directory contains a single file named `useSudokuSolver.tsx` that defines a custom hook called `useSudokuSolver`. The `/sudoku-frontend/src/utils` directory contains utility functions and types used in the Sudoku application. The `index.tsx` file is the entry point for the React application, and the `reportWebVitals.js` and `setupTests.js` files provide performance measurement and testing functionality, respectively.",
            "distance": 0.276316469044975
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src/utils/queries.ts",
            "linestart": 31,
            "lineend": 37,
            "summary": "This is an arrow function named `useGetActions` that takes an object with properties `difficulty` and `filename` as its argument. It returns a call to the `useQuery` hook with three arguments: an object with a `queryKey` property that is the result of calling the `actionsQueryKey` function with the `difficulty` and `filename` properties of the argument object, a function that makes a GET request to a URL generated by calling the `solve.actions` function with the `difficulty` and `filename` properties of the argument object, and a `select` function that returns the `steps` property of the response data.",
            "distance": 0.27965332037447965
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/sudokus",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-backend/sudokus` directory contains three subdirectories: `easy`, `medium`, and `hard`. Each subdirectory contains text files representing Sudoku puzzles of varying difficulty levels. The puzzles are represented as 9x9 or 16x16 grids of numbers and/or letters, with some cells already filled and others empty. Some files define a `Sudoku` class with methods for initializing, solving, and validating the puzzle, while others only contain the initial state of the puzzle. There are also functions for reading and writing puzzles to files, as well as a `parse_grid` function for converting a string representation of a puzzle into a 2D list of integers. The goal of each puzzle is to fill in the empty cells with numbers and/or letters from 1 to 9 or A to F, such that each row, column, and 3x3 or 4x4 subgrid contains all the numbers and/or letters from 1 to 9 or A to F without repetition.",
            "distance": 0.27992534637446564
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/package.json",
            "linestart": null,
            "lineend": null,
            "summary": "Overall summary: This is a JSON file that specifies a single dependency for the project, which is the eslint package with a version of at least 9.9.0.\n\n- dependencies: This is an object that lists the dependencies required by the project.\n- eslint: This is the name of the package that the project depends on.\n- ^9.9.0: This is the version range of the package that the project depends on. The caret (^) symbol indicates that the project can use any version of the package that is compatible with version 9.9.0, but not any version that is incompatible with it.",
            "distance": 0.28262480704486637
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/solutions",
            "linestart": null,
            "lineend": null,
            "summary": "The directory `/sudoku-backend/solutions` contains multiple text files, each representing a solution to a Sudoku puzzle. The format of the files varies, but most contain a representation of the solved puzzle and the sum of each row, column, and 3x3 sub-grid. Some files also define classes and functions for working with Sudoku puzzles, including methods for initializing, solving, and validating puzzles. The functionality of the classes and functions varies, but most involve checking if a given puzzle is a valid solution to a Sudoku puzzle or solving a Sudoku puzzle using a backtracking algorithm.",
            "distance": 0.2830297440833196
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/package.json",
            "linestart": null,
            "lineend": null,
            "summary": "The package.json file is used to manage the dependencies and metadata of a Node.js project. It includes information such as the project name, version, description, author, license, and dependencies. \n\n- \"name\": Specifies the name of the project.\n- \"version\": Specifies the version of the project.\n- \"description\": Provides a brief description of the project.\n- \"main\": Specifies the entry point of the project.\n- \"scripts\": Specifies the scripts that can be run with npm.\n- \"repository\": Specifies the location of the project's source code.\n- \"author\": Specifies the author of the project.\n- \"license\": Specifies the license under which the project is released.\n- \"bugs\": Specifies the location where bugs can be reported.\n- \"homepage\": Specifies the homepage of the project.\n- \"dependencies\": Specifies the dependencies required by the project.\n\nThis specific package.json file includes the following dependencies:\n\n- \"axios\": A promise-based HTTP client for the browser and Node.js.\n- \"cors\": A package for providing a Connect/Express middleware that can be used to enable CORS with various options.\n- \"dotenv\": A zero-dependency module that loads environment variables from a .env file into process.env.\n- \"express\": A fast, unopinionated, minimalist web framework for Node.js.\n- \"express-ws\": A lightweight WebSocket library for Node.js that adds WebSocket support to Express applications.\n- \"fs\": A built-in Node.js module that provides an API for interacting with the file system.\n- \"jest\": A JavaScript testing framework.\n- \"nodemon\": A utility that monitors for changes in your source and automatically restarts your server.\n- \"socket.io\": A library that enables real-time, bidirectional and event-based communication between the browser and the server.",
            "distance": 0.2833782782023303
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-backend` directory contains the backend code for a Sudoku solver API built using Express. It includes configuration files, error handling middleware, and modules for handling Sudoku puzzles. The `app.js` file defines several endpoints for handling GET requests to retrieve Sudoku puzzles, solve them, and retrieve a list of available puzzles. The `config.js` file exports a configuration object that contains the PORT number for the server to listen on. The `expressError.js` file defines custom error classes for handling specific HTTP error responses. The `server.js` file is the entry point for the Sudoku backend server. The `solutions` directory contains text files representing solutions to Sudoku puzzles. The `sudoku.js` file defines a `Sudoku` class for representing and solving Sudoku puzzles. The `sudokus` directory contains subdirectories with text files representing Sudoku puzzles of varying difficulty levels.",
            "distance": 0.28470597126901875
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/sudokus/easy",
            "linestart": null,
            "lineend": null,
            "summary": "The directory `/sudoku-backend/sudokus/easy` contains 10 text files, each representing a Sudoku puzzle of easy difficulty level. The files contain a 9x9 grid of numbers, where some cells are already filled and others are empty. The goal is to fill in the empty cells with numbers from 1 to 9, such that each row, column, and 3x3 subgrid contains all the numbers from 1 to 9 exactly once. \n\nSome files contain a `Sudoku` class with methods to initialize a new Sudoku puzzle, get and set cell values, check if a value can be placed in a cell without violating the Sudoku rules, and solve the puzzle using a backtracking algorithm. There are also functions to read a Sudoku puzzle from a file, write a Sudoku puzzle to a file, and solve a Sudoku puzzle from a file. \n\nOther files contain no classes or functions, only the initial state of the Sudoku puzzle.",
            "distance": 0.2850925412608495
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/sudokus/hard",
            "linestart": null,
            "lineend": null,
            "summary": "The directory `/sudoku-backend/sudokus/hard` contains 16 text files, each representing a hard level Sudoku puzzle. The files contain a 9x9 or 16x16 grid of numbers and/or letters, where some cells are already filled and others are empty. The goal of the puzzle is to fill in the empty cells with numbers and/or letters from 1 to 9 or A to F, such that each row, column, and 3x3 or 4x4 subgrid contains all the numbers and/or letters from 1 to 9 or A to F without repetition. The files contain either the initial state of the puzzle or a `Sudoku` class with methods to solve the puzzle using a recursive backtracking algorithm. There are no other classes or functions defined in the files.",
            "distance": 0.2866654479505697
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/sudokus/medium",
            "linestart": null,
            "lineend": null,
            "summary": "The directory `/sudoku-backend/sudokus/medium` contains 12 text files, each representing a medium-level Sudoku puzzle. Some files only contain the initial state of the puzzle, while others define a `Sudoku` class with methods for initializing, solving, and validating the puzzle. One file defines a `parse_grid` function for converting a string representation of a puzzle into a 2D list of integers. Another file defines a `create_puzzle` function for randomly selecting a pre-defined grid and creating a new `Sudoku` object from it. The puzzles are all 9x9 grids with some cells filled in and others left empty, and the goal is to fill in the empty cells with numbers from 1 to 9 such that each row, column, and 3x3 sub-grid contains all the numbers from 1 to 9 without repetition.",
            "distance": 0.28710507048589373
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-backend/.prettierc.json",
            "linestart": null,
            "lineend": null,
            "summary": "This is a configuration file for the Prettier code formatter. It sets various formatting options for different file types, such as tab size, use of spaces instead of tabs, word wrap, and print width. It also specifies that Prettier should be used as the default formatter for JavaScript, JSON, TypeScript, and CSS files. \n\nThere are no classes or functions in this file.",
            "distance": 0.2874951869260769
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src/components",
            "linestart": null,
            "lineend": null,
            "summary": "The `/sudoku-frontend/src/components` directory contains three code files. The `Header.tsx` file defines a functional component that returns a Grid component with a Typography component inside. The `InstructionsPanel.tsx` file exports a functional component that renders a Grid container with instructions and a difficulty selector for the Sudoku game. It also conditionally renders a CircularProgress component, an error message, or a message indicating that there are no puzzles available based on the state of the SudokuSolverContext. The `SudokuBoardPanel.tsx` file defines a functional component that renders a ControlPanel, a SudokuBoard, and a SolverStepsAnimation component. It also uses the useSudokuContext hook to get values from the SudokuSolverContext.",
            "distance": 0.28776230957955373
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src/Controls/DifficultySelector.tsx",
            "linestart": 35,
            "lineend": 56,
            "summary": "This is an arrow function that maps an array of strings to a set of FormControl components. Each FormControl contains a Select component that displays a list of puzzles based on the selected difficulty level. The selected puzzle value is stored in the state and is updated when the user selects a new puzzle.",
            "distance": 0.2878479442868218
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/package.json",
            "linestart": null,
            "lineend": null,
            "summary": "The package.json file is used to manage the dependencies and scripts for a Node.js project. It includes information about the project name, version, dependencies, scripts, and other metadata. \n\n- \"name\": Specifies the name of the project.\n- \"version\": Specifies the version of the project.\n- \"private\": Prevents the package from being accidentally published to the npm registry.\n- \"dependencies\": Lists the dependencies required for the project to run.\n- \"scripts\": Defines the scripts that can be run to perform various tasks.\n- \"eslintConfig\": Configures the ESLint linter for the project.\n- \"browserslist\": Specifies the browsers that the project should support.\n- \"devDependencies\": Lists the dependencies required for development purposes.\n\nClasses and functions:\n- No classes or functions are defined in this file.",
            "distance": 0.2880159485316198
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/src/reportWebVitals.js",
            "linestart": 3,
            "lineend": 11,
            "summary": "This is an arrow function that imports a module called 'web-vitals' and then calls several functions from that module, passing in another function called 'onPerfEntry' as an argument to each of them. The functions being called are getCLS, getFID, getFCP, getLCP, and getTTFB.",
            "distance": 0.28891061808809293
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/components.md",
            "linestart": null,
            "lineend": null,
            "summary": "The file /sudoku-frontend/components.md contains several React components that make up the frontend of a Sudoku game. The App component manages the overall state of the app, including the current Sudoku board, solver status, and selected difficulty and puzzle list. It also has functions to load a new puzzle, control the solver, and handle back and forward steps. The SudokuBoard component displays the Sudoku grid, while the SudokuCell component represents an individual cell in the grid. The ControlPanel component provides buttons for controlling the solver, and the DifficultySelector component allows selection of difficulty levels and specific puzzles. Finally, the SolverStepsAnimation component visualizes each step of the Sudoku solving process, including assignments, conflicts, and backtracking.",
            "distance": 0.28920639350298816
        },
        {
            "repository": "sarahgraup/sudokusolver",
            "remote": "github",
            "branch": "main",
            "filepath": "/sudoku-frontend/.eslintrc.json",
            "linestart": null,
            "lineend": null,
            "summary": "This is a configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. The file specifies the environment, extends the rules from two other configurations, sets global variables, overrides rules for specific file types, specifies the parser and parser options, defines plugins, and sets additional settings.\n\n- `env`: Specifies the environments for the code to run in, including the browser, ECMAScript 6, Node.js, and Jest.\n- `extends`: Extends the rules from two other configurations, \"airbnb\" and \"react-app\".\n- `globals`: Specifies global variables that are predefined within the code.\n- `overrides`: Overrides rules for specific file types, including TypeScript and JavaScript files.\n- `parser`: Specifies the parser to use, which is \"@typescript-eslint/parser\".\n- `parserOptions`: Specifies options for the parser, including the Babel options, ECMAScript features, and source type.\n- `plugins`: Specifies the plugins to use, including \"react\" and \"react-hooks\".\n- `settings`: Specifies additional settings, including the version of React to use, the file extensions to import, and the resolver for TypeScript.",
            "distance": 0.29060875401287667
        }
    ],
    "message": {
        "Analysis": {
            "Folders": [
                {
                    "sudoku-backend": {
                        "numOfFiles": 2,
                        "Files": {
                            "app.js": {
                                "fileNumOfLines": 95,
                                "Functions": [
                                    {
                                        "functionName": "app.get('/puzzles/:difficulty/:filename')",
                                        "funcNumOfLines": 15,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "app.get('/solve/:difficulty/:filename')",
                                        "funcNumOfLines": 18,
                                        "complexity": 5
                                    },
                                    {
                                        "functionName": "app.get('/puzzles')",
                                        "funcNumOfLines": 14,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "app.get('/')",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "app.use(function (req, res))",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "app.use(function (err, req, res, next))",
                                        "funcNumOfLines": 8,
                                        "complexity": 2
                                    }
                                ]
                            },
                            "sudoku.js": {
                                "fileNumOfLines": 458,
                                "Functions": [
                                    {
                                        "functionName": "constructor",
                                        "funcNumOfLines": 16,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "getSudoku",
                                        "funcNumOfLines": 14,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "createBoard",
                                        "funcNumOfLines": 16,
                                        "complexity": 4
                                    },
                                    {
                                        "functionName": "getSubgridIndex",
                                        "funcNumOfLines": 6,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "cdclSolver",
                                        "funcNumOfLines": 39,
                                        "complexity": 10
                                    },
                                    {
                                        "functionName": "getSortedValuesByConstrainingScore",
                                        "funcNumOfLines": 11,
                                        "complexity": 2
                                    },
                                    {
                                        "functionName": "chooseBestCell",
                                        "funcNumOfLines": 10,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "recordDecisionPoint",
                                        "funcNumOfLines": 13,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "assignSingleElements",
                                        "funcNumOfLines": 16,
                                        "complexity": 5
                                    },
                                    {
                                        "functionName": "getCellWithMinimumRemainingValues",
                                        "funcNumOfLines": 16,
                                        "complexity": 4
                                    },
                                    {
                                        "functionName": "applyDegreeHeuristics",
                                        "funcNumOfLines": 13,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "chooseLeastConstrainingValue",
                                        "funcNumOfLines": 14,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "calculateConstrainingValue",
                                        "funcNumOfLines": 28,
                                        "complexity": 6
                                    },
                                    {
                                        "functionName": "calculatePossibleValues",
                                        "funcNumOfLines": 16,
                                        "complexity": 4
                                    },
                                    {
                                        "functionName": "getValidOptions",
                                        "funcNumOfLines": 6,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "isValidAssignment",
                                        "funcNumOfLines": 7,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "isInRow",
                                        "funcNumOfLines": 5,
                                        "complexity": 2
                                    },
                                    {
                                        "functionName": "isInCol",
                                        "funcNumOfLines": 9,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "isInSubgrid",
                                        "funcNumOfLines": 8,
                                        "complexity": 2
                                    },
                                    {
                                        "functionName": "countConstraints",
                                        "funcNumOfLines": 24,
                                        "complexity": 4
                                    },
                                    {
                                        "functionName": "assignValue",
                                        "funcNumOfLines": 20,
                                        "complexity": 2
                                    },
                                    {
                                        "functionName": "hasConflict",
                                        "funcNumOfLines": 14,
                                        "complexity": 5
                                    },
                                    {
                                        "functionName": "analyzeConflict",
                                        "funcNumOfLines": 32,
                                        "complexity": 7
                                    },
                                    {
                                        "functionName": "unassignValue",
                                        "funcNumOfLines": 17,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "copyBoardState",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "copyRowState",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "copyColState",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "copySubgridState",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "isSudokuSolved",
                                        "funcNumOfLines": 9,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "logAction",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "getActionLog",
                                        "funcNumOfLines": 3,
                                        "complexity": 1
                                    }
                                ]
                            }
                        }
                    },
                    "sudoku-frontend": {
                        "numOfFiles": 8,
                        "Files": {
                            "src/App.tsx": {
                                "fileNumOfLines": 47,
                                "Functions": [
                                    {
                                        "functionName": "App",
                                        "funcNumOfLines": 44,
                                        "complexity": 1
                                    }
                                ]
                            },
                            "src/Controls/ControlPanel.tsx": {
                                "fileNumOfLines": 29,
                                "Functions": [
                                    {
                                        "functionName": "ControlPanel",
                                        "funcNumOfLines": 26,
                                        "complexity": 1
                                    }
                                ]
                            },
                            "src/Controls/DifficultySelector.tsx": {
                                "fileNumOfLines": 56,
                                "Functions": [
                                    {
                                        "functionName": "DifficultySelector",
                                        "funcNumOfLines": 53,
                                        "complexity": 3
                                    },
                                    {
                                        "functionName": "handleChange",
                                        "funcNumOfLines": 6,
                                        "complexity": 1
                                    },
                                    {
                                        "functionName": "renderDifficultyValue",
                                        "funcNumOfLines": 6,
                                        "complexity": 3
                                    }
                                ]
                            },
                            "src/SudokuBoard/SudokuBoard.tsx": {
                                "fileNumOfLines": 57,
                                "Functions": [
                                    {
                                        "functionName": "SudokuBoard",
                                        "funcNumOfLines": 54,
                                        "complexity": 7
                                    }
                                ]
                            },
                            "src/SudokuBoard/SudokuCell.tsx": {
                                "fileNumOfLines": 24,
                                "Functions": [
                                    {
                                        "functionName": "SudokuCell",
                                        "funcNumOfLines": 21,
                                        "complexity": 2
                                    }
                                ]
                            },
                            "src/components/Header.tsx": {
                                "fileNumOfLines": 16,
                                "Functions": [
                                    {
                                        "functionName": "Header",
                                        "funcNumOfLines": 13,
                                        "complexity": 1
                                    }
                                ]
                            },
                            "src/components/InstructionsPanel.tsx": {
                                "fileNumOfLines": 38,
                                "Functions": [
                                    {
                                        "functionName": "InstructionsPanel",
                                        "funcNumOfLines": 35,
                                        "complexity": 4
                                    }
                                ]
                            },
                            "src/components/SudokuBoardPanel.tsx": {
                                "fileNumOfLines": 41,
                                "Functions": [
                                    {
                                        "functionName": "SudokuBoardPanel",
                                        "funcNumOfLines": 38,
                                        "complexity": 1
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "TotalComplexity": 119
        },
        "endMessage": "```\n\nThis JSON structure represents the cyclomatic complexity analysis of the given code repository. The total complexity of the entire repository is 119, which is the sum of the complexities of all functions across all files.\n\nNote that this analysis is based on the provided code snippets and may not include all files in the repository. The complexity calculations are estimates based on the visible control flow structures in each function."
    }
}

