const { gql } = require("apollo-server");

const typeDefs = gql`
type Product {
    arcodigo: String
    arnombre: String
    arunidad: String
    arfamilia: String
    ariva: Int
    arprecio: Float
    ardescuento: Int
    arsugerido: Int
    ardescuentono: Int
    arpromocionalno: Int
    descuentoPromocional: [Int]
    descuentoPorcentaje: [Float]
}

type Order {
    id: ID
    createdAt: String
    updatedAt: String
    idClient: String
    idDist: String
    orderItems: [OrderItem]
    total: Float
    totalArticulos: Int
    status: String
    ref: String
    clientEmail: String
    totalIVA: Float
    totalDescuento: Float
}

type OrderItem {
    articulo: Articulo
    cantidad: Int
    precioConDescuento: Float
    descuentoIndex: Int
}

type Articulo {
    arcodigo: String
    arnombre: String
    arunidad: String
    arfamilia: String
    ariva: Int
    arprecio: Float
    ardescuento: Int
    arsugerido: Int
    ardescuentono: Int
    arpromocionalno: Int
    arimagen: String
}

input OrderInput {
    idClient: String!
    idDist: String!
    orderItems: [OrderItemInput]!
    total: Float!
    totalArticulos: Int!
    status: String!
    ref: String!
    clientEmail: String!
    totalIVA: Float!
    totalDescuento: Float!
}

input OrderItemInput {
    articulo: ArticuloInput!
    cantidad: Int!
    precioConDescuento: Float!
    descuentoIndex: Int!
}

input ArticuloInput {
    arcodigo: String!
    arnombre: String!
    arunidad: String!
    arfamilia: String!
    ariva: Int!
    arprecio: Float!
    ardescuento: Int!
    arsugerido: Int!
    ardescuentono: Int!
    arpromocionalno: Int!
    arimagen: String!
}

type Query {
    getExternalProducts(
        url: String!,
        clcodigo: Int!,
        page: Int!,
        limit: Int!,
        discountUrl: String, 
        prolistaprecio: Int
    ): [Product]
    getOrders(status: String!, skip: Int, limit: Int): [Order]
    getOrderById(id: ID!): Order
}

type Mutation {
    newOrder(input: OrderInput): Order
    updateOrder(id: ID!, input: OrderInput): Order
    deleteOrder(id: ID!): Boolean
}
`;

module.exports = typeDefs;

