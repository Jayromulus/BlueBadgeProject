module.exports = (sequelize, DataTypes) => {
    return sequelize.define('combo', {
        route: DataTypes.STRING,
        counterHit: DataTypes.BOOLEAN,
        corner: DataTypes.BOOLEAN,
        reasonance: DataTypes.BOOLEAN,
        point: DataTypes.STRING,
        partner: DataTypes.STRING,
        owner: DataTypes.STRING,
        damage: DataTypes.INTEGER,
        video: DataTypes.STRING,
        charSpec: DataTypes.ARRAY(DataTypes.STRING),
        addNotes: DataTypes.STRING
    })
}