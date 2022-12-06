/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    sequelize: {
      dialect: 'mysql',
      host: '30.49.110.86',
      // host: '127.0.0.1',
      port: 3306,
      database: 'community_prod',
      password: 'Forever@940928',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  return {
    ...config,
  };
};
