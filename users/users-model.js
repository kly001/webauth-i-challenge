const db = require('../database/db-config.js')

module.exports = {
    add,
    find,
    findById
}

function find() {
    return db('users')
    .select('id','username')
}

function findById(filter) {
    return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}

function add(user) {
    return db('users')
    .insert(user,'id')
    .then(ids => {
        const [id] =id
        return findById(id)
    })
}