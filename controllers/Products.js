import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin" || req.role === "marketing" ) {
      response = await Product.findAll({
        attributes: ["id", "uuid", "kodeProduct", "namaProduct", "harga", "jumlah"],
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findAll({
        attributes: ["id", "uuid", "kodeProduct", "namaProduct", "harga", "jumlah"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        kodeProduct: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "marketing") {
      response = await Product.findOne({
        attributes: ["id","uuid", "kodeProduct", "namaProduct", "harga", "jumlah"],
        where: {
          id: product.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findOne({
        attributes: ["id", "uuid", "kodeProduct", "namaProduct", "harga", "jumlah"],
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// export const createProduct = async (req, res) => {
//   const { kodeProduct, namaProduct, harga } = req.body;
//   try {
//     await Product.create({
//       kodeProduct: kodeProduct,
//       namaProduct: namaProduct,
//       harga: harga,
//       userId: req.userId,
//     });
//     res.status(201).json({ msg: "Product Created Successfuly" });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// export const updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findOne({
//       where: {
//         uuid: req.params.id,
//       },
//     });
//     if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
//     const { name, price } = req.body;
//     if (req.role === "admin") {
//       await Product.update(
//         { name, price },
//         {
//           where: {
//             id: product.id,
//           },
//         }
//       );
//     } else {
//       if (req.userId !== product.userId)
//         return res.status(403).json({ msg: "Akses terlarang" });
//       await Product.update(
//         { name, price },
//         {
//           where: {
//             [Op.and]: [{ id: product.id }, { userId: req.userId }],
//           },
//         }
//       );
//     }
//     res.status(200).json({ msg: "Product updated successfuly" });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };
export const createProduct = async (req, res) => {
  const { id, kodeProduct, namaProduct, harga, jumlah } = req.body;
  try {
    console.log("User ID:", req.userId); // Tambahkan logging di sini
    await Product.create({
      id : id,
      kodeProduct: kodeProduct,
      namaProduct: namaProduct,
      harga: harga,
      jumlah: jumlah,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Product Created Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });

    console.log("User ID:", req.userId); // Tambahkan logging di sini

    const { namaProduct, harga } = req.body;
    if (req.role === "admin") {
      await Product.update(
        { namaProduct, harga },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Product.update(
        { namaProduct, harga },
        {
          where: {
            [Op.and]: [{ id: product.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    // const { name, price } = req.body;
    if (req.role === "admin") {
      await Product.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Product.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Product deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
