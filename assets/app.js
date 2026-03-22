window.COSMOPHONIX_PORTAL_CONFIG = window.COSMOPHONIX_PORTAL_CONFIG || {
  fallbackEmail: "commerciale@cosmophonix.com",
  waitlistEndpoint: "",
  demoEndpoint: ""
};

function setStatus(form, message, kind) {
  const status = form.querySelector(".form-status");
  status.textContent = message;
  status.classList.remove("is-success", "is-error");
  if (kind) status.classList.add(kind);
}

function toMailto(subject, lines) {
  const body = encodeURIComponent(lines.filter(Boolean).join("\n"));
  const href = `mailto:${window.COSMOPHONIX_PORTAL_CONFIG.fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = href;
}

async function postJson(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json().catch(() => ({}));
}

document.querySelectorAll(".portal-form").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const type = form.dataset.formType;
    const payload = Object.fromEntries(data.entries());
    const endpoint = type === "waitlist"
      ? window.COSMOPHONIX_PORTAL_CONFIG.waitlistEndpoint
      : window.COSMOPHONIX_PORTAL_CONFIG.demoEndpoint;

    if (!endpoint) {
      if (type === "waitlist") {
        toMailto("Cosmophonix Waitlist", [
          "Nuova richiesta waitlist dal portale Cosmophonix",
          "",
          `Nome: ${payload.name || "-"}`,
          `Email: ${payload.email || "-"}`,
          `Profilo: ${payload.role || "-"}`,
          "",
          `Messaggio: ${payload.message || "-"}`
        ]);
      } else {
        toMailto("Cosmophonix Demo Submission", [
          "Nuova demo dal portale Cosmophonix",
          "",
          `Artista / progetto: ${payload.project || "-"}`,
          `Email: ${payload.email || "-"}`,
          `Link demo: ${payload.demo_link || "-"}`,
          "",
          `Messaggio: ${payload.message || "-"}`
        ]);
      }
      return;
    }

    setStatus(form, "Sending...", "");

    try {
      await postJson(endpoint, payload);
      form.reset();
      setStatus(form, "Ricevuto. Ti ricontatteremo presto.", "is-success");
    } catch (error) {
      setStatus(form, "C'e' stato un problema. Per ora usa il fallback email.", "is-error");
    }
  });
});
