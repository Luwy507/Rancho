import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Compass,
  Clock,
  Car,
  Trees,
  PhoneCall,
  CalendarCheck,
} from 'lucide-react';
import { COMPANY_INFO, LOCATION_INFO } from '../data/content.ts';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    'AIzaSyCvrCiLlay2eLuAcWHXcybuQJ-oJlg5uvU';

  // Construct official Google Maps Embed URL with attribution solution_id
  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${LOCATION_INFO.latitude},${LOCATION_INFO.longitude}&zoom=14&solution_id=gmp_git_agentskills_v1`
    : `https://maps.google.com/maps?q=${LOCATION_INFO.latitude},${LOCATION_INFO.longitude}+(Rancho+Mogoruza)&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  const handleCopyCoords = async () => {
    try {
      await navigator.clipboard.writeText(
        `${LOCATION_INFO.latitude}, ${LOCATION_INFO.longitude}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section
      id="ubicacion"
      className="relative bg-black text-white py-20 lg:py-24 border-t border-stone-800 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle organic background glow accents (earth & vegetation tones) */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-950/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-emerald-900/60 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Ubicación Oficial & Acceso</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Encuéntranos — Rancho Mogoruza
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            {LOCATION_INFO.invitationText}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Farm Information & Visit Guide */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Card 1: Main Location Details & Invitation */}
            <div className="bg-stone-900/80 backdrop-blur-sm border border-stone-800 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C29B38]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-start gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-stone-800 text-[#C29B38] border border-stone-700 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Finca Agropecuaria
                  </h3>
                  <p className="text-xs text-stone-400 font-medium">
                    {LOCATION_INFO.region}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-stone-800">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Dirección de Campo
                    </span>
                    <span className="text-stone-200 font-medium">
                      {LOCATION_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-stone-800">
                  <Clock className="w-4 h-4 text-[#C29B38] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Horario de Atención en Campo
                    </span>
                    <span className="text-stone-200">
                      {LOCATION_INFO.schedule}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-stone-800">
                  <div className="flex items-center gap-3">
                    <Navigation className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                        Coordenadas GPS
                      </span>
                      <span className="text-xs font-mono text-stone-300">
                        {LOCATION_INFO.coordinatesFormatted}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCoords}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg border border-stone-700 transition-colors"
                    title="Copiar coordenadas geográficas"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons: Featured "Cómo llegar al rancho" */}
              <div className="mt-6 pt-5 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={LOCATION_INFO.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#C29B38] hover:bg-[#d8ae3f] text-black font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group text-center"
                >
                  <Navigation className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Cómo llegar al rancho</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-sm rounded-xl border border-stone-700 transition-colors text-center"
                >
                  <CalendarCheck className="w-4 h-4 text-[#C29B38]" />
                  <span>Agendar visita</span>
                </a>
              </div>
            </div>

            {/* Card 2: Rural Access & Visiting Notice */}
            <div className="bg-stone-900/40 border border-stone-800/80 rounded-xl p-4 sm:p-5 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2 text-stone-300 font-medium">
                <Car className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recomendaciones para el visitante</span>
              </div>
              <p className="leading-relaxed text-stone-400">
                La finca cuenta con acceso carretero apto para todo tipo de vehículos.
                Para recorridos por los potreros de pastoreo o inspección zootécnica de lotes
                de ganado Brahman, recomendamos vestir calzado adecuado de campo y coordinar la llegada con nuestro equipo.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 flex flex-col">
              {/* Top Map Toolbar Bar */}
              <div className="bg-stone-950/90 backdrop-blur-md px-4 py-3 border-b border-stone-800 flex items-center justify-between gap-3 text-xs z-10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-white tracking-wide">
                    Google Maps Oficial · Rancho Mogoruza
                  </span>
                </div>

                <a
                  href={LOCATION_INFO.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#C29B38] transition-colors font-medium text-[11px]"
                  title="Abrir en la aplicación o web de Google Maps"
                >
                  <span>Abrir mapa completo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Iframe */}
              <div className="relative flex-1 w-full h-full min-h-[360px] bg-stone-950">
                <iframe
                  title="Ubicación oficial de Rancho Mogoruza en Google Maps"
                  src={embedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Quick-Action Bar for Mobile/Tablet convenience */}
              <div className="bg-stone-950/95 px-4 py-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-400">
                  <Trees className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Destino: <strong>Rancho Mogoruza</strong> ({LOCATION_INFO.latitude}, {LOCATION_INFO.longitude})</span>
                </div>
                <a
                  href={LOCATION_INFO.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-[#C29B38] text-stone-200 hover:text-black font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Calcular ruta GPS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationSection;
