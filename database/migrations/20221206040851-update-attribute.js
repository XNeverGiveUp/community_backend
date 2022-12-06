'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.dropTable('groups');
    const { DATE, STRING, INTEGER } = Sequelize;
    await queryInterface.createTable('groups', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      group_id: STRING,
      group_name: STRING,
      group_custom_string: STRING,
      group_face_url: STRING,
      group_order: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('groups');
  },
};
