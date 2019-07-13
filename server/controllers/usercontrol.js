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
    return res.status(200).json({
        "status": 'success',
        "data": {
            payload
        }
    });
    })
}

export const loginUser = (req, res) => {

    const {email, password} = req.body;

    const searchUser = users.filter(item => (item.email == email) && (item.password == password));

    if(searchUser.length > 0){
    jwt.sign(searchUser, 'DanielAndela', { expiresIn: 3600 }, (err, token) => {

        const payload = {
            token,
            searchUser,
        }
    return res.status(200).json({
        "status": 'success',
        "data": payload
    });
    })  
    }
    else{
        return res.status(404).json({
            "status": 'error',
            "message": 'no user found'
        })
    }

}
