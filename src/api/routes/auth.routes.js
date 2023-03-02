const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const router = require("express").Router();
router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});


router.post(
    "/auth/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
);

router.post("/auth/signin", controller.signin);
module.exports = router;