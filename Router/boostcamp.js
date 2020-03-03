const express = require('express');

const {
    getBoostcamps,
    getBoostcamp,
    deleteBoostcamp,
    updateBoostcamp,
    createBoostcamp
} = require('../controller/boostcamp');

const router = express.Router();

router
    .route('/')
    .get(getBoostcamps)
    .post(createBoostcamp);

router
    .route('/:id')
    .get(getBoostcamp)
    .delete(deleteBoostcamp)
    .put(updateBoostcamp);

module.exports = router;
