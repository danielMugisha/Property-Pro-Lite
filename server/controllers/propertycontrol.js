/* eslint-disable sort-imports */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable one-var */
/* eslint-disable linebreak-style */
import properties from "../models/properties";

export const getAllProperties = (req, res) => res.send(properties);

export const getPropertyById = (req, res) => {

    const property = properties.find((properties) => properties.id == req.params.id);

    return res.send(property);

};

export const getPropertyByType = (req, res) => {

    const property = properties.find((properties) => properties.type == req.params.type);


    return res.send(property);

};

export const createProperty = (req, res) => {

    const {body} = req;

    properties.push[body];

    return res.status(201).json({
        "status": 201,
        "message": "created",
        "user": body
    });

};
