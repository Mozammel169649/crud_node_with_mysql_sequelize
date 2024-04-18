module.exports = (sequelize, DataTypes) => {
    
    const Student = sequelize.define("student", {
        
        name: {
            type: DataTypes.STRING(30)
        },
        roll: {
            type: DataTypes.SMALLINT,
        },
        subject: {
            type: DataTypes.STRING(30),
        },
        
    })

    return Student

}