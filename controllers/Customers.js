import Customer from "../models/CustomerModel.js";

// Controller untuk menampilkan semua pelanggan
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan pelanggan baru
export const addCustomer = async (req, res) => {
  const customerData = req.body;
  try {
    const newCustomer = await Customer.create(customerData);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk mendapatkan detail pelanggan berdasarkan ID
export const getCustomerById = async (req, res) => {
  const kodeCust = req.params.kodeCust; // Mengambil kodeCust dari parameter route
  console.log(kodeCust)
  try {
    const customer = await Customer.findOne({ where: { kodeCust: kodeCust } }); // Mencari customer berdasarkan kodeCust
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller untuk mengupdate pelanggan berdasarkan ID
export const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const updatedData = req.body;
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
    await customer.update(updatedData);
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus pelanggan berdasarkan ID
export const deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
    await customer.destroy();
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
