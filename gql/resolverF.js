const orderController= require("../controllers/order");
const { getAllProductsFromREST } = require('./restDataSource');

const resolvers = {
    Query:{
 getExternalProducts: async (_, { url, clcodigo, page, limit }) => {
            const allProducts = await getAllProductsFromREST(url, clcodigo);
            // Aplicar paginación aquí, si es necesario
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            return allProducts.slice(startIndex, endIndex);
        },
        getOrders: (_, { status, skip, limit }) => orderController.getOrdersByStatus(status, skip, limit),
        getOrderById: (_, { id }) => orderController.getOrderById(id),
    },
    Mutation:{
        newOrder: (_, { input }) => orderController.newOrder(input),
        updateOrder: (_, { id, input }) => orderController.updateOrder(id, input),
        deleteOrder: (_, { id }) => orderController.deleteOrder(id),
    }
}

module.exports = resolvers;

