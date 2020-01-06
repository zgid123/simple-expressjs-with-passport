module.exports = {
  up: (queryInterface, Sequelize) => {
    const { UUID, UUIDV1, STRING, DATE } = Sequelize;

    return queryInterface.createTable('user_types', {
      id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
      },
      name: {
        type: STRING,
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
    return queryInterface.dropTable('user_types');
  },
};
