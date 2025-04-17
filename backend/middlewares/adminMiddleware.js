const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next(); // user is admin, allow access
    } else {
        res.status(403).json({ message: "Access denied, admin only" });
    }
};

export default admin;
