/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable one-var */
/* eslint-disable linebreak-style */
import users from "../models/users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import response from "../helpers/responses"

export const getAllUsers = (req, res) => res.send(users);

export const getUserById = (req, res) => {

    const user = users.find((users) => users.id == req.params.id);

    return res.send(user);

};

export const createUser = (req, res) => {

    const {email, first_name, last_name, address, phoneNumber, password, is_admin} = req.body;

    const newUser = {
        id: users.length + 1,
        email,
        first_name,
        last_name,
        password: bcrypt.hashSync(password, 10),
        phoneNumber,
        address,
        is_admin
    };

    users.push[newUser];

    jwt.sign(newUser, 'DanielAndela', { expiresIn: 3600 }, (err, token) => {

        const payload = {
            token,
            newUser,
        }
    return res.status(201).json({
        "status": 'success',
        "data": {
            payload
        }
    });
    })
}
