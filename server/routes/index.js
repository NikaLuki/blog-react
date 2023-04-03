const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/category", require("./category.routes"));
router.use("/post", require("./post.routes"));
router.use("/admin", require("./admin.routes"));

module.exports = router;
