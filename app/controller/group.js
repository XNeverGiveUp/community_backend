const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class GroupController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = {
      data: await ctx.service.group.list(query),
    };
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = {
      data: await ctx.service.group.find(ctx.params.groupId),
    };
  }

  async create() {
    const ctx = this.ctx;
    const group = await ctx.service.group.create(ctx.request.body);
    ctx.body = {
      data: group,
    };
    ctx.status = 201;
  }

  async update() {
    const ctx = this.ctx;
    ctx.body = {
      data: await ctx.service.group.update({
        id: ctx.params.groupId,
        updates: ctx.request.body,
      }),
    };
  }

  async destroy() {
    await this.ctx.service.group.del(this.ctx.params.groupId);
    this.ctx.status = 200;
  }
}

module.exports = GroupController;
