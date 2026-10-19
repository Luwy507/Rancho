export interface ProductItem {
  id: string;
  category: 'brahman' | 'arroz' | 'aves' | 'cerdos';
  categoryLabel: string;
  name: string;
  description: string;
  specifications: {
    razaTipo: string;
    edadEstado: string;
    manejo: string;
    ubicacion: string;
  };
  image: string;
  imageAlt: string;
  availabilityNote: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'brahman' | 'arroz' | 'granjas' | 'paisajes';
  categoryLabel: string;
  image: string;
  description: string;
  location: string;
}

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  interes: string;
  mensaje: string;
}
