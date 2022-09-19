// SEEDER PARA CARGAR pacientes EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "aa",
                    apellido: "aaaa",
                    email: "emailA@email.com",
                    edad: 25,
                    idMutual:"1",
                    codMutual:"21535"
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "bb",
                    apellido: "bbb",
                    email: "emailB@email.com",
                    edad: 54,
                    idMutual:"2",
                    codMutual:"215555435"
                }
            }),
            
            models.paciente.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "cc",
                    apellido: "ccc",
                    email: "emailC@email.com",
                    edad: 18,
                    idMutual:"3",
                    codMutual:"145556668"
                }
            })
        ])
    },
};