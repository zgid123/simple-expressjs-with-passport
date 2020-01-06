export default (userParams) => {
  return global.models.User.create(userParams);
};
