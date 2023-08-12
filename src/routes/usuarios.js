const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuarioById, deleteUsuarioById} = require("../controllers/usuarioController");

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:libros"), getAllUsuarios);

router.get("/:id", requiredScopes("read:libros"), getUsuarioById);

router.post("/", requiredScopes("write:libros"), createUsuario);

router.put("/:id", requiredScopes("write:libros"), updateUsuarioById);

router.delete("/:id", requiredScopes("write:libros"), deleteUsuarioById);

module.exports = router;