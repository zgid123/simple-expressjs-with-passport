class HttpError extends Error {
  constructor({ message, status }) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }

    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest({ message = '' }) {
    return new HttpError({ message, status: 400 });
  }

  static unauthorized({ message = '' } = {}) {
    return new HttpError({ message: message || 'You are not authorized.', status: 401 });
  }

  static recordNotFound({ record }) {
    return new HttpError({ message: `${record} not found.`, status: 404 });
  }

  static forbidden({ message = '' } = {}) {
    return new HttpError({ message: message || 'You are not allowed to do this action.', status: 403 });
  }
}

export default HttpError;
