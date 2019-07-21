const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be provided."], minlength: [4, "Name must be at least 4 characters long."]},
    price: {type: Number, required: [true, "Price must be proivded."]},
    img: {type: String, required: [true, "Image URL must be provided."]}
}, {timestamps: true});

mongoose.model("Product", ProductSchema);