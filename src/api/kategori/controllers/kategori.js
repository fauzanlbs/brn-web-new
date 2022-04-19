'use strict';

/**
 *  kategori controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::kategori.kategori');

module.exports = createCoreController("api::kategori.kategori", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: '*' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic

    return { data, meta };
  }
}));
