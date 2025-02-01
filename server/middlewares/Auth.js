const jwt = require("jsonwebtoken")
async function tokenVerification(req, res, next) {
    const token = req.headers[`authorization`];
    if (token!=="undefine") {
        const valid_token = token.split(" ")[1]

        if (!valid_token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        try {
            const decoded = jwt.verify(valid_token, process.env.SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(403).json({ message: "Unauthorized, JWT token wrong or expired", error })
        }
    }
}
module.exports = {
    tokenVerification
}