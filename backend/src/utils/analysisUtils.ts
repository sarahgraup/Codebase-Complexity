export type TAnalysisType =
  | 'cyclomatic-complexity'
  | 'code-duplication'
  | 'inheritance-depth'
  | 'refactoring'
  | 'code-coverage'
  | 'sqale-rating'
  | 'bug-count';

interface AnalysisMessage {
  id: string;
  content: string;
  role: string;
}

export interface IAnalysisMessages {
  'cyclomatic-complexity': AnalysisMessage;
  'code-duplication': AnalysisMessage;
}

export const analysisMessages: IAnalysisMessages = {
  'cyclomatic-complexity': {
    id: 'cyclomatic-complexity-id',
    content: `Calculate the cyclomatic complexity of the given code repository. 
      Represent the source code as a Control Flow Graph (CFG) and use the basic cyclomatic complexity formula:
      Cyclomatic Complexity = E - N + 2P, where: E is the number of edges (control flow paths),N is the number of nodes (basic blocks),
      P is the number of connected components.For each function or method in the repository, provide: 1.
      The total number of nodes (N). 2. The total number of edges (E).3. The number of connected components (P).4.
      The calculated cyclomatic complexity.Provide results for each function or method separately and then an overall complexity score for the entire repository.
      Additionally, return the data in a structured JSON format. use the following stucture:
      {
        "Folders": [
          "Folder1": {
            "numOfFiles": numOfFiles,
            "Files": {
              "path/to/file1": {
                "fileNumOfLines": numOfLines,
                "Functions":[
                  {"functionName": "function1", "funcNumOfLines": numOfLines1, "complexity": 2},
                  {"functionName": "function2",  "funcNumOfLines": numOfLines2, "complexity": 4},
                ...
                ]
              
              },
              "path/to/file2": {
                "fileNumOfLines": numOfLines,
                "Functions":[
                  {"functionName": "function1", "funcNumOfLines": numOfLines1, "complexity": 2},
                  {"functionName": "function2",  "funcNumOfLines": numOfLines2, "complexity": 4},
                ...
                ]
              
              }
            },
            "Folder2":{...},
            ...
  ],
        "TotalComplexity": 60
      }
    `,
    role: 'test',
  },
  'code-duplication': {
    id: 'code-duplication-id',
    content: `Please analyze the given code repository for code duplication. 
    Identify and report on instances where the same or similar code appears in different places within the repository.
     Use an appropriate similarity threshold (e.g., 90%) to detect both exact duplicates and near-duplicates.
     For each instance of duplicated code, provide:

     The lines of code (LOC) that are duplicated.
     The file names where the duplication occurs.
     The total number of occurrences of each duplicated code block.
     The similarity percentage.
     Additionally, provide an overall summary of code duplication within the entire repository,
      including the total number of duplicated lines and the percentage of the codebase that is duplicated.
      Return the data in a structured JSON format using the following structure:
      {
        "DuplicatedCodeBlocks": [
          {
            "codeSnippet": "example code snippet...",
            "files": [
              {"fileName": "file1.js", "startLine": 10, "endLine": 20},
              {"fileName": "file2.js", "startLine": 15, "endLine": 25}
            ],
            "similarityPercentage": 95,
            "occurrences": 2
          },
          {
            "codeSnippet": "another duplicated snippet...",
            "files": [
              {"fileName": "file3.js", "startLine": 30, "endLine": 40},
              {"fileName": "file4.js", "startLine": 35, "endLine": 45},
              {"fileName": "file5.js", "startLine": 50, "endLine": 60}
            ],
            "similarityPercentage": 92,
            "occurrences": 3
          }
        ],
        "TotalDuplicatedLines": 150,
        "TotalLinesOfCode": 2000,
        "DuplicationPercentage": 7.5
      }`,
    role: 'test',
  },
};

export function getAnalysisMessage(analysisType: keyof IAnalysisMessages) {
  const message = analysisMessages[analysisType];
  return message;
}
