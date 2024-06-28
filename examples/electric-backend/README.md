# Electric sync for Livestore

This a starter project to help you run the Electric backend for Livestore inside a docker instance. If you prefer you can setup the infrastructure yourself and apply the database schema manually ( ```db/migrations```). Check our [documentation](https://electric-sql.com/docs/quickstart) for more detailed instructions.

## Start the backend

This command start a Postgres database and an Electric instance

```sh
pnpm run backend:up
```

## Load the schema

To apply the migration files

```shell
pnpm run db:migrate
```

## Running Electric Sync

Now you can run Livestore apps in Electric. Turn on sync with

```shell
export VITE_LIVESTORE_SYNC_URL="ws://localhost:5133" 
export VITE_LIVESTORE_SYNC_ROOM_ID="room"
```



## Generate client (optional)

You can regenerate the client that ```electric-sync``` is using. This should not be necessary unless you modify the backend schema.

```shell
npm run client:generate
```
