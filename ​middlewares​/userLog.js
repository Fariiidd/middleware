const fs = require('fs');
const path = require('path');
const rutaBase = __basedir;
const pathAGuardar = path.join(rutaBase, 'userLogs.txt');

function logMiddlewares(req, res, next) {
    fs.appendFileSync(pathAGuardar, ` El usuario entro a la ruta:' ${req.url}\n`);
    return next();

}

module.exports = { logMiddlewares };