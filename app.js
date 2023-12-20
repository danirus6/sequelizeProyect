const express = require('express');
const app = express();
const PORT = 3000;


// Middleware para parsear JSON
app.use(express.json());

// Conectar las rutas
app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));
// app.use('/productOrders', require('./routes/productOrderRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
