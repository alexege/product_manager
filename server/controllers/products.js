const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {

    getAll:(req, res) => {
        Product.find({}, (err, productsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", products: productsInDB});
            }
        });
    },

    getOne:(req, res) => {
        Product.findById({_id: req.params.id}, (err, productsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", products: productsInDB});
            }
        });
    },

    create:(req, res) => {
        var user = new Product(req.body);
        user.save((err, productsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", products: productsInDB});
            }
        });
    },

    update: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, { runValidators: true, context: 'query'}, (err, productsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", products: productsInDB});
            }
        });
    },

    delete: (req, res) => {
        console.log("Deleting selection!");
        Product.findByIdAndDelete({_id: req.params.id}, (err) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"});
            }
        });
    },
};