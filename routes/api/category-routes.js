const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    where: {
      product_name: req.body.product_name
    }
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      product_name: req.body.product_name
    }
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category, expects { categoryname }
 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  
});

module.exports = router;
