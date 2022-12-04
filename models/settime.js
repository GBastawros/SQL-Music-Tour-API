'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetTime.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull:false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'settime',
    timestamps: false
  });
  return SetTime;
};