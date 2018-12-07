module.exports = function (sequelize, DataTypes) {
    var hBurg = sequelize.define("hBurg", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {

            }
        },
        createdAt: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
        }
    });
}

return hBurg;