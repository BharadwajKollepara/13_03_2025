import { Router } from "express";
import Order, {
  find,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../models/Order";
const router = Router();
router.get("/", async (req, res) => {
  try {
    const orders = await find()
      .populate("userId")
      .populate("products.productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body;
    const order = new Order({ userId, products, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const order = await findById(req.params.id)
      .populate("userId")
      .populate("products.productId");
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
