/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable sort-imports */
/* eslint-disable linebreak-style */
import express from "express";
import {createUser, loginUser, getAllUsers, getUserById} from "../controllers/userControl";
import {createProperty, getAllProperties, getPropertyById, getPropertyByType, deleteProperty} from "../controllers/propertyControl";
const router = express.Router();

// router.get("/users", getAllUsers);
// router.get("/users/:id", getUserById);
router.post("/user", createUser);
router.post("/user/login", loginUser)

router.get("/properties", getAllProperties);
router.get("/properties/:id", getPropertyById);
router.get("/properties/type/:type", getPropertyByType);
router.post("/property", createProperty);
router.delete("/property/del/:id", deleteProperty);


export default router;
