import Order from "./OrderModel.js";
import DetailOrder from "./DetailOrderModel.js";

const defineAssociations = () => {
  //   Order.belongsTo(Customer); // Order terkait dengan satu Customer
  Order.hasMany(DetailOrder, { foreignKey: "idOrder" });
  DetailOrder.belongsTo(Order, { foreignKey: "idOrder" });
};

export default defineAssociations;
