# GIC (GROWTH INFANT CHART)

This service provides apis to monitor infant growth using WHO or CDC standarts, see more in [kurva pertumbuhan who (indonesia)](https://anakindonesiasehat.com/pertumbuhan/kurva-pertumbuhan-who/) and [child growth standarts](https://www.who.int/tools/child-growth-standards/standards).

## Specifications

- Node JS >= 18.15
- Postgres 16

## Dependencies

- [pg](https://github.com/brianc/node-postgres) node js postgres db driver. We used this because this is the standard postgresql db library and it is enough for this application
- [knex](https://knexjs.org/) a SQL query builder for node js. We use knex to help manage database migration and build database queries easier without the overhead of ORM

## Running locally

1. copy the env.example file `cp env.example .env` and adjust the values according to your environtment
2. run database migration using [knex js](https://knexjs.org/guide/migrations.html#migration-cli) `knex migrate:latest`
3. run database seeding using [knex js](https://knexjs.org/guide/migrations.html#seed-cli) `knex seed:run`
4. run the app `node run dev`

## API Docs

We use Swagger as api documentation you can access them from `localhost:3000/docs` (host and port depends on your config)
