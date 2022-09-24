const http = require("http")
const app = require("../app")

const server = http.createServer(app({ "x": 15 }))

server.listen(8080)

server.on("listening", (args) => {
    console.log(server.address().port);
})