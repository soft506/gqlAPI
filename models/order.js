const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    articulo: {
        arcodigo: String,
        arnombre: String,
        arunidad: String,
        arfamilia: String,
        ariva: Number,
        arprecio: Number,
        ardescuento: Number,
        arsugerido: Number,
        ardescuentono: Number,
        arpromocionalno: Number,
        arimagen: String
    },
    cantidad: Number,
    precioConDescuento: Number,
    descuentoIndex: Number
});

const OrderSchema = new Schema({
    idClient: {
        type: String,
        required: true
    },
    idDist: {
        type: String,
        required: true
    },
    orderItems: [OrderItemSchema],
    total: {
        type: Number,
        required: true
    },
    totalArticulos: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    ref: {
        type: String,
        required: true,
        trim: true
    },
    clientEmail: {
        type: String,
        required: true,
        trim: true
    },
    totalIVA: {
        type: Number,
        required: true
    },
    totalDescuento: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},{collection: 'order'});

module.exports = mongoose.model("Order", OrderSchema);

