const withAuth = (req, res, next) => {
    // this function just checks user is logged in, if not, redirects the user to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  