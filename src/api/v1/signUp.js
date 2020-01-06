import createUser from '@modules/users/createUser';

export default async (req, res) => {
  const { username, password } = req.body;

  await createUser({ username, password });

  res.send({ message: 'Success' });
};
