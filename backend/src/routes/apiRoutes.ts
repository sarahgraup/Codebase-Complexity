import express from 'express';
import { analyzeRepository, trackRepository, getRepoInfo } from 'controllers/repoController';


const router = express.Router();

router.post('/track', trackRepository);

router.post('/analyze', analyzeRepository);

router.get('/getInfo/:repositoryId', getRepoInfo);

export default router;
