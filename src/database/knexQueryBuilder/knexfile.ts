import * as Knex from 'knex';

// Important, locate .env file to make migrations and seedings work
// .env file is located in the root of the project
require('dotenv').config({ path: '../../../.env' });

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'jdvnhs_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};

export default configs;
