const Sequelize = require('sequelize');

const sequelize = new Sequelize('bluebadge', 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    () => { console.log('connected to bluebadge postgres database') },
    (err) => { console.log(err) }
)

module.exports = sequelize;