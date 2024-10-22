const coffeeRouter = require('express').Router();
const { Coffee } = require('../../db/models');
const checkId = require('../middlewares/checkId');

coffeeRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const coffees = await Coffee.findAll();     
      res.send(coffees);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, desc, url, reason, authorName } = req.body;
      if (!title || !desc || !url || !reason || !authorName) {
        return res.status(400).json({ message: 'Некорректные данные' });
      }
      const coffee = await Coffee.create({ title, desc, url, reason, authorName });
      res.send(coffee);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
  coffeeRouter.route('/:id').delete(checkId, async (req, res) => {
  try {
    const { id } = res.locals; 
    await Coffee.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = coffeeRouter;
