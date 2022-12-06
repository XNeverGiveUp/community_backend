'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const Group = app.model.define('groups', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    group_id: STRING,
    group_name: STRING,
    group_custom_string: STRING,
    group_face_url: STRING,
    group_order: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Group;
};
