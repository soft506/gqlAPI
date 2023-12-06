const Order = require("../models/order");

async function getOrdersByStatus(status, skip, limit) {
    const orders = await Order.find({ status })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: 'desc' }); // Ordena por fecha de creación, puedes cambiar esto
    return orders;
}

async function getOrderById(id) {
    const order = await Order.findById(id);
    return order;
}

async function newOrder(input) {
    const {
        idClient,
        idDist,
        orderItems,
        total,
        totalArticulos,
        status,
        ref,
        clientEmail,
        totalIVA,
        totalDescuento
    } = input;

    try {
        const order = new Order({
            idClient,
            idDist,
            orderItems,
            total,
            totalArticulos,
            status,
            ref,
            clientEmail,
            totalIVA,
            totalDescuento
        });
        await order.save();
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear la orden');
    }
}

async function updateOrder(id, input) {
    const updatedOrder = await Order.findByIdAndUpdate(id, input, { new: true });
    return updatedOrder;
}

async function deleteOrder(id) {
    await Order.findByIdAndDelete(id);
    return true;
}

module.exports = {
    getOrdersByStatus,
    getOrderById,
    newOrder,
    updateOrder,
    deleteOrder
};

