# SolucionesMZ - Sitio Web Corporativo

## 📋 Descripción

Sitio web profesional para **SolucionesMZ**, empresa especializada en servicios de gasfitería y soluciones hidráulicas en Santiago, Chile. El sitio presenta una interfaz moderna, responsiva y completamente optimizada para SEO, conversión de clientes y accesibilidad web (WCAG).

## 🚀 Características Principales

### ✨ Diseño y UX
- **Diseño responsivo** - Adaptado para desktop, tablet y móvil con breakpoints optimizados
- **Interfaz moderna** - Colores corporativos profesionales con gradientes
- **Navegación intuitiva** - Menú fijo con scroll suave y skip-link para accesibilidad
- **Barra de desplazamiento personalizada** - Integrada con los colores de marca
- **Botón de contacto destacado** - En el navbar para mayor conversión
- **Imágenes de fondo responsivas** - heroPC.jpg para desktop, heroMOVIL.jpg para móvil
- **Logos adaptativos** - logonav.png para PC, logonavmovil.png para móvil
- **Footer optimizado** - Logo de 150px con bordes redondeados y diseño responsivo

### 🎯 Secciones del Sitio

#### 1. **Hero Section (Inicio)**
- Mensaje principal optimizado para SEO
- Botones de acción (Servicios y Contacto) con enlaces internos
- **Flecha de scroll animada** - Navegación suave a la siguiente sección
- **Fondos responsivos**: heroPC.jpg (desktop) y heroMOVIL.jpg (móvil)
- Gradiente overlay para mejor legibilidad
- Estructura semántica con etiquetas `<main>` y `<section>`

#### 2. **Servicios**
- **Grid responsivo**: 2 columnas en desktop, 1 en móvil
- **4 servicios principales** con descripciones optimizadas para SEO:
  - Detección de Filtraciones (con tecnología avanzada)
  - Reparación de Filtraciones (soluciones duraderas)
  - Destape de Alcantarillado (equipos especializados)
  - Calefont y Reparaciones (servicio integral)
- **Servicios adicionales** organizados por categorías:
  - Construcción y Obras Menores
  - Agua y Drenajes
  - Electricidad y Seguridad
  - Pintura y Revestimientos
  - Instalaciones Varias
- **Botones de WhatsApp** seguros con `rel="noopener noreferrer"`
- Iconos de Font Awesome con significado semántico

#### 3. **Nosotros**
- Información corporativa con 6 años de experiencia
- Valores y compromiso con la calidad
- Testimonios de clientes reales
- Estadísticas de satisfacción
- Diseño responsivo optimizado

#### 4. **Contacto**
- **Información de contacto completa**:
  - Teléfonos: +56 9 3679 0452, +56 9 3039 9727
  - Email: gestion@solucionesmz.cl
  - Dirección: Coquimbo Norte 2003, Maipú, RM
  - Horario: Lunes a Domingo 9:00-20:00 hrs
- **Enlaces seguros** con `rel="noopener noreferrer"`
- **Métodos de pago**: Efectivo, Transferencia, Tarjetas
- **Cobertura**: Toda la Región Metropolitana
- Diseño responsivo con call-to-action destacados

#### 5. **Footer**
- **Logo responsivo**: 150px (desktop), 120px (tablet), 100px (móvil)
- **Bordes redondeados**: 15px (desktop), 12px (tablet), 10px (móvil)
- **Información completa**:
  - Datos de contacto
  - Enlaces a servicios
  - Métodos de pago
  - Garantía y certificaciones
- **Badges de confianza**: Garantía, 24/7, RM
- Diseño completamente responsivo

### 📱 Funcionalidades Interactivas

#### WhatsApp Integration
- **Botón flotante**: Animado con efecto de atención y tooltip
- **Botones de servicio**: Mensajes personalizados por tipo de servicio
- **Contacto directo**: Enlaces seguros en sección de contacto
- **Números de teléfono**: Click-to-call en móviles
- **Enlaces seguros**: Todos incluyen `rel="noopener noreferrer"`

#### Navegación
- **Scroll suave** entre secciones con `scroll-behavior: smooth`
- **Skip-link**: Para accesibilidad (saltar al contenido principal)
- **Menú hamburguesa** responsivo en móvil
- **Navbar adaptativo**: Logos diferentes para PC y móvil
- **Navbar fijo** con altura ajustada por dispositivo

#### Animaciones y Efectos
- **Hover effects** en botones y enlaces
- **Transiciones suaves** (0.3s ease) con respeto a `prefers-reduced-motion`
- **Transformaciones** en elementos interactivos
- **Gradientes dinámicos** en hover
- **Animaciones de entrada**: fadeInUp para elementos
- **Efectos de flotación**: Para botón de WhatsApp

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica con elementos `<main>`, `<section>`, `<header>`, `<footer>`
- **CSS3** - Estilos modernos con Flexbox, Grid y variables CSS
- **JavaScript** - Interactividad, navegación y efectos
- **Font Awesome 6.0.0** - Iconografía completa
- **Google Fonts (Inter)** - Tipografía profesional con preconnect
- **JSON-LD Schema.org** - Datos estructurados para SEO
- **PWA Ready** - Web App Manifest configurado

