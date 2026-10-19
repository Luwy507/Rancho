import React from 'react';
import { IMAGES, COMPANY_INFO } from '../data/content.ts';
import { Compass, CheckCircle2, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38]">
              Nuestra Identidad y Valores
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
              Una Familia Comprometida con la Tierra y la Producción Nacional
            </h2>

            <p className="text-base text-stone-700 leading-relaxed">
              En <strong className="font-semibold text-stone-900">{COMPANY_INFO.name}</strong> entendemos la actividad agropecuaria como una vocación integral de vida. Guiados por sólidos principios familiares, trabajamos cada día en los campos de Panamá con la convicción de que el desarrollo del campo se logra uniendo la sabiduría de la experiencia con prácticas agronómicas y zootécnicas modernas.
            </p>

            <p className="text-base text-stone-700 leading-relaxed">
              Nuestra gestión integra la ganadería de cría y levante de ganado cebú Brahman, la producción tecnificada de arroz y módulos diversificados de granja. Cada animal que pasta en nuestros potreros y cada hectárea cultivada responde a una visión de respeto por los ciclos biológicos, cuidado de las fuentes de agua y mejora continua de los suelos.
            </p>

            {/* Core Values Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-stone-950 mb-2" />
                <h3 className="text-sm font-semibold text-stone-900 mb-1">Ética Familiar</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  Trato honesto, palabra de honor y transparencia comercial en cada animal o lote comercializado.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-stone-950 mb-2" />
                <h3 className="text-sm font-semibold text-stone-900 mb-1">Rigor Zootécnico</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  Selección rigurosa de reproductores, sanidad al día y nutrición balanceada sobre pasturas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <Compass className="w-5 h-5 text-stone-950 mb-2" />
                <h3 className="text-sm font-semibold text-stone-900 mb-1">Visión de Futuro</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  Crecimiento agroindustrial sustentable que genera empleo rural digno en Panamá.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-100">
              <img
                src={IMAGES.haciendaLandscape}
                alt="Portal de entrada y potreros de finca agropecuaria en Panamá"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="text-xs font-medium uppercase tracking-wider text-[#D8B458] mb-1">
                  Arraigo Agropecuario
                </div>
                <h3 className="text-lg font-serif font-bold leading-snug">
                  Entorno Rural Protegido en Panamá
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Potreros arbolados con cerca viva, corredores biológicos y fuentes de agua limpia para garantizar la tranquilidad y el desarrollo del ganado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
