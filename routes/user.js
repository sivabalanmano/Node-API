import express from "express";
import  {getuserName,postuserName,deletuserName,patchuserName, getusersName} from  '../controllers/user.js'

const router = express.Router();


router.get('/', getuserName);

router.post('/add/', postuserName);

router.get('/get/:id',  getusersName)

router.delete('/delete/:id', deletuserName);

router.put('/update/:id', patchuserName)

export default router;