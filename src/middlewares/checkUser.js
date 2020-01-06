export default (req, res, next) => {
  if (req.user) {
    return next();
  }

  next(global.HttpError.unauthorized());
};
