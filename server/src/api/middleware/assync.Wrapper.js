const { ZodError } = require("zod");

const asyncWrapper = (fnct) => {
    return async (req, res, next) => {
        try {
            await fnct(req, res, next);
        }
        catch (error) {
            if (error instanceof ZodError) {
                res.status(401).json({message : 'wrong incommig datas'});
            }
            else {
                res.status(500).json({message : 'something went wrong'});
            }
        }
    }
}

module.exports = asyncWrapper;