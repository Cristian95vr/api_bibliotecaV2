const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
}, { collection: 'usuarios' });

const Usuario= mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;