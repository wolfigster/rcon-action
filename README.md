# rcon-action
**rcon-action** allows you to integrate the rcon protocol into your github workflow.

## Inputs

### `server` (**required**)
Server address to connect to

### `port`
Server port to connect to
- Default: 25575

### `password`
RCON password
- Default: password

### `commands`
List of commands to execute

## Recommendation
I would recommend to use [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets). Don't use sensitive content such as serveraddress or password in plaintext in your workflow.

## Example usage
```
uses: wolfigster/rcon-action@v1.0.0
with:
  server: 'localhost'
  port: '25575'
  password: 'p4sSw0rD'
  commands: '["reload", "say rcon-action executed successfully"]'
```

## Credits
- https://github.com/tehbeard/node-rcon
- https://github.com/Plagiatus/RCON-Action

