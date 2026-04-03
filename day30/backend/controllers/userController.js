 const createUsers =(req,res)=>{
    const users =[{id:1, username:"admin", email:"admin@gmail.com"},
                    {id:2, username:"john_doe", email:"john@gmail.com"},
                    {id:3, username:"jane_smith", email:"jane@gmail.com"},
                    {id:4, username:"michael", email:"michael@gmail.com"},
                    {id:5, username:"sarah", email:"sarah@gmail.com"},
                    {id:6, username:"rohit", email:"rohit@gmail.com"},
                    {id:7, username:"priya", email:"priya@gmail.com"},
                    {id:8, username:"amit", email:"amit@gmail.com"},
                    {id:9, username:"neha", email:"neha@gmail.com"},
                    {id:10, username:"vikas", email:"vikas@gmail.com"},
                ]
      res.send({status:"OK","data":{users}});          

};
export default createUsers;

