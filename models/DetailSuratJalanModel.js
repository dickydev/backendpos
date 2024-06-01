// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
// import SuratJalan from "./SuratJalanModel.js";

// const { DataTypes } = Sequelize;

// const DetailSuratJalan = db.define(
//   "detailsuratjalans",
//   {
//     uuid: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     idSuratJalan: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: SuratJalan,
//         key: "uuid",
//       },
//     },
//     kodeProduct: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     namaProduct: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     jumlahProduct: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         isNumeric: true,
//         min: 1,
//       },
//     },
//     hargaSatuan: {
//       type: DataTypes.DECIMAL(10, 2), // Menggunakan tipe data DECIMAL untuk harga
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         isNumeric: true,
//         min: 0,
//       },
//     },
//     totalHarga: {
//       type: DataTypes.VIRTUAL, // Menggunakan kolom virtual untuk totalHarga
//       get() {
//         return this.jumlahProduct * this.hargaSatuan;
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: (instance) => {
//         // Hitung totalHarga sebelum menyimpan data baru
//         instance.totalHarga = instance.jumlahProduct * instance.hargaSatuan;
//       },
//       beforeUpdate: (instance) => {
//         // Hitung totalHarga sebelum memperbarui data
//         instance.totalHarga = instance.jumlahProduct * instance.hargaSatuan;
//       },
//     },
//   }
// );

// DetailSuratJalan.belongsTo(SuratJalan, {
//   foreignKey: "idSuratJalan",
//   targetKey: "uuid",
// });

// export default DetailSuratJalan;
import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import SuratJalan from "./SuratJalanModel.js";

const DetailSuratJalan = db.define("detailsuratjalans", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  idSuratJalan: {
    type: DataTypes.UUID,
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
    type: DataTypes.DECIMAL(10, 2),
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

DetailSuratJalan.belongsTo(SuratJalan, {
  foreignKey: "idSuratJalan",
  targetKey: "uuid",
});

export default DetailSuratJalan;
