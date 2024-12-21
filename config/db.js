const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
    mongoose.connect(`mongodb+srv://longquan22052004:${process.env.MONGO_DB}@cluster0.stf6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => {
            console.log("Connect to db successfully");
        })
        .catch((err) => console.log("Cannot connect to DB"));
}
module.exports = connect;