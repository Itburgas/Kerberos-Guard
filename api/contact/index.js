module.exports = async function (context, req) {
  const { Resend } = require("resend");

module.exports = async function (context, req) {
  try {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      context.res = {
        status: 400,
        body: { error: "Todos los campos son obligatorios." }
      };
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ADAutomationHub <contacto@adautomationhub.com>",
      to: "fernando.pinero@itburgas.com",
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde ADAutomationHub</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
      `
    });

    context.res = {
      status: 200,
      body: { success: true }
    };
  } catch (error) {
    context.log(error);
    context.res = {
      status: 500,
      body: { error: "Error enviando el correo." }
    };
  }
};
