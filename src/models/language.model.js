import sequelize from "../config/database.js";
import { DataTypes } from 'sequelize';

const model = sequelize.define(
  'model',
  {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    paradigm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
        release_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }
)

export default model;
