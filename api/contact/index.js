module.exports = async function (context, req) {
  const { nombre, email, mensaje } = req.body || {};

  // Validar campos obligatorios
  if (!nombre || !email || !mensaje) {
    context.res = {
      status: 400,
      body: {
        success: false,
        message: "Todos los campos son obligatorios."
      }
    };
    return;
  }

  // Registrar el mensaje en los logs de Azure
  context.log("Nuevo mensaje recibido:", {
    nombre,
    email,
    mensaje
  });

  // Respuesta al formulario
  context.res = {
    status: 200,
    body: {
      success: true,
      message: "Mensaje enviado correctamente."
    }
  };
};
