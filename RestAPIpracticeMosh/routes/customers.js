const express = require("express");
const { Customer, validate } = require("../models/customers.js");
const router = express.Router();

router.get("/", async(req, res) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
});

router.post("/", async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let cust = new Customer({
        isGold: req.body.isGold,
        name: req.body.name,
        phone: req.body.phone,
    });
    cust = await cust.save();
    res.send(cust);
});

router.put("/:id", async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let cust = await Customer.findByIdAndUpdate(
        req.params.id, {
            isGold: req.body.isGold,
            name: req.body.name,
            phone: req.params.phone,
        }, { new: true }
    );
    if (!cust)
        return res.status(404).send("The genre with the given ID was not found.");
});

router.delete("/:id", async(req, res) => {
    let cust = await Customer.findByIdAndRemove(req.params.id);
    if (!cust)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(cust);
});

router.get("/:id", async(req, res) => {
    const cust = await genres.findById(req.params.id);
    if (!cust)
        return res.status(404).send("The genre with the given ID was not found.");
    res.send(cust);
});

module.exports = router;