const Service = require('egg').Service;

class Group extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Groups.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'created_at', 'desc' ],
        [ 'id', 'desc' ],
      ],
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
