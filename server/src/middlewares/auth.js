const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    authentication: (req, res, next) => {
        const bearearHeader = req.headers.authorization;
        let token;

        if (bearearHeader){
            token = bearearHeader.split(' ')[1];
        }

        if (!token){
            return res.sendStatus(403);
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
            if (err) return res.sendStatus(403);

            req.token = result;
            next();
        });
    },
};