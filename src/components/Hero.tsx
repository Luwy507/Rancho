import React from 'react';
import {
  ArrowDown,
  ShieldCheck,
  Award,
  Leaf,
  Users,
} from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/content.ts';

export type LogoPosition = 'left' | 'center' | 'right' | 'top-right';
export type LogoSize = 'normal' | 'large' | 'xl';

interface HeroProps {
  onOpenQuoteModal: () => void;
  customLogo?: string | null;
  logoPosition?: LogoPosition;
  onChangeLogoPosition?: (pos: LogoPosition) => void;
  logoSize?: LogoSize;
  onChangeLogoSize?: (size: LogoSize) => void;
  onOpenLogoManager?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  customLogo,
  logoPosition = 'left',
  logoSize = 'large',
}) => {
  const logoSrc = customLogo || IMAGES.officialLogo;

  // Height and max width classes by size
  const sizeClasses = {
    normal: 'h-20 sm:h-24 md:h-28 max-w-[220px] sm:max-w-[300px]',
    large: 'h-28 sm:h-36 md:h-44 max-w-[280px] sm:max-w-[420px]',
    xl: 'h-36 sm:h-48 md:h-56 max-w-[340px] sm:max-w-[500px]',
  }[logoSize];

  return (
    <section id="inicio" className="relative w-full bg-stone-900 text-white overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="relative w-full min-h-[680px] sm:min-h-[760px] lg:min-h-[820px] flex flex-col justify-between">
        <img
          src={IMAGES.hero}
          alt="Paisaje de potreros y ganado Brahman en Rancho Mogoruza, Panamá"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured contrast scrim: dark gradient from bottom and top to ensure >4.5:1 contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/40" />
        <div
          className={`absolute inset-0 ${
            logoPosition === 'center'
              ? 'bg-black/45'
              : 'bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent'
          }`}
        />

        {/* Position: 'top-right' badge (when active) */}
        {logoPosition === 'top-right' && logoSrc && (
          <div className="absolute top-16 right-4 sm:top-20 sm:right-12 z-10 pointer-events-none">
            <div className="p-4 sm:p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={logoSrc}
                alt="Logotipo Oficial Rancho Mogoruza"
                className={`${sizeClasses} w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)]`}
              />
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-10 flex-1 flex items-center py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* LAYOUT 1: CENTERED (Centrado en portada) */}
            {logoPosition === 'center' && (
              <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                {logoSrc && (
                  <div className="mb-6 flex justify-center">
                    <img
                      src={logoSrc}
                      alt="Logotipo Oficial Rancho Mogoruza"
                      className={`${sizeClasses} w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]`}
                    />
                  </div>
                )}

                <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B458] mb-3">
                  Empresa Agropecuaria Familiar · Panamá
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-5 [text-wrap:balance]">
                  Tradición del Campo y Excelencia Genética en la Tierra Panameña
                </h1>

                <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
                  En {COMPANY_INFO.name} criamos ganado Brahman rojo y gris adaptado al trópico, producimos cosechas de arroz de alta pureza y gestionamos producciones de granja con respeto zootécnico y compromiso familiar.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#en-venta"
                    className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg transition-colors shadow-lg shadow-black/30"
                  >
                    Ver Producción en Venta
                  </a>
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3.5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-lg transition-colors"
                  >
                    Contactar a la Finca
                  </button>
                </div>
              </div>
            )}

            {/* LAYOUT 2: TWO COLUMNS (Columna Derecha) */}
            {logoPosition === 'right' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B458] mb-3">
                    Empresa Agropecuaria Familiar · Panamá
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-5 [text-wrap:balance]">
                    Tradición del Campo y Excelencia Genética en la Tierra Panameña
                  </h1>

                  <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-xl">
                    En {COMPANY_INFO.name} criamos ganado Brahman rojo y gris adaptado al trópico, producimos cosechas de arroz de alta pureza y gestionamos producciones de granja con respeto zootécnico y compromiso familiar.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#en-venta"
                      className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg transition-colors shadow-lg shadow-black/30"
                    >
                      Ver Producción en Venta
                    </a>
                    <button
                      onClick={onOpenQuoteModal}
                      className="px-6 py-3.5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-lg transition-colors"
                    >
                      Contactar a la Finca
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  {logoSrc && (
                    <div className="p-6 sm:p-8 bg-black/50 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center text-center">
                      <img
                        src={logoSrc}
                        alt="Logotipo Oficial Rancho Mogoruza"
                        className={`${sizeClasses} w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] mb-3`}
                      />
                      <span className="text-xs uppercase tracking-widest text-[#D8B458] font-medium">
                        Marca Registrada Oficial
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LAYOUT 3: LEFT (Default original: Logo arriba a la izquierda) & TOP-RIGHT FALLBACK */}
            {(logoPosition === 'left' || logoPosition === 'top-right') && (
              <div className="max-w-3xl">
                {/* Logotipo Oficial en Grande (Visible when 'left') */}
                {logoPosition === 'left' && logoSrc && (
                  <div className="mb-6">
                    <img
                      src={logoSrc}
                      alt="Logotipo Oficial Rancho Mogoruza"
                      className={`${sizeClasses} w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]`}
                    />
                  </div>
                )}

                {/* Natural editorial kicker */}
                <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B458] mb-3">
                  Empresa Agropecuaria Familiar · Panamá
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-5 [text-wrap:balance]">
                  Tradición del Campo y Excelencia Genética en la Tierra Panameña
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
                  En {COMPANY_INFO.name} criamos ganado Brahman rojo y gris adaptado al trópico, producimos cosechas de arroz de alta pureza y gestionamos producciones de granja con respeto zootécnico y compromiso familiar.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#en-venta"
                    className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg transition-colors shadow-lg shadow-black/30"
                  >
                    Ver Producción en Venta
                  </a>
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3.5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-lg transition-colors"
                  >
                    Contactar a la Finca
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator link */}
        <div className="relative z-10 pb-6 pr-6 flex justify-end">
          <a
            href="#nosotros"
            className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-300 hover:text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 transition-colors"
          >
            <span>Conocer nuestra historia</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C29B38]" />
          </a>
        </div>
      </div>

      {/* 4-Item Trust & Value Strip (Full-width row directly below hero) */}
      <div className="bg-stone-950 border-y border-stone-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-stone-200">
            <div className="flex items-start gap-3.5">
              <Award className="w-6 h-6 text-[#C29B38] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Genética Brahman de Alta Rusticidad</h4>
                <p className="text-xs text-stone-400 mt-0.5">Líneas rojas y grises seleccionadas para pasturas tropicales.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Leaf className="w-6 h-6 text-[#C29B38] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Cosecha de Arroz de Calidad</h4>
                <p className="text-xs text-stone-400 mt-0.5">Cultivo tecnificado con maquinaria moderna y pureza de grano.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-[#C29B38] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Sanidad y Bienestar Animal</h4>
                <p className="text-xs text-stone-400 mt-0.5">Control zoosanitario riguroso en bovinos, aves y cerdos.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Users className="w-6 h-6 text-[#C29B38] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Tradición Familiar Panameña</h4>
                <p className="text-xs text-stone-400 mt-0.5">Atención directa, transparencia comercial y seriedad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
