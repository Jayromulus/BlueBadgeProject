let router = require('express').Router();
let Combo = require('../db').import('../models/combo');
let validateSession = require('../middleware/validate-session')

router.post('/new', validateSession, (req, res) => {
    main = req.body.combo.point[0].toUpperCase() + req.body.combo.point.substring(1)
    sub = req.body.combo.partner[0].toUpperCase() + req.body.combo.partner.substring(1)
    Combo.create({
        route: req.body.combo.route,
        point: main,
        counterHit: req.body.combo.counterHit,
        partner: sub,
        owner: req.user.username,
        video: req.body.combo.video,
        charSpec: req.body.combo.charSpec,
        addNotes: req.body.combo.addNotes,
        damage: req.body.combo.damage,
        corner: req.body.combo.corner,
        reasonance: req.body.combo.reasonance
    }).then(createSuccess = (combo) => {
        res.status(200).json({
            combo: combo,
            message: 'combo created'
        })
    },
        createError = err => res.send(500, err)
    );
});

router.put('/update/:id', validateSession, (req, res) => {
    Combo.update(req.body.combo, {
        where: { id: req.params.id },
        returning: true
    }).then(
        combos => res.status(200).json(combos)
    ).catch(
        err => res.status(500).json({ error: err })
    )
})

router.delete('/delete/:id', validateSession, (req, res) => {
    Combo.destroy({ where: { id: req.params.id } }).then(
        combos => res.status(200).json(combos)
    ).catch(
        err => res.status(500).json({ error: err })
    )
})

router.get('/:username', validateSession, (req, res) =>{
    Combo.findAll({where: {owner: req.params.username}}).then(
        createSuccess = (combos) => {
            res.status(200).json({
                message: `all combos by${req.params.username}`,
                combos: combos
            })
        },
        createError = (err) => {res.status(500).json(err)}
    )
})

router.get('/:point/:partner', validateSession, (req, res) => {
    main = req.params.point[0].toUpperCase() + req.params.point.substring(1);
    // sub = req.params.partner[0].toUpperCase() + req.params.partner.substring(1);
    Combo.findAll({ where: { point: main} }).then(
        creatSuccess = (combos) => {
            res.status(200).json({
                combos: combos
            })
        },
        crreateError = (err) => {res.status(500).json(err)}
    )
})

module.exports = router