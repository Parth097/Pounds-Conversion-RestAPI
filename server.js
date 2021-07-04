// Setting up the port, and initial route

const express = require ('express');
const conversion_ratesRoutes = require('./src/currencyConverter/routes');
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/conversion_rates', conversion_ratesRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));