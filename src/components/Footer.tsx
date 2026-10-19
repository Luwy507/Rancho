import React from 'react';
import { COMPANY_INFO, IMAGES } from '../data/content.ts';
import { Mail, MapPin, Upload } from 'lucide-react';

interface FooterProps {
  onOpenLogoManager: () => void;
  customLogo: string | null;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogoManager, customLogo }) => {
  return (
    <footer className="bg-black text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={customLogo || IMAGES.officialLogo}
                alt="Logotipo Oficial Rancho Mogoruza"
                className="h-11 w-auto max-w-[140px] object-contain"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Empresa agropecuaria familiar en Panamá. Dedicada a la cría y selección de ganado Brahman rojo y gris, cultivo tecnificado de arrozales y producciones de granja con respeto zootécnico y ambiental.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>República de Panamá</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C29B38]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C29B38]">
              Secciones del Sitio
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros y Valores</a>
              </li>
              <li>
                <a href="#ganaderia" className="hover:text-white transition-colors">Ganadería Brahman</a>
              </li>
              <li>
                <a href="#agricultura" className="hover:text-white transition-colors">Producción Arrocera</a>
              </li>
              <li>
                <a href="#otras-producciones" className="hover:text-white transition-colors">Aves y Porcicultura</a>
              </li>
              <li>
                <a href="#en-venta" className="hover:text-white transition-colors">Producción en Venta</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galería Fotográfica</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación y Cómo Llegar</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a>
              </li>
            </ul>
          </div>

          {/* Administration & Official Logo Slot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C29B38]">
              Identidad Corporativa
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              El espacio del logotipo oficial en la cabecera está disponible para vincular o actualizar el archivo gráfico de Rancho Mogoruza.
            </p>
            <div>
              <button
                onClick={onOpenLogoManager}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors"
              >
                <Upload className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>{customLogo ? 'Cambiar Logotipo Oficial' : 'Cargar mi Logotipo Oficial'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados. Panamá.</p>
          <p className="text-[11px] text-stone-500">
            Sitio Web Empresarial Oficial · Producción Agropecuaria Sostenible
          </p>
        </div>
      </div>
    </footer>
  );
};
