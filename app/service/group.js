const Service = require('egg').Service;
const sequelize = require('sequelize');

class Group extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Groups.findAll({
      offset,
      limit,
      where: {
        group_id: {
          [sequelize.Op.ne]: null,
        },
      },
      order: [
        [ 'created_at', 'asc' ],
      ],
      attributes: [ 'group_id', 'group_name', 'group_face_url', 'group_custom_string', 'group_order' ],
    });
  }

  async find(id) {
    const group = await this.ctx.model.Groups.findAll({
      where: {
        group_id: id,
      },
    });
    if (!group) {
      this.ctx.throw(404, 'group not found');
    }
    return group;
  }

  async create(group) {
    return this.ctx.model.Groups.create(group);
  }

  async update({ id, updates }) {
    const group = await this.ctx.model.Groups.findAll({
      where: {
        group_id: id,
      },
    });
    if (!group) {
      this.ctx.throw(404, 'group not found');
    }
    return group.update(updates);
  }

  async del(id) {
    const group = await this.ctx.model.Groups.findAll({
      where: {
        group_id: id,
      },
    });
    if (!group) {
      this.ctx.throw(404, 'group not found');
    }
    return group.destroy();
  }
}

module.exports = Group;
