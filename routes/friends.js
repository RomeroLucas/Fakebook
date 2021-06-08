const express = require('express')
const friends = express()
const conn = require('../conn')


// solicitacao de amizade ENVIO
friends.post(`/add-amigo/id_user=:idusuario/id_friend=:idamigo`, (req, res, next) => {
    let dados = {
        id_solicitante: req.params.idusuario,
        id_solicitado: req.params.idamigo
    }
    let sql = `
        INSERT INTO friends(data_solicitacao, id_solicitante, id_solicitado)
        VALUES(now(), ${dados.id_solicitante}, ${dados.id_solicitado})
    `
    conn.query(sql, (error, result) => {
        res.json({data: dados, log: result})
    })
})

// exibe solicitações
friends.get(`/solicitacoes/:id_user`, (req, res, next) => {
    let dados = req.params.id_user
    let sql= `
        SELECT * FROM friends WHERE
        friends.id_solicitado = ${dados} AND confirmacao = 0
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//solicitação de amizade CONFIRMAÇÃO
friends.post(`/solicitacoes/confirmacao/:id_user/:id_solicitante`, (req, res, next) => {
    let dados = {
        id_user: req.params.id_user,
        id_solicitante: req.params.id_solicitante
    }
    let sql = `
        UPDATE friends SET confirmacao = 1 WHERE
        friends.id_solicitado = ${dados.id_user} AND friends.id_solicitante = ${dados.id_solicitante}
    `
    conn.query(sql, (error, result) => {
        res.json({log: result})
    })
})

//rota oficial de amigos
friends.get(`/amigos/:id_user`, (req, res, next) => {
    let dados = req.params.id_user
    let sql = `
    SELECT friends.*, users.username FROM users LEFT OUTER JOIN friends
    ON (friends.id_solicitante = users.id_user OR friends.id_solicitado = users.id_user)
    AND friends.confirmacao = 1
    WHERE users.id_user = ${dados}
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})


// exportar funções
module.exports = friends