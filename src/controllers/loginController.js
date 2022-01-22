const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const database = require('../database/database');
const moment = require('moment');
const logger = require('../logger/logger');

exports.login = async (req, res) => {
    try {
        var erro = req.flash('erro');
        erro = (erro == undefined || erro.length == 0) ? undefined : erro;
        res.render('login/index', { erro: erro });
    } catch (error) {
        var erro = 'Ocorreu algum erro tempo de execução';
        req.flash('erro', erro);
        logger.error(error);
        res.redirect('/');
    }
};

exports.authenticate = async (req, res) => {
    try {
        var email = req.body.email;
        var senha = req.body.senha;
        var erro;
        var sucesso;
        database.where({ email: email, senha: senha }).table('empresa').then(dados => {     
            if (dados[0].email == email && dados[0].senha == senha) {
                req.session.user = {
                    id: dados[0].id,
                    session: dados[0].session,
                    nome_empresa: dados[0].nome_empresa,
                    email: dados[0].email,
                    token: dados[0].token,
                    cnpj: dados[0].cnpj,
                    apitoken: dados[0].apitoken,
                    servidor: dados[0].servidor,
                    ip: dados[0].ip,
                   
                }                 
                res.redirect('/');
            }            
                     
        }).catch(erro => {
            erro = 'Email ou senha incorretos!';
            req.flash('erro', erro);
            logger.error(erro);
            res.redirect('/login/index');
        });
    } catch (error) {
        var erro = 'Ocorreu algum erro tempo de execução';
        req.flash('erro', erro);
        logger.error(error);
        res.redirect('/');
    }
};

exports.logoof = async (req, res) => {
    try {
        req.session.user = undefined;
        res.redirect('/login/index');
    } catch (error) {
        var erro = 'Ocorreu algum erro tempo de execução';
        req.flash('erros', erro);
        logger.error(error);
        res.redirect('/login/index');
    }
};