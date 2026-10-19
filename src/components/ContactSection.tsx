import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Settings2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';
import { ContactFormData } from '../types.ts';

interface ContactSectionProps {
  selectedProductForQuote: string | null;
  onClearSelectedProduct: () => void;
  whatsAppPhone: string;
  onUpdateWhatsAppPhone: (newNumber: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedProductForQuote,
  onClearSelectedProduct,
  whatsAppPhone,
  onUpdateWhatsAppPhone,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    telefono: '',
    email: '',
    interes: selectedProductForQuote || 'Consulta General / Ganadería',
    mensaje: selectedProductForQuote
      ? `Buenas tardes, quisiera consultar cotización y disponibilidad sobre: ${selectedProductForQuote}.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState(whatsAppPhone);

  useEffect(() => {
    if (selectedProductForQuote) {
      setFormData((prev) => ({
        ...prev,
        interes: selectedProductForQuote,
        mensaje: `Buenas tardes, quisiera consultar cotización y disponibilidad sobre: ${selectedProductForQuote}.`,
      }));
    }
  }, [selectedProductForQuote]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || (!formData.telefono.trim() && !formData.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateWhatsAppPhone(phoneInput);
    setIsEditingPhone(false);
  };

  const handleSendToWhatsAppDirect = () => {
    const cleanNum = whatsAppPhone.replace(/\D/g, '');
    const text = `*Consulta Web Rancho Mogoruza*\n*Nombre:* ${formData.nombre}\n*Teléfono:* ${formData.telefono}\n*Interés:* ${formData.interes}\n*Mensaje:* ${formData.mensaje}`;
    const url = `https://wa.me/${cleanNum || COMPANY_INFO.defaultWhatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B38] mb-2">
                Canales de Atención Directa
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight leading-tight [text-wrap:balance]">
                Contacto con Rancho Mogoruza
              </h2>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                Estamos a su disposición para coordinar visitas a la finca, consultas zootécnicas de ganado Brahman, ventas de cosechas de arroz o pedidos de producción avícola y porcina en Panamá.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-stone-950 text-[#C29B38] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Correo Electrónico Oficial</h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-stone-900 hover:text-black transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">Respuestas comerciales y envío de fichas técnicas</p>
                </div>
              </div>

              {/* WhatsApp & Phone */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-stone-950 text-[#C29B38] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">WhatsApp / Teléfono Directo</h4>
                      <p className="text-sm font-semibold text-stone-900 mt-0.5">
                        {whatsAppPhone}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Mensajería instantánea para coordinar en finca</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditingPhone(!isEditingPhone)}
                    className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
                    title="Configurar número oficial de WhatsApp"
                  >
                    <Settings2 className="w-4 h-4" />
                  </button>
                </div>

                {isEditingPhone && (
                  <form onSubmit={handleSavePhone} className="mt-3 pt-3 border-t border-stone-100 flex items-center gap-2">
                    <input
                      type="text"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      placeholder="+507 6000-0000"
                      className="text-xs px-2.5 py-1.5 border border-stone-300 rounded-md flex-1 text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-950"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold bg-stone-950 text-white rounded-md hover:bg-stone-800"
                    >
                      Guardar
                    </button>
                  </form>
                )}
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-stone-950 text-[#C29B38] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Ubicación de Operaciones</h4>
                  <p className="text-sm font-semibold text-stone-900 mt-0.5">
                    República de Panamá
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">Visitas a fincas y potreros previa cita programada</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-stone-950 text-[#C29B38] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Horario de Finca</h4>
                  <p className="text-sm font-semibold text-stone-900 mt-0.5">
                    {COMPANY_INFO.schedule}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cotización & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                Solicitud de Cotización y Consulta
              </h3>
              <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                Complete el formulario con sus datos de contacto y el producto o lote de su interés. Nos pondremos en contacto directo con usted a la brevedad.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-stone-100 rounded-xl border border-stone-300 space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-stone-200 text-stone-900 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900">
                    ¡Solicitud Preparada con Éxito!
                  </h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Hemos registrado su solicitud de cotización para <strong className="text-stone-900">{formData.interes}</strong>. Puede enviarla directamente a nuestro WhatsApp oficial para agilizar la respuesta en finca.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleSendToWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C29B38]" />
                      <span>Abrir y Enviar por WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClearSelectedProduct();
                      }}
                      className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg"
                    >
                      Realizar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Navarro"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. +507 6123-4567"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Correo Electrónico (Opcional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Área de Interés *
                      </label>
                      <select
                        name="interes"
                        value={formData.interes}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-950"
                      >
                        <option value="Toretes Brahman Rojo">Toretes Brahman Rojo</option>
                        <option value="Novillas Brahman Gris">Novillas Brahman Gris</option>
                        <option value="Arroz en Cáscara / Cosecha">Arroz en Cáscara / Cosecha</option>
                        <option value="Aves y Huevos de Finca">Aves y Huevos de Finca</option>
                        <option value="Lechones y Porcicultura">Lechones y Porcicultura</option>
                        <option value="Visita a la Finca">Visita a la Finca</option>
                        <option value="Consulta General">Consulta General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Detalles de su Consulta o Lote de Interés
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describa cantidad de animales, volumen de cosecha o dudas técnicas..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-950"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-stone-500">
                      Respuesta directa por la administración familiar de Rancho Mogoruza.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C29B38]" />
                      <span>Enviar Solicitud</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
