const Usuario = require("../models/usuarioModel");

exports.getAllUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de usuarios" });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los detalles del usuario" });
    }
};

exports.createUsuario = async (req, res) => {
    try {
      const nuevoUsuario = req.body;
      const createdUsuario = await Usuario.create(nuevoUsuario);
      res.status(201).json(createdUsuario);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el usuario" });
    }
};

exports.updateUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUsuario = req.body;
      const usuario = await Usuario.findOneAndUpdate(
        { _id: id },
        updatedUsuario,
        { new: true }
      );
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
        res.status(200).json(usuario);
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la información del usuario" });
    }
};

exports.deleteUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUsuario = await Usuario.findOneAndDelete({ _id: id });
      if (!deletedUsuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
};