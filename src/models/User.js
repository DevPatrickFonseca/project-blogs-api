module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return User;
};