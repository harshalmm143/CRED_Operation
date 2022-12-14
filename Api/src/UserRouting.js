module.exports = (app) => {

    const UserController = require('./UserController')

    app.get("/alluser", UserController.alluser)
    app.post("/adduser", UserController.adduser)
    app.put("/updateuser/:UserId", UserController.updateuser)
    app.delete("/deleteuser/:UserId", UserController.deleteuser)
    app.get("/userexist/:Email", UserController.userexist)
    app.get("/getuserbyid/:userId",UserController.getuserbyid)

}