import sequelize from "./database.js";

const testDB = async ()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync()
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

export default testDB;