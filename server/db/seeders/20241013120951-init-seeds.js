'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Coffees',
      [
        {
          title: "Розовое счастье",
          desc: "Для настоящих Барби",
          reason: 'На встрече с Кеном',
          authorName: 'Джейн',
          url: "http://localhost:3000/1.jpg"
        },
        {
          title: "Лавандовый раф",
          desc: "Лаванда, горная лаванда",
          reason: 'Когда стало мало красок',
          authorName: 'Джейн',
          url: "http://localhost:3000/2.jpg"
        },
        {
          title: "Зеленая матча латте",
          desc: "Полезно",
          reason: 'Полезно',
          authorName: 'Джейн',
          url: "http://localhost:3000/3.jpg"
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
