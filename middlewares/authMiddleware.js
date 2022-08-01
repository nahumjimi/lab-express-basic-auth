
module.exports.isNotAuthenticated = (req, res, next) => {
    if (!req.session.currentUser) {
      console.log("entra a profile")
      next();
    } else {
      res.redirect("/profile");
    }
  };
  
  module.exports.isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
    console.log("2 entra a profile")
      next();
    } else {
      res.redirect("/login");
    }
  };