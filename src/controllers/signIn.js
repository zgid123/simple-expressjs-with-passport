export default (req, res) => {
  console.log(req.user);
  return res.redirect('/');
};
