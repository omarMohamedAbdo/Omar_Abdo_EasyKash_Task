module.exports = {
  HOST: "localhost",
  USER: "newuser",
  PASSWORD: "password",
  DB: "EasyKash",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
