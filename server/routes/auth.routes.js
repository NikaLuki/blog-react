const express = require("express");
const bcrypt = require("bcryptjs");
const tokenServie = require("../services/token.service");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const { db } = require("../models/Token");
const router = express.Router({ mergeParams: true });

router.post("/signUp", [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длинна пароля 8 символов").isLength({
        min: 8
    }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return res.status(400).json({
                    message: "INVALID_DATA",
                    code: 400
                });
            }

            const { email, password } = req.body;

            const exitingUser = await User.findOne({ email });
            if (exitingUser) {
                return res.status(400).json({
                    error: {
                        message: "EMAIL_EXISTS",
                        code: 400
                    }
                });
            }

            const hashesdPassword = await bcrypt.hash(password, 12);

            const newUser = await User.create({
                ...req.body,
                password: hashesdPassword
            });
            const tokens = tokenServie.generate({ _id: newUser._id });
            await tokenServie.save(newUser._id, tokens.refreshToken);

            res.status(201).send({ ...tokens, userId: newUser._id });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
]);

router.post("/login", [
    check("email").isEmail(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: "INVALID_DATA",
                    code: 400
                });
            }

            const { email, password } = req.body;
            const exitingUser = await User.findOne({ email });

            if (!exitingUser) {
                return res.status(400).send({
                    error: {
                        message: "EMAIL_NOT_FOUND",
                        code: 400
                    }
                });
            }

            const isEqual = await bcrypt.compare(
                password,
                exitingUser.password
            );

            if (!isEqual) {
                return res.status(400).send({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400
                    }
                });
            }

            const tokens = tokenServie.generate({ _id: exitingUser._id });
            await tokenServie.save(exitingUser._id, tokens.refreshToken);

            res.status(200).send({ ...tokens, userId: exitingUser._id });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
]);

router.post("/token", async (req, res) => {
    try {
        const { refresh_token: refreshToken } = req.body;
        const data = tokenServie.validateRefresh(refreshToken);
        const dbToken = await tokenServie.findToken(refreshToken);

        if (!data || !dbToken || data._id !== dbToken.user?.toString()) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const tokens = tokenServie.generate({
            _id: data._id
        });

        await tokenServie.save(data._id, tokens.refreshToken);

        res.status(200).send({ ...tokens, userId: data._id });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});
module.exports = router;
