import React, { useState } from 'react';
import { Menu, X, MessageCircle, Upload } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/content.ts';

interface NavbarProps {
  customLogo: string | null;
  onOpenLogoManager: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  customLogo,
  onOpenLogoManager,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoSrc = customLogo || IMAGES.officialLogo;

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Ganadería', href: '#ganaderia' },
    { label: 'Arrozales', href: '#agricultura' },
    { label: 'Producciones', href: '#otras-producciones' },
    { label: 'En Venta', href: '#en-venta' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black backdrop-blur-md border-b border-stone-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Zone (Wordmark + Official Logo Slot) */}
          <div className="flex items-center gap-3 shrink-0">
            {logoSrc ? (
              <a
                href="#inicio"
                className="flex items-center gap-3 group"
                title="Rancho Mogoruza — Inicio"
              >
                <img
                  src={logoSrc}
                  alt="Logotipo Oficial Rancho Mogoruza"
                  className="h-11 w-auto max-w-[140px] object-contain transition-transform group-hover:scale-102"
                />
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
                  {COMPANY_INFO.name}
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenLogoManager}
                  className="group relative flex items-center gap-1.5 px-2.5 py-1.5 border border-dashed border-stone-700 hover:border-[#C29B38] bg-stone-900 rounded-lg text-[11px] font-medium text-stone-300 hover:text-white transition-colors"
                  title="Haga clic para cargar el logotipo original de Rancho Mogoruza"
                >
                  <Upload className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span className="whitespace-nowrap">[ Espacio para Logotipo ]</span>
                </button>
                <a
                  href="#inicio"
                  className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-stone-300 transition-colors whitespace-nowrap"
                >
                  {COMPANY_INFO.name}
                </a>
              </div>
            )}
          </div>

          {/* Zone 2: Navigation Links (Clean single line typography with gold color #c29b38) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#c29b38] hover:text-[#e0b746] hover:border-b-2 hover:border-[#c29b38] py-1 transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-stone-950" />
              <span>Cotizar / WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden p-2 text-stone-950 bg-[#C29B38] rounded-lg"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-stone-950" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-900 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-stone-800 px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 pb-4 border-b border-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#c29b38] hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-stone-950 bg-[#C29B38] hover:bg-[#b08b2e] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-stone-950" />
              <span>Contactar por WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogoManager();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-stone-300 border border-stone-800 rounded-lg hover:bg-stone-900 flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4 text-[#C29B38]" />
              <span>Cargar o gestionar Logotipo Oficial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
