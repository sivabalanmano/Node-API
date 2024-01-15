import {v4 as uuidv4} from "uuid";
// import connect from '../config/db.js'

let users = []

export const getuserName = (req,res) =>{

        return res.json({
            status:true,
            users,
            
          })
    }
export  const postuserName = (req,res) =>{
    const datas = req.body.datas;

    let postman ={
        id: uuidv4(),
        datas,
    }
    users.push(postman);

   return res.json({
    message:"happy ending"
   })
}
export  const getusersName = (req,res) =>{
    const { id } = req.params

    const finding = users.find((users) => users.id === id)

    res.send(finding)
}
export const deletuserName = (req,res)=>{
    const { id } = req.params

   let index = users.findIndex((users)=> users.id === id )

    users.splice(index, 1);

    res.send(`succesfully delited ${users.fname}`)
}
export const patchuserName = (req,res)=>{
    const { id } = req.params
    const data = req.body.data;
    const isComplet =req.body.isComplet;
    const dataIndex = users.findIndex((user) => user.id === id)

    users[dataIndex].data = data;
    users[dataIndex].isComplet = isComplet;
    
  
   return res.json({
    message:"data updated"
   })


}