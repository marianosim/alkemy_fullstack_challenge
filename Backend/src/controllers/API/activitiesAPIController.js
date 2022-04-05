const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Activity = db.Activity;
const Category = db.Category;

const activitiesAPIController = {
    list: (req, res) => {
        Activity.findAll({
           include: ['categories'],
           order: [
               ['created_at', 'DESC']
           ]
        })
        .then(([...activities]) => {
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
    'detail': async (req, res) => {
        await Activity.findByPk(req.params.id,
            {
                include : ['categories']
            })
            .then(activity => {
                let respuesta = {
                    meta: {
                        total: activity.length,
                        url: '/api/activity/:id'
                    },
                    data: activity
                }
                res.json(respuesta);
            });
    },
    create: async (req, res) => {
        /*const movement_obj = {
            ...req.body
        }
        try {
            const movement = await Activity.create(movement_obj);
            return res.status(201).json({
                data: movement,
                message: "Movement stored"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },*/
         await Activity
        .create(req.body)
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
    update: async (req, res) => {
        //let activityId = req.params.id;
       await Activity
        .update(
            {
                description: req.body.description,
                amount: req.body.amount,
                //type: req.body.type,
                category_id: req.body.category_id
            },
            {
                where: {id: req.params.id}
            })
            .then(confirm => {
                let response;
                if(confirm){
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/activities/edit/:id'
                        },
                        data: confirm
                    }
                }else {
                    response = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/activities/edit/:id'
                        },
                        data: confirm
                    }
                }
                res.json(response);
            })
            .catch(error => res.send(error))
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