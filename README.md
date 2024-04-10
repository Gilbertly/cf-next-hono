### cf-next-hono

## Development

```sh
# install dependencies
$ bun install

# start local server (nextjs + hono)
$ bun run dev

# deploy hono api to cf workers
$ bun run api:deploy

# deploy nextjs app to cf pages
$ bun run pages:deploy

# deploy everything to cf
$ bun run cf:deploy
```