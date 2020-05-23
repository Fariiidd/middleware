const verifyAdmin = (req, res, next) => {

    const nombreVerificar = req.query.user;
    const user = ['Ada', 'Greta', 'Tim', 'Vin'];
    const confirmarAdmins = user.find(user => { return user == nombreVerificar });

    //Si los nombres no son compatibles.
    if (!confirmarAdmins) {
        res.send('No tenes privilegios para entrar');
    }

    //Si los nombres son correcto.

    req.nombreAdmin = nombreVerificar;
    next();
}

module.exports = { verifyAdmin };