import React, { useState } from 'react';
import {
  Grid, FormControl, TextField, Dialog,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IRepoInput } from '../utils/interfaces';
import SpinnerButton from '../common/SpinnerButton';


type TInputProps = {
isOpen:boolean,
onClose: () => void,
    onConfirm: (repoInput: IRepoInput) => void,
    confirmDisable:boolean,
}

export default function RepositoryInput({
  isOpen, onClose, onConfirm, confirmDisable,
}:TInputProps) {
  const [repo, setRepo] = useState<IRepoInput>({ remote: '', repository: '', branch: '' });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setRepo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Submit url</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <TextField
              required
              name='remote'
              label='Remote'
              helperText='Github or Gitlab only'
              variant='outlined'
              value={repo.remote}
              fullWidth
              margin='normal'
              onChange={handleInputChange}
            />
            <TextField
              required
              name='repository'
              label='Repository'
              helperText='GitUser/RepoName'
              variant='outlined'
              value={repo.repository}
              fullWidth
              margin='normal'
              onChange={handleInputChange}
            />
            <TextField
              name='branch'
              label='Branch'
              helperText='e.g., main, master'
              variant='outlined'
              value={repo.branch}
              fullWidth
              margin='normal'
              onChange={handleInputChange}
            />
            <SpinnerButton
              onClick={() => {
                onConfirm(repo);
              }}
              variant='contained'
              isLoading={confirmDisable}
            >
              Submit
            </SpinnerButton>
          </FormControl>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
