const server = require('./api/server.js')

const port = process.env.PORT || 3007
server.listen(port, () => console.log(`running on port ${port}`))