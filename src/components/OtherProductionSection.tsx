import React from 'react';
import { IMAGES } from '../data/content.ts';
import { Egg, ShieldCheck, RefreshCw } from 'lucide-react';

export const OtherProductionSection: React.FC = () => {
  return (
    <section id="otras-producciones" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38] mb-2">
            Diversificación y Granja Sostenible
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
            Producción Avícola y Porcina: Sanidad, Nutrición y Bienestar
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Complementamos nuestra actividad ganadera y arrocera con módulos de producción de aves y cerdos orientados al abastecimiento local y regional, aplicando estrictos estándares de bioseguridad y bienestar animal.
          </p>
        </div>

        {/* 2 Main Production Units */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Image with authentic Panamanian rural poultry & swine */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-100">
              <img
                src={IMAGES.farmsPoultrySwine}
                alt="Producción avícola y porcina en finca familiar de Panamá"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D8B458] font-medium">
                    Módulos Productivos
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                    Cría Sana y Sin Estrés en Ambiente Abierto
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Avicultura Card */}
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-stone-950 text-white">
                  <Egg className="w-5 h-5 text-[#C29B38]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Avicultura: Gallinas Ponedoras y Pollos de Engorde
                  </h3>
                  <span className="text-xs text-stone-500">Alimentación natural y manejo ventilado</span>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Criamos gallinas ponedoras en galpones semiabiertos con acceso a forraje verde e iluminación natural. La recolección diaria asegura huevos de cáscara firme y alta frescura. En pollos de engorde, priorizamos dietas equilibradas de cereales sin promotores hormonales de crecimiento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                  <span>Huevos frescos clasificados por tamaño</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                  <span>Pollos con sanidad y crecimiento natural</span>
                </div>
              </div>
            </div>

            {/* Porcicultura Card */}
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-stone-950 text-white">
                  <ShieldCheck className="w-5 h-5 text-[#C29B38]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Porcicultura: Cría Higiénica y Lechones para Ceba
                  </h3>
                  <span className="text-xs text-stone-500">Sanidad preventiva y conversión eficiente</span>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                El módulo porcino se maneja con pisos de fácil drenaje y limpieza constante, agua fresca a libre disposición y un esquema estricto de desparasitación y vacunación. Producimos lechones vigorosos con excelente conformación magra para productores de engorde.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                  <span>Lechones destetados con buen peso inicial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                  <span>Instalaciones desinfectadas y ventiladas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future vision & circular economy */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D8B458] uppercase tracking-wider">
              <RefreshCw className="w-4 h-4" />
              <span>Economía Circular y Nuevas Líneas</span>
            </div>
            <h4 className="text-lg font-serif font-bold">Aprovechamiento Integral de los Subproductos</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              El estiércol y cama de gallina y cerdo se compostan técnicamente para fertilizar de manera orgánica nuestros potreros de pasto y parcelas agrícolas, cerrando el ciclo de nutrientes en la finca y reduciendo la dependencia de químicos externos.
            </p>
          </div>
          <a
            href="#contacto"
            className="px-5 py-2.5 text-xs font-semibold text-stone-900 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md"
          >
            Consultar Disponibilidad de Granja
          </a>
        </div>
      </div>
    </section>
  );
};
