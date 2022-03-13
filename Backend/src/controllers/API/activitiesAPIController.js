const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Activity = db.Activity;
const Categories = db.Category;

const activitiesAPIController = {
    list: (req, res) => {
        Activity.findAll({
           include: ['categories'] 
        })
        .then(([activities, categories]) => {
            let response = {
                meta: {
                    status: 200,
                    total: activities.length,
                    url: 'api/activities'
                },
                data: activities
            }
            res.json(response);
        })
        .catch((error)=> {
            console.log(error);
        })
    },
    create: (req, res) => {
        Activity
        .create(
            {
                description: req.body.description,
                amount: req.body.amount,
                type: req.body.type,
                category_id: req.body.category_id
            }
        )
        .then(confirm => {
            let response;
            if(confirm){
                response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        created: 'Ok',
                        url: 'api/activities/create'
                    },
                    data: confirm
                }
            }else {
                response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        created: 'Ok',
                        url: 'api/activities/create'
                    },
                    data: confirm
                }
            }
            res.json(response);
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        let activityId = req.params.id;
        Activity
        .update(
            {
                description: req.body.description,
                amount: req.body.amount,
                type: req.body.type,
                category_id: req.body.category_id
            },
            {
                where: {id: activityId}
            }
            .then(confirm => {
                let response;
                if(confirm){
                    response = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/activities/update/:id'
                        },
                        data: confirm
                    }
                }else {
                    response = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/activities/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(response);
            })
            .catch(error => res.send(error))
        )
    },
    destroy: (req, res) => {
        let activityId = req.params.id;
        Activity
        .destroy({where: {id: activityId}, force: true})
        .then(confirm => {
            let response;
            if(confirm){
                response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api,activities/delete/:id'
                    },
                    data: confirm
                }
            }else{
                response = {
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/activities/delete/:id'
                    },
                    data: confirm
                }
            }
            res.json(response);
        })
        .catch(error => res.send(error))
    }
}

module.exports = activitiesAPIController;