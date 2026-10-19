import React, { useState } from 'react';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/content.ts';
import { MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

interface CatalogSectionProps {
  onSelectProductForQuote: (productName: string) => void;
  whatsAppPhone: string;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectProductForQuote,
  whatsAppPhone,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toda la Producción' },
    { id: 'brahman', label: 'Ganado Brahman' },
    { id: 'arroz', label: 'Cosecha de Arroz' },
    { id: 'aves', label: 'Avicultura' },
    { id: 'cerdos', label: 'Porcicultura' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((item) => item.category === activeCategory);

  const buildWhatsAppLink = (productName: string) => {
    const cleanNumber = whatsAppPhone.replace(/\D/g, '');
    const text = `Hola Rancho Mogoruza, me comunico desde su sitio web. Me interesa consultar disponibilidad y detalles técnicos sobre: ${productName}.`;
    return `https://wa.me/${cleanNumber || COMPANY_INFO.defaultWhatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="en-venta" className="py-20 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38] mb-2">
              Disponibilidad Comercial
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
              Nuestra Producción en Venta
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Consulte los lotes de animales, cosechas agrícolas y productos de granja que manejamos en la finca. No publicamos tarifas fijas automáticas porque cada lote se evalúa por zootecnia, peso o ciclo de zafra con cotización honesta y trato directo.
            </p>
          </div>

          <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl max-w-sm text-xs text-amber-900 leading-normal">
            <span className="font-semibold block text-stone-900 mb-0.5">Atención Directa:</span>
            Para inspección en potrero de animales o cotización de cosechas por quintal/tonelada, comuníquese con nosotros por WhatsApp o vía formulario.
          </div>
        </div>

        {/* Interactive Filter Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/70 rounded-xl overflow-x-auto mb-10 max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-semibold">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata separator */}
                  <div className="text-xs text-stone-500 mb-2 flex items-center gap-2">
                    <span>{product.specifications.razaTipo}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.specifications.ubicacion}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Specifications Table */}
                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-xs space-y-2 mb-4">
                    <div className="flex justify-between items-center text-stone-600">
                      <span className="text-stone-500">Estado / Etapa:</span>
                      <span className="font-medium text-stone-800">{product.specifications.edadEstado}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600">
                      <span className="text-stone-500">Manejo:</span>
                      <span className="font-medium text-stone-800 text-right truncate max-w-[160px]">{product.specifications.manejo}</span>
                    </div>
                  </div>

                  {/* Availability Note */}
                  <div className="flex items-start gap-1.5 text-[11px] text-stone-500 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-900 shrink-0 mt-0.5" />
                    <span>{product.availabilityNote}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-2 space-y-2">
                <a
                  href={buildWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#C29B38]" />
                  <span>Consultar por WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectProductForQuote(product.name)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  <span>Solicitar Cotización por Formulario</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
