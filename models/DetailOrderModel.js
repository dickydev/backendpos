import Order from "./OrderModel.js"; // Impor Order di sini
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DetailOrder = db.define("detailorder", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  idOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  kodeProduct: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  namaProduct: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlahProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 1,
    },
  },
  hargaSatuan: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 0,
    },
  },
  totalHarga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 1,
    },
  },
});

// DetailOrder.belongsTo(Order, { foreignKey: "idOrder" });

export default DetailOrder;
