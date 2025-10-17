# Guía de Cambios y Cómo Funciona (Dark Mode, Menús, HMR)

Este documento resume todo lo que se implementó en el proyecto para mejorar la experiencia visual (modo oscuro), la usabilidad del menú y la fiabilidad del entorno de desarrollo.

---

## Qué se implementó

1) Modo oscuro completo con toggle
- Componente nuevo: `src/common/ThemeToggle.tsx`
  - Alterna entre `light` y `dark`.
  - Persiste la preferencia en `localStorage` bajo la clave `theme`.
  - Aplica el atributo `data-theme="dark"` en `<html>` y `<body>` para activar los estilos oscuros.
- Inicialización temprana del tema: `src/main.tsx`
  - Antes de renderizar la app, se lee el valor guardado y/o `prefers-color-scheme` del sistema y se fija `data-theme` para evitar el parpadeo (FOUC).
- Overrides CSS centralizados: `src/styles/index.css`
  - Bajo `html[data-theme="dark"], body[data-theme="dark"]` se definen tokens de color y superficies:
    - `--white-bg`: fondo base (oscuro)
    - `--heading-color`: color de texto principal (claro)
    - `--light-bg`: superficies (tarjetas, dropdowns, offcanvas)
  - Se ajustan fondos de secciones, tarjetas, offcanvas, sidebar, etc., para respetar el modo oscuro.
  - Se corrigen submenús que quedaban blancos por CSS de terceros:
    - `.main-menu ul.sub-menu` y sus anidados → `background-color: var(--light-bg) !important`.
    - `.site-menu-main .sub-menu` (mega/variantes) → fondo oscuro.
    - `.is-dropdown-submenu` (patrón de Foundation) → fondo oscuro.
- Ubicación del toggle: integrado en los headers (`HeaderOne`, `HeaderTwo`, `HeaderThree`). Puedes reusarlo en cualquier otra parte importando y renderizando `<ThemeToggle />`.

2) Solo mostrar la flecha en items con dropdown
- Archivo: `src/layouts/headers/HeaderTwo.tsx`
- El `<li>` superior ahora añade la clase `menu-item-has-children` únicamente cuando `item.has_dropdown` es verdadero. De esta forma, la flecha (inyectada por el CSS del tema) solo aparece en elementos que tienen submenú.

3) Evitar recorte de descendentes tipográficos
- Archivo: `src/styles/index.css`
- Ajuste específico para títulos donde letras como la “g” podían cortarse:
  - `.WION_text_invert_2 > .wiontitle { line-height: 1.12em; padding-bottom: 0.05em; }`
- Este pequeño margen previene el clipping, en especial cuando se usa `background-clip: text`.

4) HMR más confiable (Windows, carpetas sincronizadas)
- Archivo: `vite.config.ts`
- Se activó el watch por polling para mejorar la detección de cambios en entornos con OneDrive/FS de red:
  - `server.watch.usePolling: true`, `interval: 300`, y `hmr.overlay: true`.

---

## Cómo funciona el modo oscuro

- El estado del tema se guarda en `localStorage` con la clave `theme`.
- Si no hay preferencia guardada, se usa `prefers-color-scheme` del SO.
- Cuando el tema es `dark`, se añade `data-theme="dark"` a `<html>` y `<body>`; las reglas en `index.css` bajo ese selector aplican colores oscuros.

Código relevante:
- `src/common/ThemeToggle.tsx`: control UI para alternar y persistir el tema.
- `src/main.tsx`: IIFE que fija el tema lo antes posible para evitar FOUC.
- `src/styles/index.css`: variables y overrides de modo oscuro.

---

## Archivos tocados

- `src/styles/index.css` — overrides de dark mode, corrección de submenús en dark y fix tipográfico.
- `src/common/ThemeToggle.tsx` — nuevo componente del interruptor de tema.
- `src/main.tsx` — inicialización temprana de tema + import de estilos.
- `src/layouts/headers/HeaderOne.tsx`, `HeaderTwo.tsx`, `HeaderThree.tsx` — integración del toggle en el header.
- `vite.config.ts` — ajustes de watch/HMR por polling en el dev server.

---

## Cómo probar

1) Ejecutar en desarrollo:

```bash
npm run dev
```

- Se abre en el puerto 3000 (puedes cambiarlo en `vite.config.ts`).
- El watcher por polling ya está habilitado para mayor fiabilidad.

2) Verificar visualmente:
- Menú: flechas solo en items con dropdown.
- Dark mode: header, secciones, tarjetas, offcanvas, sidebar y submenús con fondo oscuro y texto legible.
- Tipografía: títulos grandes sin recortes de descendentes.

3) Forzar/alternar tema:
- Usa el toggle del header.
- Remueve la clave `theme` del `localStorage` para que el sitio respete la preferencia del sistema.

---

## Personalización rápida

- Ajusta los tokens bajo `data-theme="dark"` en `src/styles/index.css`:
  - `--white-bg` (fondo base), `--heading-color` (texto principal), `--light-bg` (superficies).
- Si tienes logo claro/oscuro, puedes alternarlo por CSS con `data-theme` o por lógica en el Header.

Ejemplo CSS para alternar logos por tema:

```css
html[data-theme="dark"] .logo-light { display: none; }
html[data-theme="dark"] .logo-dark { display: inline; }
html:not([data-theme="dark"]) .logo-light { display: inline; }
html:not([data-theme="dark"]) .logo-dark { display: none; }
```

Opcional (hover en submenús en dark):

```css
html[data-theme="dark"] .main-menu ul.sub-menu li a:hover {
  background-color: rgba(255,255,255,0.04);
}
```

---

## Notas finales

Si detectas alguna sección con contraste insuficiente (sliders, modales, etc.), dime cuál y añadimos un override específico. También puedo automatizar el intercambio de logos para modo oscuro si me facilitas los recursos (por ejemplo `logo-dark.svg`).
