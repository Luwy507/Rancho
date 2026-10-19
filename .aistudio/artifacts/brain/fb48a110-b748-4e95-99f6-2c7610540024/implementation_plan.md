# Sitio Web Corporativo — Rancho Mogoruza (Panamá)

Sitio web empresarial para **Rancho Mogoruza**, empresa agropecuaria familiar en Panamá. Presenta una imagen corporativa sólida, rural y moderna, con catálogo de producción y ganado Brahman en venta, procesos agropecuarios (ganadería, arrozales, avicultura, porcicultura), galería fotográfica y canales directos de contacto y cotización.

---

## Decisiones Críticas y Aprobación del Usuario

> [!IMPORTANT]
> **Nombre de Empresa Confirmado**: *Rancho Mogoruza* (confirmado por el usuario; canal de correo de referencia: `mogoruza11@gmail.com`).
> **Gestión del Logotipo**: En cumplimiento estricto con las instrucciones del usuario, no se inventará un logo ficticio ni caricaturesco. La cabecera contará con un espacio reservado exclusivo y estilizado para el logotipo original del Rancho Mogoruza, con soporte inmediato para subir o vincular el archivo gráfico original en alta definición.
> **Honestidad en Producción y Existencias**: La sección *Nuestra producción en venta* presentará fichas descriptivas claras para solicitar disponibilidad y cotización formal de lotes (ej. toretes y novillas Brahman registrados, arroz en cáscara/grano, aves y lechones), sin inventar precios falsos ni inventarios engañosos.

- **Nombre Oficial**: Rancho Mogoruza
- **Paleta de Colores**: Verde bosque profundo (`#173420`), blanco puro, arenas/tierra suave (`#F8F7F4`, `#E8E3D9`, `#8A6840`) y acentos dorados discretos (`#C29B38`).
- **Fotografía de Producción**: Integración de imágenes fotográficas reales y de alta resolución para Brahman rojo y gris, pastizales en Panamá/Centroamérica, arrozales y cosechadoras, avicultura y porcicultura.

---

## 1. Visión General y Concepto

- **Qué es**: Portal web empresarial de presencia agropecuaria nacional e internacional para Rancho Mogoruza, proyectando solidez financiera, excelencia genética y tradición familiar.
- **Audiencia Objetivo**: Productores ganaderos, asociaciones agropecuarias de Panamá y Centroamérica, distribuidores de arroz y granos, compradores mayoristas y familias interesadas en productos de finca de calidad garantizada.
- **Propuesta de Valor**: Tradición familiar combinada con tecnificación moderna en genética bovina Brahman, siembra responsable y bienestar animal en Panamá.

---

## 2. Experiencia de Usuario y Diseño Visual

### Flujo de Navegación y Secciones
1. **Cabecera Institucional (Top Bar Contract)**:
   - Wordmark tipográfico de alta jerarquía "Rancho Mogoruza" con indicador de espacio para logo oficial.
   - Enlaces directos de navegación fluida: *Inicio*, *Nosotros*, *Ganadería*, *Agricultura*, *Producciones*, *En Venta*, *Galería*, *Contacto*.
   - Botón de acción principal: *"Cotizar / WhatsApp"*.
2. **Hero Section (Portada Principal)**:
   - Fotografía panorámica de portada de campos y ganado con iluminación natural.
   - Titular de impacto: excelencia genética y producción agropecuaria con arraigo panameño.
   - Indicadores de confianza: Tradición familiar, manejo genético responsable y producción sustentable.
3. **Nosotros**:
   - Historia y valores familiares, compromiso con la tierra panameña y visión de futuro agroindustrial.
4. **Ganadería Bovinos (Brahman Rojo y Gris)**:
   - Enfoque en rusticidad, adaptabilidad al trópico panameño, selección genética, nutrición en pasturas y sanidad animal.
5. **Producción Agrícola (Arroz y Cultivos)**:
   - Tecnificación de arrozales, manejo de agua, cosecha mecanizada y rendimiento de grano.
6. **Otras Producciones (Aves y Porcicultura)**:
   - Avicultura (ponedoras y pollos) y producción porcina con riguroso bienestar animal e inocuidad.
7. **Nuestra Producción en Venta**:
   - Catálogo interactivo con filtros por categoría (*Ganado Brahman*, *Cosecha de Arroz*, *Aves*, *Porcicultura*).
   - Cada tarjeta especifica raza/categoría, características técnicas y botón *"Consultar Disponibilidad y Precios"* que enlaza con mensaje personalizado a WhatsApp o formulario.
8. **Galería Fotográfica Agropecuaria**:
   - Cuadrícula con visor modal de fotos reales en alta resolución clasificadas por actividad.
9. **Contacto y Cotizaciones**:
   - Formulario de solicitud formal (nombre, teléfono/WhatsApp, producto de interés, mensaje).
   - Datos directos de contacto (correo corporativo `mogoruza11@gmail.com`, enlace a WhatsApp directo, ubicación en Panamá).

---

## 3. Decisiones de Producto y Diseño

- **Tipografía**: Combinación de `Playfair Display` (elegancia señorial para encabezados corporativos) con `Plus Jakarta Sans` para lectura óptima en pantallas y `font-mono tabular-nums` para especificaciones técnicas.
- **Cero Pills y Anti-Slop**: Se evitarán etiquetas de tipo píldora estática, bordes gruesos de colores artificiales y contadores falsos de porcentaje. El diseño transmitirá sobriedad corporativa europea y latinoamericana de alta gama.
- **Logotipo Adaptable**: Ranura de logotipo en la barra de navegación con tamaño óptimo (sin distorsión de relación de aspecto) que permite al usuario previsualizar su imagen o cargar su logotipo oficial al instante.

---

## 4. Arquitectura Técnica y Datos

```
┌──────────────────────────────────────────────────────────────┐
│                    Rancho Mogoruza Web App                   │
├──────────────────────────────────────────────────────────────┤
│  Top Navigation (Brand Wordmark + Logo Slot + Nav + Action)  │
├──────────────────────────────────────────────────────────────┤
│  1. Hero Banner (Impact Photo + Mission Statement)           │
│  2. Trust & Pillars Bar (Valores & Compromiso Familiar)      │
│  3. Nosotros (Historia, Tradición y Futuro)                  │
│  4. Ganadería Brahman (Genética Rojo y Gris + Manejo)        │
│  5. Producción Agrícola (Arrozal y Cosecha)                  │
│  6. Producción Diversificada (Avícola y Porcina)             │
│  7. Catálogo en Venta (Filtros + Fichas + Contacto Directo)   │
│  8. Galería Fotográfica Ampliable (Modal Lightbox)           │
│  9. Contacto & Ubicación (Formulario + WhatsApp Directo)     │
│  10. Footer Institucional (Datos, Derechos & Enlaces)        │
└──────────────────────────────────────────────────────────────┘
```

- **Manejo de Estado**: Filtros de catálogo dinámico, modal de visualización de fotos de galería, selector de cargador de logotipo personalizado y generador de enlaces de WhatsApp con texto preconfigurado según el producto consultado.
- **Fotografía**: Imágenes fotográficas reales de alta fidelidad optimizadas con fallbacks visuales de contingencia.
