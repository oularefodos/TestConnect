const asyncWrapper = (fnct) => {
    return async (req, res, next) => {
        try {
            await fnct(req, res, next);
        }
        catch (error) { 
            res.status(500).json({message : 'something went wrong'});
        }
    }
}

module.exports = asyncWrapper;