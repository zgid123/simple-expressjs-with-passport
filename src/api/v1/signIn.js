import { createToken } from '@utils/jwt';

export default (req, res) => {
  const user = req.user;

  const authToken = createToken({ username: user.username, id: user.id });

  res.send({ authToken });
};
