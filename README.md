# Cosmophonix Portal

Landing page pubblica per il nuovo portale Cosmophonix.

## Cosa contiene

- `index.html`
  - landing `coming soon` pubblica
  - nessun link insider al resort dalla homepage
- `assets/site.css`
  - visual system della landing
- `assets/app.js`
  - form handler con supporto a endpoint reali o fallback email
- `assets/images/*`
  - selezione di immagini curate dal deck `tempesta`

## Stato attuale

I form funzionano in due modalita':

- fallback:
  - aprono un `mailto:` verso `commerciale@cosmophonix.com`
- modalita' live:
  - impostare `window.COSMOPHONIX_PORTAL_CONFIG.waitlistEndpoint`
  - impostare `window.COSMOPHONIX_PORTAL_CONFIG.demoEndpoint`

## Prossimo step consigliato

Collegare i due form a PocketBase su Hetzner con due collection:

- `waitlist_submissions`
- `demo_submissions`
