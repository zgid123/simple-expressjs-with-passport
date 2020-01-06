import { md5 } from '@utils/hash';

export default async (req, res) => {
  const { username, password, name } = req.body;

  await global.models.User.create({
    name,
    username,
    password: md5(password),
  });

  return res.redirect('/');
};
