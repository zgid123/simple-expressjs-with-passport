import User from '@db/models/User';
import UserType from '@db/models/UserType';

export default () => {
  User.belongsTo(UserType);
  UserType.hasMany(User);
};
