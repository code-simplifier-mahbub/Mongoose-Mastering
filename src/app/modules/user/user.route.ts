import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get('/get-user', getUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser)


export default router 