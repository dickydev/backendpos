import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

// Controller untuk menampilkan semua pesanan
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan pesanan baru
export const addOrder = async (req, res) => {
  const orderData = req.body;
  try {
    const newOrder = await Order.create(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  // const orderData = req.body;
  // try {
  //   // Buat pesanan baru
  //   const newOrder = await Order.create(orderData);

  //   // Kurangi jumlah produk yang dipesan dari stok produk
  //   const product = await Product.findOne({ where: { kodeProduct: orderData.kodeProduct } });
  //   if (!product) {
  //     return res.status(404).json({ message: "Product not found" });
  //   }
  //   if (product.jumlah < orderData.jumlah) {
  //     return res.status(400).json({ message: "Insufficient product quantity available" });
  //   }
  //   product.jumlah -= orderData.jumlah;
  //   await product.save();

  //   res.status(201).json(newOrder);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

// Controller untuk mendapatkan detail pesanan berdasarkan ID
export const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mengupdate pesanan berdasarkan ID
export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const updatedData = req.body;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    await order.update(updatedData);
    res.json({ message: "Order updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus pesanan berdasarkan ID
export const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
