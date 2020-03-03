//@desc   Get all boostcamp
//@route  GET/api/v1/bootcamp
//acess   public
exports.getBoostcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all boostcame' });
};

//@desc   Get boostcamp by Id
//@route  GET/api/v1/bootcamp/:id
//acess   public
exports.getBoostcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `get boostcame ${req.params.id}`
    });
};

//@desc   Create new boostcamp
//@route  POST/api/v1/bootcamp
//acess   private
exports.createBoostcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create boostcame' });
};

//@desc   Update boostcamp by id
//@route  PUT/api/v1/bootcamp/:id
//acess   pruvate
exports.updateBoostcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `update boostcame ${req.params.id}`
    });
};

//@desc   Delete boostcamp by id
//@route  DELETE/api/v1/bootcamp/:id
//acess   private
exports.deleteBoostcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `delete boostcame ${req.params.id}`
    });
};
