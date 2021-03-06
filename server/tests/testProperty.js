/* eslint-disable indent */
/* eslint-disable indent-legacy */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
/* eslint-disable handle-callback-err */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */
/* eslint-disable linebreak-style */
// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import httpMocks from "node-mocks-http";
import Joi from "@hapi/joi";
import app from "../index";
import properties from "../models/properties";
import propertycontrol from "../controllers/propertycontrol";
import users from "../models/users";
import usercontrol from "../controllers/usercontrol";

// Configure chai
chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-unused-vars
const {expect, assert} = chai;

describe("properties", () => {

    describe("GET /", () => {

        it("should return all properties listed", (done) => {

            chai.
                request(app).
                get("/api/v1/properties").
                end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.have.property("data").be.a("array");
                    res.body.should.have.property("data").eql(properties);
                    done();

                });

        });

        it("should return a specific property listed", (done) => {

            chai.
                request(app).
                get("/api/v1/properties/1").
                end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.have.property("data").be.a("object");
                    res.body.should.have.property("data").eql(properties[0]);
                    done();

                });

        });

        it("should return 404 when  specified property is not found!", (done) => {

            chai.
                request(app).
                get("/api/v1/properties/100").
                end((err, res) => {

                    res.should.have.status(404);
                    res.body.should.have.property("status").be.a("string");
                    res.body.should.have.property("message").eql("no property found");
                    done();

                });

        });

        it("should return  properties by type", (done) => {

            chai.
                request(app).
                get("/api/v1/properties/type/3-bedroom").
                end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.have.property("data").be.a("object");
                    done();

                });

        });
        it("should return 404 if no available properties of such type", (done) => {

            chai.
                request(app).
                get("/api/v1/properties/type/3-express").
                end((err, res) => {

                    res.should.have.status(404);
                    res.body.should.have.
                        property("message").
                        be.a("string").
                        eql("no property found");
                    done();

                });

        });

    });

    describe("POST /", () => {

        it("New user, it should return 200", (done) => {

            const user = {
                "id": 4,
                "email": "danieldenzom@yahoo.com",
                "first_name": "Daniel",
                "last_name": "MUGISHA",
                "password": "dandenzo",
                "phoneNumber": "0987654321",
                "address": "Kagugu",
                "is_admin": false
            };

            chai.request(app).
                post("/api/v1/user").
                send(user).
                end((err, res) => {

                    expect(res.status).to.equal(200);
                    done();
                
                });
        
        });
    
    });

    describe("DELETE /", () => {

        it("it should return 200 status when delete operation was successful", (done) => {

          chai.
                request(app).
                delete("/api/v1/property/del/1").
                end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.have.property("status").be.a("string");
                    res.body.should.
                        have.property("message").
                        be.a("string");
                    done();

                });

      });

        it("it should return 404 with error when deletion fails", (done) => {

          chai.
                request(app).
                delete("/api/v1/property/del/100").
                end((err, res) => {

                    res.should.have.status(404);
                    res.body.should.have.property("status").be.a("string").eql("error");
                    done();

                });

      });

    });

});

