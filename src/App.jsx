export default function AuditExpressWeb() {
  const services = [
    {
      title: "Auditoría Express de Active Directory",
      description:
        "Revisión rápida de configuraciones críticas: Kerberos, RC4, AES, cuentas de servicio, delegaciones y políticas de seguridad.",
    },
    {
      title: "Hardening y Remediación",
      description:
        "Plan de acción priorizado con scripts y recomendaciones para corregir vulnerabilidades detectadas.",
    },
    {
      title: "Automatización con PowerShell",
      description:
        "Desarrollo de scripts a medida para auditoría, reporting y tareas operativas de Active Directory y Azure.",
    },
  ];

  const scripts = [
    "Detección de cuentas que usan RC4",
    "Inventario de msDS-SupportedEncryptionTypes",
    "Sincronización LDAP de atributos",
    "Monitorización de eventos Kerberos (4768/4769)",
    "Revisión de cuentas de servicio inactivas",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-200 mb-4">
            Auditorías rápidas de seguridad
          </p>
          <h1 className="text-5xl font-bold leading-tight max-w-3xl">
            Audit Express AD
          </h1>
          <p className="mt-6 text-xl text-slate-200 max-w-3xl">
            Auditorías técnicas de Active Directory y Azure AD con entrega en 24-48 horas,
            acompañadas de scripts reutilizables y plan de remediación.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
            >
              Solicitar auditoría
            </a>
            <a
              href="#scripts"
              className="border border-white/30 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10"
            >
              Ver scripts
            </a>
          </div>
        </div>
      </header>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["24-48h", "Entrega rápida del informe técnico"],
            ["100% PowerShell", "Scripts reutilizables incluidos"],
            ["Prioridades", "Hallazgos clasificados por riesgo"],
          ].map(([value, label]) => (
            <div key={value} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-3xl font-bold text-blue-700">{value}</div>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Cómo funciona</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "1. Reunión inicial de 30 minutos",
              "2. Ejecución de scripts de auditoría",
              "3. Análisis de riesgos",
              "4. Entrega de informe y plan de acción",
            ].map((step) => (
              <div key={step} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripts */}
      <section id="scripts" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">Repositorio de Scripts</h2>
        <p className="text-slate-600 mb-8">
          Ejemplos de automatizaciones que entregamos junto con las auditorías.
        </p>
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-8">
          <ul className="space-y-4">
            {scripts.map((script) => (
              <li key={script} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                {script}
              </li>
            ))}
          </ul>
          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 px-5 py-3 rounded-2xl font-semibold hover:bg-blue-700"
          >
            Ver repositorio en GitLab
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">Solicita tu auditoría</h2>
          <p className="text-blue-100 max-w-2xl mb-8">
            Envíanos tu entorno y objetivos. Te prepararemos una propuesta cerrada
            con alcance, plazo y coste.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-2xl">fernando@auditexpressad.com</div>
            <div className="bg-white/10 p-4 rounded-2xl">LinkedIn / Fernando Piñero</div>
            <div className="bg-white/10 p-4 rounded-2xl">Madrid · Servicio remoto</div>
          </div>
        </div>
      </section>
    </div>
  );
}
