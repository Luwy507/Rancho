import React from 'react';
import { IMAGES } from '../data/content.ts';
import { Droplets, Tractor, Sparkles, CheckCircle2 } from 'lucide-react';

export const AgricultureSection: React.FC = () => {
  return (
    <section id="agricultura" className="py-20 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual assets showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-200">
              <img
                src={IMAGES.riceHarvest}
                alt="Cosecha mecanizada en arrozales de Panamá con máquina combinada"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-xs">
                Cosecha tecnificada en Panamá
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-300 bg-stone-200 h-44">
                <img
                  src={IMAGES.riceGrain}
                  alt="Inspección de grano de arroz recién cosechado"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">Inspección de Grano Maduro</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-center">
                <div className="text-2xl font-serif font-bold text-stone-950 mb-1">
                  Alto Rendimiento
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Grano limpio cosechado con parámetros óptimos de humedad para molienda y comercialización en el mercado nacional.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Agronomic content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38]">
              Producción Agrícola Tecnificada
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
              Arrozales en Panamá: Cosecha Responsable y Rendimiento de Grano
            </h2>

            <p className="text-base text-stone-700 leading-relaxed">
              El arroz representa uno de los pilares de la seguridad alimentaria en Panamá. En Rancho Mogoruza implementamos una producción agrícola basada en la preparación cuidadosa del suelo, nivelación precisa y cosecha mecanizada para garantizar un grano sano, entero y de excelente peso específico.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200">
                <Tractor className="w-5 h-5 text-stone-950 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Maquinaria de Cosecha Eficiente</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Uso de cosechadoras combinadas que realizan corte, trilla y descarga sin fisurar el grano, minimizando pérdidas en el campo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200">
                <Droplets className="w-5 h-5 text-stone-950 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Manejo Hídrico y Canales</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Sistemas de drenaje y retención que optimizan las lluvias del trópico y protegen la estructura física del suelo durante todo el ciclo vegetativo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200">
                <Sparkles className="w-5 h-5 text-stone-950 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Rotación y Salud del Suelo</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Integración agropecuaria: aprovechamiento del rastrojo y rotación con pasturas ganaderas para reciclar nutrientes orgánicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-600">
              <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0" />
              <span>Lotes disponibles para molinos, cooperativas y distribuidores en Panamá</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
