# Deploy + ingresos desde HOY

## A) Vercel (15 min)
1. https://vercel.com/new → Import jagmadrid831-cyber/nexus-gaming
2. Env vars Production:
```
NEXT_PUBLIC_SITE_URL=https://TU-PROYECTO.vercel.app
NEXT_PUBLIC_KOFI_URL=https://ko-fi.com/TU_PAGINA
NEXT_PUBLIC_ADS_ENABLED=true
NEXT_PUBLIC_ADSTERRA_ZONE=
NEXT_PUBLIC_ADSTERRA_SCRIPT=
NEXT_PUBLIC_GSC_VERIFICATION=
```
3. Deploy → actualiza SITE_URL si cambia → Redeploy.

### DNS dominio propio
| Type | Name | Value |
|------|------|--------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## B) GSC verificación DNS
1. search.google.com/search-console → Agregar propiedad
2. DNS TXT: `google-site-verification=XXXX` en tu panel DNS
3. Verificar → Sitemaps → `https://TU-DOMINIO/sitemap.xml`
4. Solicitar indización de la home

### Meta tag alternativa
Env: `NEXT_PUBLIC_GSC_VERIFICATION=token` (layout ya lo lee)

## C) Ko-fi HOY
1. ko-fi.com → página → NEXT_PUBLIC_KOFI_URL → Redeploy
2. Botón ya en home

## D) Adsterra
1. adsterra.com → site + Banner/Native zone
2. Zone + script en env → Redeploy (1–3 días aprobación)

## E) Ingresos mismo día
1. Ko-fi
2. Buy Me a Coffee / PayPal.me / Stripe Payment Link (NEXT_PUBLIC_TIP_URL)
3. Brave Rewards publishers.basicattentiontoken.org
4. Crypto tip opcional en footer
5. Adsterra cuando apruebe

## F) itch.io
Textos en docs/ITCH_PACKS.md — 2 packs free + backlink a tu dominio.

## G) Open Graph
/og.svg 1200x630 + twitter:summary_large_image ya en layout.
Valida: opengraph.xyz
