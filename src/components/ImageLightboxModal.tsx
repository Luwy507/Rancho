import React, { useEffect } from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import { GalleryPhoto } from '../types.ts';

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          aria-label="Cerrar visor"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image frame */}
        <div className="relative bg-black flex items-center justify-center max-h-[72vh] overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-auto max-h-[72vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Caption */}
        <div className="p-5 bg-stone-900 text-stone-200 border-t border-stone-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <h3 className="text-base sm:text-lg font-serif font-medium text-white">
              {photo.title}
            </h3>
            <span className="text-xs text-stone-400 flex items-center gap-1.5 bg-stone-800 px-2.5 py-1 rounded">
              <Tag className="w-3.5 h-3.5 text-[#C29B38]" />
              {photo.categoryLabel}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-3">
            {photo.description}
          </p>

          <div className="flex items-center gap-1 text-[11px] text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-stone-500" />
            <span>{photo.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
