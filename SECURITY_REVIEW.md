# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/wisbar`. Rama: `security/review-2026-10-24`.

## Correcciones

- Upgrade vendored jQuery 3.3.1 to 3.7.1, fixing CVE-2019-11358 and CVE-2020-11022/11023

## Auditoría npm después de los cambios

Sin manifiesto npm aplicable; la revisión de bibliotecas vendorizadas se describe en las correcciones.

## Verificación

- Chromium: page loads, jQuery prototype-pollution regression; correctos.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
