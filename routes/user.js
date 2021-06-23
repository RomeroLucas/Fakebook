const express = require('express')
const user = express()
const conn = require('../conn')

// rota responsável por fazer o login
user.get(`/login/email=:email/senha=:senha`, (req, res, next) => {
    let dados = {
        email: req.params.email,
        senha: req.params.senha
    }
    let sql = `SELECT * FROM users WHERE users.email = '${dados.email}' AND users.senha = '${dados.senha}'`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// rota responsavel por cadastrar um usuario
user.post('/cadastro/usuario', (req, res, next) => {
    let dados = {
        username: req.body.username,
        email: req.body.email,
        senha: req.body.senha
    }
    conn.query('INSERT INTO users SET?', dados, (error, result) => {
        res.json({user: dados, log: result})
    })
})

// rota responsavel pela busca de usuarios
user.get(`/busca/:dados`, (req, res, next) => {
    let dados = req.params.dados
    let sql = `
        SELECT users.id_user, users.username, users.email 
        FROM users WHERE
        users.username LIKE "${dados}%" OR
        users.email LIKE "${dados}%"
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//rota para edição de usuario
user.put(`/editar/userid=:id`, (req, res, next) => {
    let dados = {
        id_user: req.params.id,
        username: req.body.username,
        email: req.body.email,
        senha: req.body.senha
    }
    let sql = `UPDATE users SET? WHERE id_user = ${dados.id_user}`
    conn.query(sql, dados, (error, result) => {
        res.json({dados: dados, log: result})
    })
})

// #### rota TEMPORARIA para exibir usuarios no campo de amigos ####
user.get(`/amigos`, (req, res, next) => {
    let sql = `SELECT users.id_user, users.username, users.email 
    FROM users`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// exportação de todas as rotas USER
module.exports = user
