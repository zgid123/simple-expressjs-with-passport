export default (req, res) => {
  console.log(res.locals);
  res.render('index');
};
