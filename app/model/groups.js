'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const Group = app.model.define('groups', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    group_id: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return Group;
};
