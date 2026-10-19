import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LivestockSection } from './components/LivestockSection.tsx';
import { AgricultureSection } from './components/AgricultureSection.tsx';
import { OtherProductionSection } from './components/OtherProductionSection.tsx';
import { CatalogSection } from './components/CatalogSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LogoManagerModal } from './components/LogoManagerModal.tsx';
import { ImageLightboxModal } from './components/ImageLightboxModal.tsx';
import { GalleryPhoto } from './types.ts';
import { COMPANY_INFO, IMAGES } from './data/content.ts';

export default function App() {
  const [customLogo, setCustomLogo] = useState<string | null>(() => {
    const saved = localStorage.getItem('rancho_mogoruza_logo');
    if (saved && !saved.startsWith('/src/assets/images/regenerated_image_')) {
      return saved;
    }
    return IMAGES.officialLogo;
  });

  useEffect(() => {
    const saved = localStorage.getItem('rancho_mogoruza_logo');
    if (saved && saved.startsWith('/src/assets/images/regenerated_image_') && saved !== IMAGES.officialLogo) {
      localStorage.setItem('rancho_mogoruza_logo', IMAGES.officialLogo);
      setCustomLogo(IMAGES.officialLogo);
    }
  }, []);

  const [logoPosition, setLogoPosition] = useState<'left' | 'center' | 'right' | 'top-right'>(() => {
    const saved = localStorage.getItem('rancho_mogoruza_logo_pos');
    if (saved === 'center' || saved === 'right' || saved === 'top-right' || saved === 'left') {
      return saved;
    }
    return 'left';
  });

  const [logoSize, setLogoSize] = useState<'normal' | 'large' | 'xl'>(() => {
    const saved = localStorage.getItem('rancho_mogoruza_logo_size');
    if (saved === 'normal' || saved === 'large' || saved === 'xl') {
      return saved;
    }
    return 'large';
  });

  const [whatsAppPhone, setWhatsAppPhone] = useState<string>(() => {
    return localStorage.getItem('rancho_mogoruza_phone') || COMPANY_INFO.phonePlaceholder;
  });

  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);

  const handleSaveLogo = (logoUrl: string | null) => {
    setCustomLogo(logoUrl);
    if (logoUrl) {
      localStorage.setItem('rancho_mogoruza_logo', logoUrl);
    } else {
      localStorage.removeItem('rancho_mogoruza_logo');
    }
  };

  const handleSavePosition = (pos: 'left' | 'center' | 'right' | 'top-right') => {
    setLogoPosition(pos);
    localStorage.setItem('rancho_mogoruza_logo_pos', pos);
  };

  const handleSaveSize = (size: 'normal' | 'large' | 'xl') => {
    setLogoSize(size);
    localStorage.setItem('rancho_mogoruza_logo_size', size);
  };

  const handleUpdatePhone = (newPhone: string) => {
    setWhatsAppPhone(newPhone);
    localStorage.setItem('rancho_mogoruza_phone', newPhone);
  };

  const handleSelectProductForQuote = (productName: string) => {
    setSelectedProductForQuote(productName);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = () => {
    setSelectedProductForQuote('Consulta General / Cotización');
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-stone-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        customLogo={customLogo}
        onOpenLogoManager={() => setIsLogoModalOpen(true)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Corporate Sections */}
      <main className="flex-1">
        {/* 1. Hero Cover */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          customLogo={customLogo}
          logoPosition={logoPosition}
          onChangeLogoPosition={handleSavePosition}
          logoSize={logoSize}
          onChangeLogoSize={handleSaveSize}
          onOpenLogoManager={() => setIsLogoModalOpen(true)}
        />

        {/* 2. Nosotros (Historia, Tradición y Valores) */}
        <AboutSection />

        {/* 3. Ganadería (Brahman Rojo y Gris, Pasturas) */}
        <LivestockSection />

        {/* 4. Producción Agrícola (Arrozales y Cosecha) */}
        <AgricultureSection />

        {/* 5. Otras Producciones (Aves y Porcicultura) */}
        <OtherProductionSection />

        {/* 6. Producción en Venta (Catálogo Veraz sin Falsos Datos) */}
        <CatalogSection
          onSelectProductForQuote={handleSelectProductForQuote}
          whatsAppPhone={whatsAppPhone}
        />

        {/* 7. Galería Fotográfica Documental */}
        <GallerySection onPhotoClick={(photo) => setActivePhoto(photo)} />

        {/* 8. Contacto y Cotizaciones */}
        <ContactSection
          selectedProductForQuote={selectedProductForQuote}
          onClearSelectedProduct={() => setSelectedProductForQuote(null)}
          whatsAppPhone={whatsAppPhone}
          onUpdateWhatsAppPhone={handleUpdatePhone}
        />

        {/* 9. Ubicación Oficial & Cómo Llegar */}
        <LocationSection />
      </main>

      {/* Corporate Footer */}
      <Footer
        customLogo={customLogo}
        onOpenLogoManager={() => setIsLogoModalOpen(true)}
      />

      {/* Modals */}
      <LogoManagerModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        currentLogo={customLogo}
        onSaveLogo={handleSaveLogo}
        logoPosition={logoPosition}
        onChangeLogoPosition={handleSavePosition}
        logoSize={logoSize}
        onChangeLogoSize={handleSaveSize}
      />

      <ImageLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
