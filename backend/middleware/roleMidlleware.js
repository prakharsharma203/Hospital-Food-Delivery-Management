/**
 * Role Authorization Middleware
 * Ensures the user has the required role to access a route.
 */
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }
    next();
  };
  
  module.exports = { authorize };
  