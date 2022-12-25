import { getUser } from '../models/users';
import { response, Router } from "express";
import {getUsers,createUser,login, updateUser, deleteUser} from '../models/users';
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

//User End Points
router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/user',jsonParser, createUser);
router.post('/user/login',jsonParser, login);
router.get('/',jsonParser,function(){
    response.send('Welcome to the store');
})










export default router;