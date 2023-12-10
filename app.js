const express = require('express');
const app = express();
const PORT = 3000;

// Conectar las rutas
app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));
app.use('/productOrders', require('./routes/productOrderRoutes'));

//FALTAN LOS DE AUTH (CUANDO TOQUE)

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