## 📁 Estructura de Archivos

```
web/
├── index.html              # Página principal con SEO completo
├── styles.css              # Estilos CSS con mejoras de accesibilidad
├── script.js               # JavaScript para interactividad
├── robots.txt              # Configuración para bots de búsqueda
├── sitemap.xml             # Mapa del sitio para SEO
├── .htaccess               # Configuración del servidor (seguridad, rendimiento, SEO)
├── sello-servicio.png      # Sello de calidad
├── assets/
│   └── img/
│       ├── favicon_io/     # Favicons completos para todos los dispositivos
│       │   ├── favicon.ico
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   ├── apple-touch-icon.png
│       │   ├── android-chrome-192x192.png
│       │   ├── android-chrome-512x512.png
│       │   └── site.webmanifest
│       ├── heroPC.jpg      # Imagen de fondo para desktop
│       ├── heroMOVIL.jpg   # Imagen de fondo para móvil
│       ├── heropic.jpg     # Imagen del hero
│       ├── logo.jpg        # Logo principal
│       ├── logonav.png     # Logo del navbar (PC)
│       ├── logonavmovil.png # Logo del navbar (móvil)
│       └── us.jpg          # Imagen del equipo
├── informacion.md          # Información adicional
├── adicional.md            # Documentación adicional
├── SEO2.md                 # Guía de optimización SEO
└── README.md               # Este archivo
```

## 🎨 Paleta de Colores

### Variables CSS Principales
- **Primary Color**: `#2C5282` (Azul corporativo)
- **Secondary Color**: `#4A90E2` (Azul secundario)
- **Accent Color**: `#E53E3E` (Rojo de acento)
- **Text Dark**: `#2D3748`
- **Text Light**: `#718096`
- **Background Light**: `#F7FAFC`
- **Background White**: `#FFFFFF`
- **Border Color**: `#E2E8F0`

### Colores de WhatsApp
- **Verde Principal**: `#25d366` (WhatsApp green)
- **Verde Secundario**: `#2dd4bf` (Teal)
- **Verde Hover**: `#1ea97c`
- **Verde Oscuro**: `#128C7E`

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: ≤ 768px
- **Small Mobile**: ≤ 480px

### Adaptaciones por Dispositivo

#### Desktop (> 1024px)
- **Navbar**: Logo 190px, altura 170px
- **Hero**: Fondo heroPC.jpg, padding 220px
- **Footer Logo**: 150px con border-radius 15px
- **Grid**: 2-4 columnas según sección

#### Tablet (768px - 1024px)
- **Footer Logo**: 120px con border-radius 12px
- **Navbar**: Altura ajustada
- **Grid**: 2 columnas

#### Mobile (≤ 768px)
- **Navbar**: Logo móvil 120px, altura 140px
- **Hero**: Fondo heroMOVIL.jpg, padding 180px
- **Footer Logo**: 100px con border-radius 10px
- **Grid**: 1 columna
- **Menú hamburguesa**: Activado
- **Texto centrado**: En secciones clave

#### Small Mobile (≤ 480px)
- **Elementos redimensionados**: Para pantallas muy pequeñas
- **Botones**: Tamaño optimizado
- **Espaciado**: Reducido apropiadamente

## 🚀 Instalación y Uso

### Requisitos
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Conexión a internet** (para fuentes, iconos y recursos externos)
- **Servidor web** (recomendado para .htaccess y funcionalidades completas)

### Instalación Local
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio está funcionando

### Instalación en Servidor
1. Sube todos los archivos al directorio raíz del servidor
2. Asegúrate de que el servidor soporte `.htaccess` (Apache)
3. Verifica que los favicons estén accesibles
4. Configura HTTPS para máximo SEO
5. Actualiza las URLs en `sitemap.xml` y `robots.txt`

### Personalización

#### Cambiar Información de Contacto
1. **HTML**: Actualiza números, emails y direcciones en `index.html`
2. **JSON-LD**: Modifica los datos estructurados en el `<head>`
3. **WhatsApp**: Cambia los números en todos los enlaces

