module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Review;
  };
  