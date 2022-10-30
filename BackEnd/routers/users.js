import express from 'express';
import { deletee, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.put('/:id',verifyToken,update);
router.get('/get/:id',getUser);
router.delete('/:id',verifyToken,deletee);
router.put('/subs/:id',verifyToken,subscribe);
router.put('/unsubs/:id',verifyToken,unsubscribe);
router.put('/like/:videoid',verifyToken,like);
router.put('/dislike/:videoid',verifyToken,dislike);



export default router ;