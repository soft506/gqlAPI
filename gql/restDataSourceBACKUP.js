// restDataSource.js
const axios = require('axios');

async function getAllProductsFromREST(url, clcodigo) {
    try {
        const fullUrl = `${url}?clcodigo=${clcodigo}`; // Añadir el parámetro a la URL
        console.log(`Requesting URL: ${fullUrl}`);
        const response = await axios.get(fullUrl);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener productos de la API REST');
    }
}

module.exports = {
    getAllProductsFromREST
};

