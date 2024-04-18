const db = require('../../db')

const DataTable = db.student;

const all = async (req, res) => {
    let items = await DataTable.findAll({})
    res.status(200).send(items)
}
const create = async (req, res) => {
    console.log("test backend store");

    let info = {
        name: req.body.name,
        roll: req.body.roll,
        subject: req.body.subject
    }
    console.log('info form user', info);

    const item = await DataTable.create(info)
    res.status(200).send(item)

}
const update = async (req, res) => {
    var newData = req.body
    var id = req.params.id;
    let info = {
        name: newData.name,
        roll: newData.roll,
        subject: newData.subject
    }
    let item = await DataTable.update(info,{where: {id:id}});
    res.status(200).send(item)
}
const destroy = async (req, res) => {
    var id = req.params.id;
    // console.log(id);
    let item = await DataTable.destroy({where: {id:id}});
}
const details = async (req, res) => {
    var id = req.params.id;
    // console.log(id);
    let item = await DataTable.findOne({where: {id:id}});
    console.log("item.........", item)
}
module.exports = {
    all,
    create,
    update,
    destroy,
    details
   
}