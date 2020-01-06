const jwt = require('jsonwebtoken');

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secretKey = process.env.SECRET_KEY || 'test-key';

export const createToken = (data) => {
  return jwt.sign(data, secretKey, config);
};

export const verify = (token) => {
  try {
    return jwt.verify(token, secretKey, { algorithms: [config.algorithm] });
  } catch (err) {
    return undefined;
  }
};
