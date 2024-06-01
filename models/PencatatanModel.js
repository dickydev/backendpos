import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import Customer from "./CustomerModel.js";

const { DataTypes } = Sequelize;

const Pencatatan = db.define("pencatatan", {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tglOrder: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  noOrder: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  kodeAgen: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  namaAgen: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  kodeProduct: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  namaProduct: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tglKirim: {
    type: DataTypes.DATE,
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
  pembayaran: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  // tanggalKirim: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   },
  // },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Product", // Nama model yang dirujuk
      key: "id" // Kolom dalam tabel Product yang dirujuk
    }
  }
});

// Order.belongsTo(Customer); // Order terkait dengan satu Customer

export default Pencatatan;
