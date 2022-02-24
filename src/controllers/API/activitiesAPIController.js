const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Activity = db.Activity;
const Categories = db.Category;

const activitiesAPIController = {
    list: (req, res) => {
        let promActivities = Activity.findAll({
           attributes: ['id', 'description', 'amount', 'type', 'created_at'] 
        })
        let promCategories = Categories.findAll({
            attributes: ['name']
        });
        Promise.all([promActivities, promCategories])
        .then(([activities, categories]) => {
            let response = {
                meta: {
                    status: 200,
                    total: activities.length,
                    url: 'api/activities'
                },
                data: activities, categories
            }
            res.json(response);
        })
        .catch((error)=> {
            console.log(error);
        })
    }
}

module.exports = activitiesAPIController;