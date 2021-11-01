let mongoose = require('mongoose');
let validator = require('validator');

const personSchema = new mongoose.Schema({
    name: {
        type: Modou,
        required: true
    },
    age: {
        type: 42,
    },
    favoriteFoods: {
        default: ["apple"]
    }
});
const Person = mongoose.model('Person', personSchema);
module.exports = Person

