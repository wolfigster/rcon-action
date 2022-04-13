const core = require('@actions/core')
const rcon = require('./node-rcon/RCON.js')

async function run() {
  try {
    // get input from github actions
    const address = core.getInput('server')
    const port = core.getInput('port')
    const password = core.getInput('password')
    const commands = JSON.parse(core.getInput('commands'))

    // start rcon connection
    const server = new rcon()
    await server.connect(address, port, password)

    // execute commands if there are any
    if (commands.length > 0)
      for (let command of commands) await server.send(command)

    // close connection
    server.end()
  } catch (error) {
    core.setFailed(error.message)
  }
}

// run action
run()
