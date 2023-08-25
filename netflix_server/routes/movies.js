const router = require("express").Router()
const Movie = require("../models/Movie.js")
const verify = require("../verifyToken.js");

//CREATE
router.post("/", verify, async (req, res) => {

    if (req.user.isAdmin) {

        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You dont have the necessary permission to create a movie!!")
    }

})

//UPDATE
router.put("/:id", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You dont have the necessary permission to update the movie!!")
    }

})

//DELETE
router.delete("/:id", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie Deleted Successfully!!");
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You dont have the necessary permission to delete the movie!!")
    }

})

//GET
router.get("/find/:id", verify, async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }

})

//GET RANDOM
router.get("/random", verify, async (req, res) => {

        const type = req.query.type;
        let movies;

        try {
            
            if(type==="series") {
                movies = await Movie.aggregate([
                    {$match: {isSeries:true}},
                    {$sample: {size:1}},
                ])
            } else {
                movies = await Movie.aggregate([
                    {$match: {isSeries:true}},
                    {$sample: {size:1}},
                ])
            }
            res.status(200).json(movies);

        } catch (err) {
            res.status(500).json(err);
        }

})

//GET ALL
router.get("/", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You dont have the necessary permission to access the movie list!!")
    }

})

module.exports = router;