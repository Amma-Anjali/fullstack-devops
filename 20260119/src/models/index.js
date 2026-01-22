
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Course = require("./models/course")(sequelize, DataTypes);
const Enrollment = require("./models/enrollment")(sequelize, DataTypes);

// 1-to-many
Course.hasMany(Enrollment, { foreignKey: "courseId", onDelete: "CASCADE" });
Enrollment.belongsTo(Course, { foreignKey: "courseId" });

module.exports = { sequelize, Course, Enrollment };