import { DataTypes } from "sequelize";

import { sequelize } from "../config/db";
import { logger } from "../utils/logger";

const Todo = sequelize.define("todos", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      max: 50
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 200
    }
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => {
    logger.info("Successfully created Todo table");
  })
  .catch((err) => {
    logger.error("Failed creating the table Todo: " + err);
  });

export default Todo;
