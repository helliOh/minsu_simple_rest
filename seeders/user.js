'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { name: 'james', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
      { name: 'beenzino', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
      { name: 'theQ', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
      { name: 'Dbo', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
      { name: 'Hendricks', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
      { name: 'John Mayer', createdAt: new Date(), updatedAt: new Date(), email: "ppap@gmail.com", phone: "01012341234"},
    ], { timestamps: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
