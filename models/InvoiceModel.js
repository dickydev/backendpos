// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";

// const { DataTypes } = Sequelize;

// const Invoice = db.define(
//   "invoice",
//   {
//     uuid: {
//       type: DataTypes.STRING,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     namaCust: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//     noInvoice: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//     tglInvoice: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     noSJ: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//     noKTP: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//     tglSJ: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     kodeProduct: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//     jumlah:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     },
//     harga:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     },
//     keterangan: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [3, 100],
//       },
//     },
//   },
//   {
//     freezeTableName: true,
//   }
// );

// export default Invoice;

import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Order from "./OrderModel.js";
import SuratJalan from "./SuratJalanModel.js";

const { DataTypes } = Sequelize;

const Invoice = db.define(
  "invoice",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    namaCust: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    noInvoice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    tglInvoice: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    noSJ: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    noKTP: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    tglSJ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    suratjalan_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    // Add other attributes for Invoice
  },
  {
    freezeTableName: true,
  }
);

Invoice.belongsTo(Order); // Invoice terkait dengan satu Order
Invoice.belongsTo(SuratJalan, { foreignKey: "suratjalan_id" });

export default Invoice;
