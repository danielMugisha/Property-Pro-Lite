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
export const getAllUsers = (req, res) => res.send(users);

export const getUserById = (req, res) => {

    const user = users.find((users) => users.id == req.params.id);

    return res.send(user);

};

export const createUser = (req, res) => {

    const newUser = {
        email,
        first_name,
        last_name,
        password,
        phoneNumber,
        address,
        is_admin
    };

    newUser = body.req

    return res.status(201).json({
        "status": "success",
        "data": body
    });

};

