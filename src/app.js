const express = require('express');
const app = express();

const connectDB = require("./config/database");
const User = require('./models/user')

app.use(express.json());

// post data to database /signup
app.post('/signup', async (req,res)=>{
  // const user = new User({
  //   firstName : "Anil",
  //   lastName : "Joshi",
  //   password : "1234",
  //   emailId : "123@gmail.com"
  // })

  const user = new User(req.body);


try {
    await user.save();
    res.send("user data saved sucessfully");
} catch (error) {
   console.log("Error in saving user data");
}
   
})

// get all users data /feed
app.get("/feed", async (req,res)=>{
  try {
     const users = await User.find({});
     res.send(users);
  } catch (error) {
    console.log("something went wrong" );
  }
})
 
// get userdata by emailId 

app.get("/user", async (req,res)=>{
  try {
    const users = await User.find({emailId : req.body.emailId})
    res.send(users);
  } catch (error) {
    console.log("something went wrong")
  }
})


connectDB()
.then(()=>{
    console.log("database connection established successful");
    app.listen(3000,()=>{
        console.log("server is listning")
    })
})
.catch((err)=>{
    console.error("database cannot be connected !!!", err);
})





