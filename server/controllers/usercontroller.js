let router = require('express').Router();
let sequelize = require('../db');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let User = sequelize.import('../models/user');

router.post('/signup', (req, res) => {
    User.findOne({ where: { username: req.body.user.username } }).then(
        User.create({
            username: req.body.user.username,
            password: bcrypt.hashSync(req.body.user.password, 12),
            email: req.body.user.email
        }).then(
            createSuccess = (user) => {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 12 });
                res.status(200).json({
                    user: user,
                    message: 'user created',
                    token: token
                })
            },
            createError = err => res.send(500, err.errors[0].message)
        )
    )
})

router.post('/login', (req, res) => {
    // console.log(req.body)
    User.findOne({ where: { username: req.body.user.username } }).then(
        (user) => {
            if (user) {
                bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                        res.status(200).json({
                            message: 'successfully logged in',
                            user: user,
                            token: token
                        })
                    } else {
                        res.status(500).send({ error: err + 'Bad Gateway' })
                    }
                })
            } else {
                res.status(500).send({ error: 'Failed to Authenticate' });
            }
        }
    )
    err => res.status(501).send({ error: 'Failed to process' })
})

router.delete('/delete/:id', (req, res) => {

})

module.exports = router