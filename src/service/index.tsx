export default function geoloc(){
//     const axios = require('axios');

// async function getLocationByIp(ip) {
//   try {
//     const response = await axios.get(`http://ip-api.com/json/${ip}`);
//     const { city, regionName, country, lat, lon } = response.data;
//     return { city, regionName, country, latitude: lat, longitude: lon };
//   } catch (error) {
//     console.error('Erro ao obter localização:', error);
//     return null;
//   }
// }

// // Exemplo de uso
// const ip = '8.8.8.8'; // IP de exemplo
// getLocationByIp(ip)
//   .then(location => {
//     console.log('Localização:', location);
//   })
//   .catch(error => {
//     console.error('Erro:', error);
//   });






// buscar ip:
// const express = require('express');
// const requestIp = require('request-ip');

// const app = express();

// // Middleware para obter o IP da requisição
// app.use(requestIp.mw());

// // Rota para obter o IP do cliente
// app.get('/meuip', (req, res) => {
//   const ip = req.clientIp;
//   res.send(`Seu IP é: ${ip}`);
// });

// // Iniciando o servidor na porta 3000
// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });
}