#### Modificar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2C5282;
    --secondary-color: #4A90E2;
    --accent-color: #E53E3E;
}
```

#### Actualizar SEO
1. **Meta tags**: Modifica título, descripción y keywords en `index.html`
2. **Sitemap**: Actualiza URLs en `sitemap.xml`
3. **Robots**: Ajusta directivas en `robots.txt`
4. **Schema**: Actualiza datos estructurados JSON-LD

#### Cambiar Imágenes
1. **Favicons**: Reemplaza archivos en `/assets/img/favicon_io/`
2. **Logos**: Actualiza `logonav.png` y `logonavmovil.png`
3. **Fondos**: Cambia `heroPC.jpg` y `heroMOVIL.jpg`
4. **Optimización**: Mantén formatos y tamaños apropiados

## 🔧 Características Técnicas

### 🚀 Performance
- **Imágenes optimizadas**: JPG para fondos, PNG para logos
- **Compresión GZIP**: Activada en `.htaccess`
- **Caché del navegador**: Configurado para recursos estáticos
- **Preconnect**: Para recursos externos (fonts, CDNs)
- **CSS eficiente**: Variables CSS y estilos optimizados
- **JavaScript ligero**: Funcionalidad esencial sin librerías pesadas
- **Carga rápida**: Recursos externos mínimos y optimizados

### 🔍 SEO Completo
- **Meta tags completos**: Título, descripción, keywords, author
- **Open Graph**: Para redes sociales (Facebook, LinkedIn)
- **Twitter Cards**: Para compartir en Twitter
- **JSON-LD Schema**: Datos estructurados para negocio local
- **Canonical URL**: Para evitar contenido duplicado
- **Sitemap XML**: Mapa del sitio para buscadores
- **Robots.txt**: Configuración para bots de búsqueda
- **Favicons completos**: Para todos los dispositivos y navegadores
- **Web App Manifest**: Configuración PWA
- **Geolocalización**: Meta tags para SEO local (Santiago, Chile)
- **Estructura semántica**: HTML5 con elementos apropiados
- **Alt text**: En todas las imágenes
- **Títulos jerárquicos**: H1, H2, H3 correctamente estructurados
- **Enlaces internos**: Navegación optimizada
- **URLs amigables**: Sin extensiones .html (configurado en .htaccess)

### ♿ Accesibilidad (WCAG)
- **Skip-link**: Enlace para saltar al contenido principal
- **Contraste adecuado**: Cumple estándares WCAG
- **Navegación por teclado**: Completamente funcional
- **Focus visible**: Indicadores claros de foco
- **Elementos semánticos**: Estructura HTML apropiada
- **Alt text descriptivo**: En todas las imágenes
- **Responsive design**: Para todos los dispositivos
- **Prefers-reduced-motion**: Respeta preferencias de animación
- **Enlaces seguros**: `rel="noopener noreferrer"` en enlaces externos
- **Estructura main**: Contenido principal claramente definido

### 🔒 Seguridad
- **Headers de seguridad**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Protección de archivos**: .htaccess, logs, backups bloqueados
- **Enlaces seguros**: `rel="noopener noreferrer"` en todos los enlaces externos
- **HTTPS forzado**: Redirección automática en .htaccess
- **Referrer Policy**: Configurado para privacidad
- **Permissions Policy**: Restricciones de APIs del navegador

### 📊 Analytics y Monitoreo
- **Estructura preparada**: Para Google Analytics
- **Schema.org**: Para rich snippets en resultados de búsqueda
- **Sitemap**: Para monitoreo en Google Search Console
- **Meta tags**: Para seguimiento en redes sociales

## 📈 Optimizaciones SEO Implementadas

### ✅ Archivos SEO Creados
- **robots.txt**: Configuración completa para bots de búsqueda
- **.htaccess**: Redirecciones, seguridad, compresión y caché
- **sitemap.xml**: Mapa del sitio con estructura XML correcta
- **site.webmanifest**: Configuración PWA actualizada

### ✅ Meta Tags Implementados
- **SEO básico**: title, description, keywords, author, robots, canonical
- **SEO local**: geo.region, geo.placename, geo.position, ICBM, contact, coverage
- **Open Graph**: title, description, image, url, type, site_name, locale
- **Twitter Cards**: card, title, description, image
- **Favicons**: Completos para todos los dispositivos

### ✅ Datos Estructurados
- **JSON-LD Schema.org**: LocalBusiness con información completa
- **Información de contacto**: Teléfonos, email, dirección
- **Geolocalización**: Coordenadas de Santiago, Chile
- **Horarios**: Lunes a Domingo 9:00-20:00
- **Área de servicio**: Región Metropolitana

### ✅ Mejoras de Accesibilidad
- **Skip-link**: Para navegación por teclado
- **Estructura semántica**: main, section, header, footer
- **Enlaces seguros**: rel="noopener noreferrer"
- **Focus visible**: Indicadores de foco mejorados
- **Reduced motion**: Respeto por preferencias del usuario

## 🎯 Resultados Esperados

### SEO
- **Mejor posicionamiento** en búsquedas locales de gasfitería en Santiago
- **Rich snippets** en resultados de Google
- **Indexación completa** de todas las páginas
- **Velocidad de carga** optimizada

### UX/UI
- **Navegación mejorada** con skip-link y estructura semántica
- **Responsive design** perfecto en todos los dispositivos
- **Accesibilidad completa** para usuarios con discapacidades
- **Performance optimizado** con caché y compresión

## 📞 Contacto y Soporte

**SolucionesMZ**
- 📱 WhatsApp: +56 9 3679 0452 / +56 9 3039 9727
- 📧 Email: gestion@solucionesmz.cl
- 📍 Dirección: Coquimbo Norte 2003, Maipú, RM
- 🕒 Horario: Lunes a Domingo 9:00-20:00 hrs

Para modificaciones técnicas o soporte, revisa la documentación en el código o contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto es propiedad de **SolucionesMZ**. Todos los derechos reservados.

---

**Desarrollado con ❤️ para SolucionesMZ**  
**Optimizado para SEO, Accesibilidad y Performance**

*Última actualización: Diciembre 2024*