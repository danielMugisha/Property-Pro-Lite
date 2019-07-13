/* eslint-disable no-negated-condition */
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


// Get all properties
export const getAllProperties = (req, res) => {

    if (properties.length == 0) { // Return error message if there is no single property

        return res.status(404).json({
            "status": "error",
            "message": "no property found"
        });

    }

    return res.status(200).json({
        "status": "success",
        "data": properties
    });

};

// Get properties by Id
export const getPropertyById = (req, res) => {

    const property = properties.find((properties) => properties.id == req.params.id);

    if (!property) { // Return error message if there is no single property

        return res.status(404).json({
            "status": "error",
            "message": "no property found"
        });

    }

    return res.status(200).json({
        "status": "success",
        "data": property
    });

};

// Get properties by type
export const getPropertyByType = (req, res) => {

    const property = properties.find((properties) => properties.type == req.params.type);

    if (!property) { // Return error message if there are no properties

        return res.status(404).json({
            "status": "error",
            "message": "no property found"
        });

    }

    return res.status(200).json({
        "status": "success",
        "data": property
    });

};


// Create a property post
export const createProperty = (req, res) => {

    const {owner, status, Price, State, City, Address, type, created_on, image_url} = req.body; // Get the body

    const searchProp = properties.filter((item) => item.owner == owner && item.status == status && item.Price == Price && item.State == State && item.City == City && item.Address == Address && item.type == type && item.created_on == created_on && item.image_url == image_url); // Search for duplicates

    if (searchProp.length > 0) { // If duplicates found return error message

        return res.status(401).json({
            "status": "error",
            "message": "property already registered"
        });

    }
    // Else register the post
    const newProp = {
        "id": properties.length + 1,
        owner,
        status,
        Price,
        State,
        City,
        Address,
        type,
        created_on,
        image_url
    };

    properties.push[newProp];

    return res.status(200).json({
        "status": "success",
        "data": newProp
    });

};


// Delete a property
export const deleteProperty = (req, res) => {

    const {id} = req.params;
    const delPropertyIndex = properties.findIndex((item) => item.id == id);

    if (delPropertyIndex !== -1) {

        properties.splice(delPropertyIndex, 1);

        return res.status(200).json({
            "status": "success",
            "message": "successfully deleted"
        });

    }

    return res.status(404).json({
        "status": "error",
        "message": "no property found"
    });

};
