'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('movies', 'release_date', {
      type: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('movies', 'release_date', {
      type: Sequelize.DATEONLY,
    })
  }
};
