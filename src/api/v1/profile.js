export default (req, res) => {
  res.send({
    profile: req.user,
  });
};
