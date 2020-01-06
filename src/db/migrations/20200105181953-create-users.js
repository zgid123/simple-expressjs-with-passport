module.exports = {
  up: (queryInterface, Sequelize) => {
    const { UUID, UUIDV1, STRING, DATE, INTEGER } = Sequelize;

    return queryInterface.createTable('users', {
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
      userTypeId: {
        type: INTEGER,
        field: 'user_type_id',
        references: {
          key: 'id',
          model: 'user_types',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      createdAt: {
        type: DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: DATE,
        allowNull: false,
        field: 'updated_at',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
