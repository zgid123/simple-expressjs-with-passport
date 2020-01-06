import Sequelize, { Op } from 'sequelize';

import env from './env';

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

export default () => {
  console.log('======= Initialize sequelize =======\n');

  const sequelize = new Sequelize({
    ssl: true,
    operatorsAliases,
    host: env.pg.host,
    dialect: 'postgres',
    database: env.pg.name,
    username: env.pg.username,
    password: env.pg.password,
    pool: {
      max: 2,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  global.sequelize = sequelize;

  console.log('======= Complete initialize sequelize =======\n');
};
