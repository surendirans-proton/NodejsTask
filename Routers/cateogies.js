const express = require("express");
const router = express.Router();
const Categories = require("../Models/category");
const Products = require("../Models/products");

/* Initialized the delete router to delete the category by the ObjectID */
router.delete("", async (req, res) => {
  try {
    const bodyData = req.body;

    /* Validating request body for the data. Otherwise throwing the error */
    if (!bodyData || !bodyData.categoryId) {
      res.status(500).send("Please Send Valid Data");
    }

    const categoryId = bodyData.categoryId;

    /* Checking the Category is a valid one or not */
    const category = await Categories.findOne({ _id: categoryId });

    if (!category) {
      res.status(404).send("Category not found");
    }

    /* Getting the data before deleting the record for send as a response. */
    const removedProducts = await Products.find({ category: categoryId });
    
    /* Deleting products based on the category */
    await Products.deleteMany({ category: categoryId });

    /* Removing the category */
    await category.remove();
    res.json(removedProducts);
  }
  catch(ex) {
      /* Send the error when any issue happened in the try section */
      res.status(500).send('Error occured while deleting the records')
  }
});

module.exports = router;
