const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false // ADVERTENCIA: Esto desactiva la verificación SSL.
});

async function getAllProductsFromREST(url, clcodigo) {
    try {
        const fullUrl = `${url}?clcodigo=${clcodigo}`;
        const response = await axios.get(fullUrl, { httpsAgent });
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud a la API REST:', error.message);
        throw new Error('Error al obtener productos de la API REST');
    }
}

module.exports = {
    getAllProductsFromREST
};

