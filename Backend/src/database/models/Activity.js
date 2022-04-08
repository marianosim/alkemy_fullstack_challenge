module.exports = (sequelize, dataTypes) => {
    let alias = 'Activity';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    };
    let config = {
        tablename: 'activity',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    };
    const Activity = sequelize.define(alias, cols, config);

    Activity.associate = function (models) {
        Activity.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'category_id'
        })
    }
    return Activity
};