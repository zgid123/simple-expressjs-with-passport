import { Model, DataTypes } from 'sequelize';

const { STRING, UUID, UUIDV1 } = DataTypes;

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV1,
        },
        name: {
          type: STRING,
        },
        username: {
          unique: true,
          type: STRING,
        },
        password: {
          type: STRING,
        },
      },
      {
        sequelize,
        modelName: 'user',
        underscored: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.UserType);
  }
}

module.exports = User;
