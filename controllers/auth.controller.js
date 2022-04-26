function login(req, res){
    res.json({data: 'Hello World from login'});
}

function logout(req, res){
    res.json({data: 'Hello World from logout'});
}


module.exports = {
    login,
    logout
};