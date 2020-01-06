import { ValidationError } from 'sequelize';

import HttpError from '@services/HttpError';

const middleware = (error, _req, res, _next) => {
  console.log(error);
  let errResult;
  let status = 500;

  if (error instanceof ValidationError) {
    status = 400;
    const err = error.errors[0];

    errResult = {
      error: {
        [err.path]: err.message,
      },
    };
  } else if (error instanceof HttpError) {
    status = error.status;

    try {
      errResult = { error: JSON.parse(error.message) };
    } catch (e) {
      errResult = { message: error.message };
    }
  } else {
    errResult = {
      message: error.message || 'Something went wrong!',
    };
  }

  return res.status(status).send(...errResult);
};

export default middleware;
