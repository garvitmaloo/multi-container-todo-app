import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const startSequelize = (): Sequelize => {
  if (
    process.env.MYSQL_DATABASE === undefined ||
    process.env.MYSQL_USER === undefined ||
    process.env.MYSQL_PASSWORD === undefined
  ) {
    throw new Error(
      "Failed to create a DB instance. Please provide necessary environment variables"
    );
  }

  const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: "mysql",
      dialect: "mysql"
    }
  );

  return sequelize;
};

const sequelize = startSequelize();

export { sequelize };
