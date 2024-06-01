// import SuratJalan from "../models/SuratJalanModel.js";

// // Controller untuk menampilkan semua surat jalan
// export const getAllSuratJalan = async (req, res) => {
//   try {
//     const suratJalan = await SuratJalan.findAll();
//     res.json(suratJalan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller untuk menambahkan surat jalan baru
// export const addSuratJalan = async (req, res) => {
//   const suratJalanData = req.body;
//   try {
//     const newSuratJalan = await SuratJalan.create(suratJalanData);
//     res.status(201).json(newSuratJalan);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Controller untuk mendapatkan detail surat jalan berdasarkan ID
// export const getSuratJalanById = async (req, res) => {
//   const suratJalanId = req.params.id;
//   try {
//     const suratJalan = await SuratJalan.findByPk(suratJalanId);
//     if (!suratJalan) {
//       res.status(404).json({ message: "Surat Jalan not found" });
//       return;
//     }
//     res.json(suratJalan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller untuk mengupdate surat jalan berdasarkan ID
// export const updateSuratJalan = async (req, res) => {
//   const suratJalanId = req.params.id;
//   const updatedData = req.body;
//   try {
//     const suratJalan = await SuratJalan.findByPk(suratJalanId);
//     if (!suratJalan) {
//       res.status(404).json({ message: "Surat Jalan not found" });
//       return;
//     }
//     await suratJalan.update(updatedData);
//     res.json({ message: "Surat Jalan updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller untuk menghapus surat jalan berdasarkan ID
// export const deleteSuratJalan = async (req, res) => {
//   const suratJalanId = req.params.id;
//   try {
//     const suratJalan = await SuratJalan.findByPk(suratJalanId);
//     if (!suratJalan) {
//       res.status(404).json({ message: "Surat Jalan not found" });
//       return;
//     }
//     await suratJalan.destroy();
//     res.json({ message: "Surat Jalan deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import SuratJalan from "../models/SuratJalanModel.js";
import Product from "../models/ProductModel.js";

// Controller untuk menampilkan semua surat jalan
export const getAllSuratJalan = async (req, res) => {
  try {
    const suratJalan = await SuratJalan.findAll();
    res.json(suratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan surat jalan baru
export const addSuratJalan = async (req, res) => {
  const suratJalanData = req.body;
  try {
    // Dapatkan data produk berdasarkan kode produk dari surat jalan
    // const product = await Product.findOne({
    //   where: { kodeProduct: suratJalanData.kodeProduct },
    // });
    // if (!product) {
    //   res.status(404).json({ message: "Product not found" });
    //   return;
    // }

    // Buat surat jalan baru dengan data yang diberikan
    const newSuratJalan = await SuratJalan.create(suratJalanData);
    res.status(201).json(newSuratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan detail surat jalan berdasarkan ID
export const getSuratJalanById = async (req, res) => {
  const suratJalanId = req.params.id;
  try {
    const suratJalan = await SuratJalan.findByPk(suratJalanId);
    if (!suratJalan) {
      res.status(404).json({ message: "Surat Jalan not found" });
      return;
    }
    res.json(suratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mengupdate surat jalan berdasarkan ID
export const updateSuratJalan = async (req, res) => {
  const suratJalanId = req.params.id;
  const updatedData = req.body;
  try {
    const suratJalan = await SuratJalan.findByPk(suratJalanId);
    if (!suratJalan) {
      res.status(404).json({ message: "Surat Jalan not found" });
      return;
    }
    await suratJalan.update(updatedData);
    res.json({ message: "Surat Jalan updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus surat jalan berdasarkan ID
export const deleteSuratJalan = async (req, res) => {
  const suratJalanId = req.params.id;
  try {
    const suratJalan = await SuratJalan.findByPk(suratJalanId);
    if (!suratJalan) {
      res.status(404).json({ message: "Surat Jalan not found" });
      return;
    }
    await suratJalan.destroy();
    res.json({ message: "Surat Jalan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailInvoiceByNoSuratJalan = async (req, res) => {
  const noSuratJalan = req.params.noSuratJalan;
  console.log(noSuratJalan);
  try {
    const suratJalan = await SuratJalan.findOne({ where: { noSuratJalan } });
    if (suratJalan) {
      res.json(suratJalan);
    } else {
      res.status(404).json({ msg: "Surat Jalan Not Found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
