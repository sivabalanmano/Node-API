import express from "express";
import  {getuserName,postuserName,deletuserName,patchuserName, getusersName} from  '../controllers/user.js'

const router = express.Router();


router.get('/', getuserName);

router.post('/', postuserName);

router.get('/:id',  getusersName)

router.delete('/:id', deletuserName);

router.patch('/:id', patchuserName)

export default router;