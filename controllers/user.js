import {v4 as uuidv4} from "uuid";
import connection from "../config/db.js";
import sqlSring from "sqlstring"



export const getuserName = (req,res) =>{
    let query = sqlSring.format("SELECT * FROM  users");

    connection.query(query,(err,result)=>{
        if(err){
            return res.json({
                status:true,
                message:"somting went Wrong",
            });
        }
        let users = result;
        for(let i=0; i<users.length;i++){
           users[i].isComplet = users[i].isComplet == 1 ? true : false ;
        }
        return res.json({
            status:true,
            users,  
          })
    }) 
 }
export  const postuserName = (req,res) =>{
    const datas = req.body.datas;

    let query =sqlSring.format("INSERT INTO users (datas) value  (?)",[datas]);
    connection.query(query,(err,result)=>{
        if(err){
           console.log(err);

           return res.json({
            status:false,
            message:"somting went wrong",
           })
        }
        return res.json({
            status:true,
            message:"happy ending"
           })
    }) 
}
export  const getusersName = (req,res) =>{
    const { id } = req.params

    const finding = users.find((users) => users.id === id)

    res.send(finding)
}
export const deletuserName = (req,res)=>{
    const id = req.params.id;

    let query =sqlSring.format(`DELETE FROM users WHERE id = ?`,[id]);

    connection.query(query,(err,result)=>{
        if (err){
            console.log(err)
            return res.json({
                status:false,
                message:"someting went wrong"
            })
        }
        return res.json({
            status:true,
            message:"task deleted sucessfully"
        })
    })
}
export const patchuserName = (req,res)=>{
    const  id = req.params.id ;
    const datas = req.body.datas;
    const isComplet =req.body.isComplet;
    let query = sqlSring.format(
        `UPDATE users SET datas = ?, isComplet = ? WHERE id = ?`,
        [datas,isComplet,id]
        );
        connection.query(query,(err,results)=>{
            if(err){
                console.log(err)
                return res.json({
                    status:false,
                    message:"somting went wrong"
                });
            }
            return res.json({
                status:true,
                message:"data updated"
               })
        }) 
}