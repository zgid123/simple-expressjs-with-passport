import { readdirSync } from 'fs';
import { basename as _basename, join, resolve } from 'path';

import HttpError from '@services/HttpError';

export default async () => {
  console.log('======= Initialize global variables =======\n');

  const db = {};
  const basename = _basename(__filename);
  const modelsFolderPath = resolve(__dirname, '../db/models');

  const files = readdirSync(modelsFolderPath).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3).match(/.js/));
  });

  for (const file of files) {
    const model = require(join(modelsFolderPath, file));

    if (model && model.init && typeof model.init === 'function') {
      db[model.name] = model.init(global.sequelize);
    }
  }

  const models = Object.values(db);

  // config association
  models.forEach((model) => {
    if (model && model.associate && typeof model.associate === 'function') {
      model.associate(models); // defined at each model
    }
  });

  global.models = db;
  global.HttpError = HttpError;

  console.log('======= Complete initialize global variables =======\n');
};
