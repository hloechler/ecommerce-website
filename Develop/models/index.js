// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_name'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag,{
  foreignKey: 'tag_id',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product,{
  foreignKey: 'product_id',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
