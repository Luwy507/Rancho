import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/content.ts';
import { GalleryPhoto } from '../types.ts';
import { Maximize2, Camera } from 'lucide-react';

interface GallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Fotos' },
    { id: 'brahman', label: 'Ganado Brahman' },
    { id: 'arroz', label: 'Arrozales y Cosecha' },
    { id: 'granjas', label: 'Aves y Cerdos' },
    { id: 'paisajes', label: 'Paisajes y Potreros' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38] mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>Registro Fotográfico del Campo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
              Galería Agropecuaria de Panamá y Centroamérica
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Muestra fotográfica documental de las labores agropecuarias en el trópico: ganado cebú Brahman, pastoreo en potreros verdes, siembra y recolección de arroz y vida de granja. Haga clic en cualquier fotografía para ampliarla en alta definición.
            </p>
          </div>

          <div className="text-xs text-stone-500 bg-stone-50 border border-stone-200 p-3 rounded-xl max-w-xs">
            <span className="font-medium text-stone-800 block mb-0.5">Nota de Transparencia:</span>
            Fotografías documentales representativas de las prácticas agropecuarias y ecosistemas productivos de la región y nuestra empresa.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl overflow-x-auto mb-10 max-w-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors" />

                {/* Category Pill Tag Replacement -> Unboxed Badge */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium">
                  {photo.categoryLabel}
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-3 right-3 p-2 bg-white/90 text-stone-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <h3 className="text-sm font-semibold line-clamp-1">{photo.title}</h3>
                  <p className="text-[11px] text-stone-300 mt-0.5 line-clamp-1">
                    {photo.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
