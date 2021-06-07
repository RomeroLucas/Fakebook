const express = require('express')
const post = express()
const conn = require('../conn')

// rota responsavel por criar uma publicação
post.post(`/publicar/id_user=:id`, (req, res, next) => {
    let dados = {
        user_id: req.params.id,
        content: req.body.content,
    }
    let sql = `
        INSERT INTO posts(user_id, content, data)
        VALUES (${dados.user_id}, '${dados.content}', now())
    `
    conn.query(sql, (error, result) => {
        res.json({publicacao: dados, log: result})
    })
})

// rota responsavel por exibir publicações
post.get(`/publicacoes`, (req, res, next) => {
    let sql = `
        SELECT posts.*, users.username FROM posts
        INNER JOIN users ON posts.user_id = users.id_user
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// rota responsavel por exibir publicações de um usuario
post.get(`/id_user=:id/publicacoes`, (req, res, next) => {
    let dados = req.params.id
    let sql = `
        SELECT users.username, posts.* FROM posts
        INNER JOIN users ON posts.user_id = users.id_user
        WHERE posts.user_id = ${dados}
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})


//exportação das pubs
module.exports = post