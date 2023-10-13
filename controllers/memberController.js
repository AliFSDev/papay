let memberController = module.exports;

memberController.home = (req, res) => {
    console.log("GET cont.home user kirdi");
    res.send("home sahifasidasiz");
}

memberController.signup = (req, res) => {
    console.log("POST cont.signup user kirdi");
    res.send("signup sahifasidasiz");
}

memberController.login = (req, res) => {
    console.log("POST cont.login user kirdi");
    res.send("login sahifasidasiz");
}

memberController.logout = (req, res) => {
    console.log("GET cont.logout user kirdi");
    res.send("logout sahifasidasiz");
}