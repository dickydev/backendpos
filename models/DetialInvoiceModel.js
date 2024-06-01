import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Invoice from "./InvoiceModel.js";

const DetailInvoice = db.define(
  "detailinvoice",
  {
    detailInvoice_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Invoice,
        key: "id",
      },
    },
    kodeProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "detailinvoice",
    timestamps: false,
  }
);

// Definisikan relasi
DetailInvoice.belongsTo(Invoice, { foreignKey: "invoice_id" });
Invoice.hasMany(DetailInvoice, { foreignKey: "invoice_id" });

export default DetailInvoice;
