import express from 'express';
import { AddVideo, Addviews, DeleteVideo, getBytags, getrandom, gettrends, getVideo, search, UpdateVideo } from '../controllers/video.js';
import {verifyToken} from '../verifyToken.js';
const router = express.Router();

router.post("/add",verifyToken,AddVideo);
router.put('/:id',verifyToken,UpdateVideo);
router.delete('/:id',verifyToken,DeleteVideo);
router.get('/find/:id',getVideo);
router.put('/view/:id',Addviews);
router.get('/trend',gettrends);
router.get('/random',getrandom);
router.get('/tags',getBytags);
router.get('/search',search);

export default router ;