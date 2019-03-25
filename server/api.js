"use strict";
// const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    if (req.body.account === 'fp' && req.body.password === '111') {
        res.send({
            code: 200,
            message:'登录成功',
            result: {
                account:'fp',
                password: '111'
            }
        });
    } else {
        res.send({
            code: 500,
            result: null,
            message: '用户名或者密码错误'
        });
    }
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    if (req.body.account === 'fp' && req.body.password === '111') {
        res.send({
            code: 200,
            message:'登录成功',
            result: {
                account:'fp',
                password: '111'
            }
        });
    } else {
        res.send({
            code: 500,
            result: null,
            message: '用户名或者密码错误'
        });
    }
});

module.exports = router;