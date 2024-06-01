import DetailSuratJalan from "../models/DetailSuratJalanModel.js";
import SuratJalan from "../models/SuratJalanModel.js";

// Controller untuk mendapatkan detail surat jalan berdasarkan ID
export const getDetailSuratJalanById = async (req, res) => {
  const idDetailSuratJalan = req.params.id;

  try {
    const detailSuratJalan = await DetailSuratJalan.findByPk(
      idDetailSuratJalan,
      {
        include: [SuratJalan],
      }
    );

    if (!detailSuratJalan) {
      res.status(404).json({ message: "Detail Surat Jalan not found" });
      return;
    }

    res.json(detailSuratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan detail surat jalan baru
export const addDetailSuratJalan = async (req, res) => {
  const detailSuratJalanData = req.body;

  try {
    // Cari surat jalan berdasarkan ID
    const suratJalan = await SuratJalan.findByPk(
      detailSuratJalanData.idSuratJalan
    );

    if (!suratJalan) {
      res.status(404).json({ message: "Surat Jalan not found" });
      return;
    }

    // Buat detail surat jalan baru dengan data yang diberikan
    const newDetailSuratJalan = await DetailSuratJalan.create(
      detailSuratJalanData
    );

    res.status(201).json(newDetailSuratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan semua detail surat jalan
export const getAllDetailSuratJalan = async (req, res) => {
  try {
    const detailSuratJalan = await DetailSuratJalan.findAll();
    res.json(detailSuratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan semua detail surat jalan berdasarkan ID surat jalan
export const getDetailSuratJalanByIdSuratJalan = async (req, res) => {
  const idSuratJalan = req.params.idSuratJalan;

  try {
    const detailSuratJalan = await DetailSuratJalan.findAll({
      where: { idSuratJalan },
      include: [{ model: SuratJalan }],
    });

    if (!detailSuratJalan || detailSuratJalan.length === 0) {
      res.status(404).json({ message: "Detail Surat Jalan not found" });
      return;
    }

    res.json(detailSuratJalan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mengupdate detail surat jalan berdasarkan ID
export const updateDetailSuratJalan = async (req, res) => {
  const detailSuratJalanId = req.params.id;
  const updatedData = req.body;

  try {
    const detailSuratJalan = await DetailSuratJalan.findByPk(
      detailSuratJalanId
    );

    if (!detailSuratJalan) {
      res.status(404).json({ message: "Detail Surat Jalan not found" });
      return;
    }

    await detailSuratJalan.update(updatedData);

    res.json({ message: "Detail Surat Jalan updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus detail surat jalan berdasarkan ID
export const deleteDetailSuratJalan = async (req, res) => {
  const detailSuratJalanId = req.params.id;

  try {
    const detailSuratJalan = await DetailSuratJalan.findByPk(
      detailSuratJalanId
    );

    if (!detailSuratJalan) {
      res.status(404).json({ message: "Detail Surat Jalan not found" });
      return;
    }

    await detailSuratJalan.destroy();

    res.json({ message: "Detail Surat Jalan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
