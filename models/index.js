const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const User = sequelize.import('./User');
const Item = sequelize.import('./Item');
const Review = sequelize.import('./Review');
const Comment = sequelize.import('./Comment');

User.hasMany(Review, { onDelete: 'CASCADE' });
Review.belongsTo(User);

Item.hasMany(Review, { onDelete: 'CASCADE' });
Review.belongsTo(Item);

Review.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(Review);

User.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Item,
  Review,
  Comment,
};
