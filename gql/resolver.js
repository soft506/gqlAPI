const orderController = require("../controllers/order");
const { getAllProductsFromREST, getDiscounts } = require('./restDataSource');

const resolvers = {
    Query: {
        getExternalProducts: async (_, { url, clcodigo, page, limit, discountUrl, prolistaprecio }) => {
            // Obtener todos los productos
            const allProducts = await getAllProductsFromREST(url, clcodigo);

            // Aplicar paginación
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const paginatedProducts = allProducts.slice(startIndex, endIndex);

            // Si se proporcionan las URLs y parámetros para descuentos, obtener y aplicar descuentos
            if (discountUrl && prolistaprecio) {
                const discounts = await getDiscounts(discountUrl, prolistaprecio);

                // Añadir información de descuento a los productos
                return paginatedProducts.map(product => {
                    const discountInfo = discounts.find(discount => discount.proarticulo === product.arcodigo);
                    if (discountInfo) {
                        return {
                            ...product,
                            descuentoPromocional: [discountInfo.procantidad1, discountInfo.procantidad2, discountInfo.procantidad3],
                            descuentoPorcentaje: [discountInfo.prodescuento1, discountInfo.prodescuento2, discountInfo.prodescuento3]
                        };
                    }
                    return product;
                });
            }

            // Devolver productos sin información de descuento si no se proporcionan URLs y parámetros para descuentos
            return paginatedProducts;
        },
        getOrders: (_, { status, skip, limit }) => orderController.getOrdersByStatus(status, skip, limit),
        getOrderById: (_, { id }) => orderController.getOrderById(id),
    },
    Mutation: {
        newOrder: (_, { input }) => orderController.newOrder(input),
        updateOrder: (_, { id, input }) => orderController.updateOrder(id, input),
        deleteOrder: (_, { id }) => orderController.deleteOrder(id),
    }
};

module.exports = resolvers;

