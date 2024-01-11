import {v4 as uuid} from 'uuid';

let users = []

export const getuserName = (req,res) =>{

    res.send(users);
}
export  const postuserName = (req,res) =>{
    const user = req.body;

    users.push({...user,id: uuid() });

    res.send(`adding new name ${user.fname} add`);

}
export  const getusersName = (req,res) =>{
    const { id } = req.params

    const finding = users.find((users) => users.id === id)

    res.send(finding)
}
export const deletuserName = (req,res)=>{
    const { id } = req.params

    users = users.filter((users)=> users.id !== id )

    res.send(`succesfully delited ${users.fname}`)
}
export const patchuserName = (req,res)=>{
    const { id } = req.params
    const {fname,lname,age} = req.body
    const user = users.find((user) => user.id === id)
    
    if(fname) user.fname = fname;

    if(lname) user.lname = lname;
    
    if(age) user.age = age;

    res.send(`user has modifing  ${id} `)


}