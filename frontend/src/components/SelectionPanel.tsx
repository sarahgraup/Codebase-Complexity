import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { IFunction, IFile, IAnalysisData, IFolder } from "../utils/interfaces";


interface SelectionPanelProps {
  data: IAnalysisData;
  onSelectNode: (node: any) => void;
  selectedNode: any;
}

const SelectionPanel: React.FC<SelectionPanelProps> = ({
  data,
  onSelectNode,
  selectedNode,
}) => {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const handleClick = (path: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [path]: !prevOpen[path] }));
  };

  const renderFolders = () => {
    return Object.entries(data.Folders).map(([folderName, folder], index) => {
      return (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(folderName)}>
            <ListItemText
              primary={folderName}
              secondary={`Files: ${folder.numOfFiles}`}
            />
            {open[folderName] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[folderName]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderFiles(folder.Files, folderName)}
            </List>
          </Collapse>
        </React.Fragment>
      );
    });
  };

  const renderFiles = (
    files: { [filePath: string]: IFile },
    folderName: string
  ) => {
    return Object.entries(files).map(([filePath, file], index) => {
      const fullPath = `${folderName}/${filePath}`;
      return (
        <React.Fragment key={index}>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleClick(fullPath)}>
            <ListItemText
              primary={filePath}
              secondary={`Lines: ${file.fileNumOfLines}`}
            />
            {open[fullPath] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[fullPath]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderFunctions(file.Functions, fullPath)}
            </List>
          </Collapse>
        </React.Fragment>
      );
    });
  };

  const renderFunctions = (functions: IFunction[], filePath: string) => {
    return functions.map((func, index) => (
      <ListItem
        button
        sx={{ pl: 8 }}
        key={index}
        onClick={() => onSelectNode({ ...func, filePath })}
        selected={
          selectedNode &&
          selectedNode.functionName === func.functionName &&
          selectedNode.filePath === filePath
        }
      >
        <ListItemText
          primary={func.functionName}
          secondary={`Complexity: ${func.complexity}, Line: ${func.funcNumOfLines}`}
        />
      </ListItem>
    ));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Selection Panel</Typography>
        <List>{renderFolders()}</List>
      </CardContent>
    </Card>
  );
};

export default SelectionPanel;
