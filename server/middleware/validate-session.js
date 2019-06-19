const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    let token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(!err && decoded){
            console.log('test')
            User.findOne({where: {id: decoded.id}}).then(user => {
                if(!user && err) throw err;
                req.user = user;
                return next();
            }).catch(err => next(err))
        } else {
            req.errors = err;
            return res.status(401).send('Not Authorized');
        }
    })
}

module.exports = validateSession;