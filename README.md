# Cosmophonix Production Site

Landing minimale pubblica per `cosmophonix.com`.

## Contenuto attivo

- `index.html`
  - fondo nero
  - logo Cosmophonix
  - `Coming soon`
  - bottone email verso `commerciale@cosmophonix.com`
- `assets/logo-cosmophonix.svg`
  - logo vettoriale usato dalla home

Gli altri asset presenti nel repo non sono usati dalla homepage attuale.

## Dominio

Il file `CNAME` e' gia' preparato per:

- `cosmophonix.com`

## DNS da configurare

`cosmophonix.com` oggi e' registrato in GoDaddy ma usa nameserver Wix.

Quindi i record vanno probabilmente modificati nel pannello DNS di Wix, non in GoDaddy.

Per GitHub Pages su dominio root:

- record `A`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- record `CNAME`:
  - `www -> maxkle1nz.github.io`

## GitHub Pages

- branch: `main`
- source: `Deploy from a branch`
- folder: `/ (root)`
- custom domain: `cosmophonix.com`
- attivare `Enforce HTTPS` quando disponibile
