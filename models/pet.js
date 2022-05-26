const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

function open() {
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content); // de texto json para js
    return db;
}

function store(db) {
    content = JSON.stringify(db); // de js para texto json
    fs.writeFileSync("./db.json", content, "utf8")
}

const Pet = {
    findAll: () => {
        const db = open();
        return db.pets;
    },
    findById: (id) => {
        const db = open();
        const pet = db.pets.find(pet => pet.id == id);
        return pet;
    },
    save: (pet) => {
        const db = open();
        pet.id = geradorDeId();
        db.pets.push(pet);
        store(db);
    },
    update: (id, petAtualizado) => {
        const db = open();
        const index = db.pets.findIndex(pet => pet.id == id);
        db.pets[index] = petAtualizado;
        store(db);
    },
    delete: (id) => {
        const db = open();
        const index = db.pets.findIndex(pet => pet.id == id);
        db.pets.splice(index, 1);
        store(db);
    }
}

module.exports = Pet;
