import React from 'react';
import { IMAGES } from '../data/content.ts';
import { Check, Shield, Sun, Sparkles } from 'lucide-react';

export const LivestockSection: React.FC = () => {
  return (
    <section id="ganaderia" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38] mb-2">
            Producción Bovina Especializada
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
            Ganadería Brahman Rojo y Gris: Rusticidad y Excelencia Genética
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            En el clima tropical de Panamá, la raza cebú Brahman constituye la base indiscutible de la productividad ganadera. En Rancho Mogoruza criamos y seleccionamos ejemplares rojos y grises por su resistencia climática, capacidad de conversión forrajera y mansedumbre de manejo.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Card 1: Brahman Rojo */}
          <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-200">
              <img
                src={IMAGES.brahmanRedPure}
                alt="Hato exclusivo de ganado Brahman rojo puro en potreros de Panamá"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-stone-950/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">
                Línea Brahman Rojo
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                Vigor Híbrido y Resistencia al Calor
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                El Brahman rojo destaca por su densa pigmentación y pelaje oscuro que filtra la intensa radiación solar del trópico panameño. Es un reproductor de gran líbido y rusticidad que transmite a su progenie ganancia de peso acelerada en sistemas de pastoreo extensivo.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-stone-200/80">
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Pelaje con pigmentación protectora contra el sol tropical</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Gran capacidad para caminar y aprovechar pasturas en colina</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Toretes y novillas con conformación cárnica profunda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Brahman Gris */}
          <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-200">
              <img
                src={IMAGES.calvesPasture}
                alt="Vacas y terneros Brahman en potreros verdes"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-stone-950/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">
                Línea Brahman Gris & Cría
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                Maternidad Probada y Mansedumbre en Potrero
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Nuestras vacas Brahman gris son reconocidas por su excelente instinto maternal, ubres bien conformadas y producción lechera idónea para destetar terneros pesados y saludables. La docilidad facilita el trabajo en manga y potrero con menor estrés para el animal.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-stone-200/80">
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Hembras fértiles con intervalo de parto controlado</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Terneros criados al pie de la madre en potreros verdes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Estructura ósea fuerte y aplomos correctos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Livestock Management */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
          <h4 className="text-base font-semibold text-stone-900 mb-6 text-center">
            Pautas de Manejo Responsable en Rancho Mogoruza
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-stone-200 text-stone-950">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-stone-900">Pastoreo Rotacional</h5>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  División de potreros para dar descanso a las pasturas, evitar la degradación del suelo y asegurar forraje fresco y nutritivo los 365 días del año.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-stone-200 text-stone-950">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-stone-900">Plan Zoosanitario Estricto</h5>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Vacunaciones oficiales completas, control estratégico de parásitos y chequeos ginecológicos y andrológicos periódicos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-stone-200 text-stone-950">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-stone-900">Manejo Amigable (Low-Stress)</h5>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Trabajo en corrales sin golpes ni maltratos, respetando el temperamento del ganado para lograr animales tranquilos y de fácil manejo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
