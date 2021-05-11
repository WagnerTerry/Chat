// import 'reflect-metadata'
import express, { request, response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

import { routes } from './routes'

import "./database"

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html")

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws - websocket

io.on("connection", (socket: Socket) => {
    console.log("se conectou", socket.id)
})

app.use(express.json()) // habilitar o json na aplicação

app.use(routes)

export { http, io }