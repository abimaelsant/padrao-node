const config = {
    "development": {
        "type": process.env.TYPE_DATABASE,
        "host": process.env.HOST_DATABASE,
        "port": process.env.PORT_DATABASE,
        "username": process.env.USER_DATABASE,
        "password": process.env.PASSWORD_DATABASE,
        "database": process.env.DATABASE,
        "logging": false,
        "entities": [
            "src/app/models/*.ts"
        ],
        "migrations": [
            "src/database/migrations/*.ts"
        ],
        "seeds": [
            "src/database/seeds/*.ts"
        ],
        "cli": {
            "entitiesDir": "src/app/models",
            "migrationsDir": "src/database/migrations"
        },
    },
    "production": {
        "type": process.env.TYPE_DATABASE,
        "host": process.env.HOST_DATABASE,
        "port": process.env.PORT_DATABASE,
        "username": process.env.USER_DATABASE,
        "password": process.env.PASSWORD_DATABASE,
        "database": process.env.DATABASE,
        "logging": false,
        "entities": [
            __dirname + "/dist/src/app/models/*.js"
        ],
        "migrations": [
            __dirname + "/dist/src/database/migrations/*.js"
        ],
        "seeds": [
            __dirname + "/dist/src/database/seeds/*.js"
        ],
        "cli": {
            "entitiesDir": __dirname + "/dist/src/app/models",
            "migrationsDir": __dirname + "/dist/src/database/migrations"
        },
    }
}

module.exports = config[process.env.NODE_ENV];

