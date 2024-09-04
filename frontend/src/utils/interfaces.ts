export interface IRepoInput {
  remote: string;
  repository: string;
  branch: string;
}

export interface IRepositoryInfo {
  repository: string;
  remote: string;
  branch: string;
  private: boolean;
  filesProcessed: number;
  numFiles: number;
  sha: string;
  status: string;
  analysis?: IRepoAnalysis;
}

export interface IRepoAnalysis {
  message: IAnalysisMessage;
  sources: TRepoSource[];
}

export interface IAnalysisMessage {
  Analysis: IAnalysisData;
  endMessage: string;
}

type TRepoSource = {
  repository: string;
  remote: string;
  branch: string;
  filepath: string;
  linestart: number | null;
  lineend: number | null;
  summary: string;
  distance: number;
};

export interface IFunction {
  functionName: string;
  complexity: number;
  funcNumOfLines: number;
}

export interface IFile {
  fileNumOfLines: number;
  Functions: IFunction[];
}

export interface IFolder {
  numOfFiles: number;
  Files: { [filePath: string]: IFile };
}

export interface IAnalysisData {
  Folders: Array<{
    [folderName: string]: IFolder;
  }>;
  TotalComplexity: number;
}

