module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            min: 5
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true
        }
    })
};