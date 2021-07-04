const express = require("express");
const apiRoutes = require('./routes/functionality-routes');
const htmlRoutes = require('./routes/routes-HTML');

const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

