import { Model, DataTypes } from 'sequelize';

const { STRING, INTEGER } = DataTypes;

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: STRING,
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: 'userType',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.User);
  }
}

module.exports = User;
