import express from 'express';

import {signup,signin,googleAuh } from '../controllers/Auth.js';


const router = express.Router();

//CREation of User 

router.post("/signup",signup);

//sign in
router.post("/signin",signin);

//Google Authentification 
router.post("/google",googleAuh);

export default router ;