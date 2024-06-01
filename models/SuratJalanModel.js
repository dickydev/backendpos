// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
// import Order from "./OrderModel.js";

// const { DataTypes } = Sequelize;

// const SuratJalan = db.define("suratjalan", {
//   uuid: {
//     type: DataTypes.STRING,
//     defaultValue: DataTypes.UUIDV4,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   // Add other attributes for SuratJalan
// });

// SuratJalan.belongsTo(Order); // SuratJalan terkait dengan satu Order

// export default SuratJalan;

// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
// import Order from "./OrderModel.js";

// const { DataTypes } = Sequelize;

// const SuratJalan = db.define("suratjalans", {
//   uuid: {
//     type: DataTypes.STRING,
//     defaultValue: DataTypes.UUIDV4,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   tanggal: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   noSuratJalan: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   kodeProduct: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   namaProduct: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   jumlahProduct: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//       isNumeric: true,
//       min: 1,
//     },
//   },
//   hargaSatuan: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//       isNumeric: true,
//       min: 0,
//     },
//   },
//   totalHarga: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//       isNumeric: true,
//       min: 0,
//     },
//   },
//   noMobil: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   namaSopir: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   keterangan: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
// });

// // Menambahkan relasi dengan model Order
// SuratJalan.belongsTo(Order);

// export default SuratJalan;
import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Order from "./OrderModel.js";

// const { DataTypes } = Sequelize;

const SuratJalan = db.define("suratjalans", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  tanggal: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  noSuratJalan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // kodeProduct: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
  // namaProduct: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // // },
  // jumlahProduct: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //     isNumeric: true,
  //     min: 1,
  //   },
  // },
  // hargaSatuan: {
  //   type: DataTypes.DECIMAL(10, 2),
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //     isNumeric: true,
  //     min: 0,
  //   },
  // },
  // totalHarga: {
  //   type: DataTypes.DECIMAL(10, 2),
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //     isNumeric: true,
  //     min: 0,
  //   },
  // },
  noMobil: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  namaSopir: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  keterangan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

SuratJalan.belongsTo(Order);

export default SuratJalan;
