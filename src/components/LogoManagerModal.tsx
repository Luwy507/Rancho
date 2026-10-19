import React, { useState } from 'react';
import { Upload, X, Check, Image as ImageIcon, Trash2, AlertCircle } from 'lucide-react';

interface LogoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLogo: string | null;
  onSaveLogo: (logoUrl: string | null) => void;
  logoPosition?: 'left' | 'center' | 'right' | 'top-right';
  onChangeLogoPosition?: (pos: 'left' | 'center' | 'right' | 'top-right') => void;
  logoSize?: 'normal' | 'large' | 'xl';
  onChangeLogoSize?: (size: 'normal' | 'large' | 'xl') => void;
}

export const LogoManagerModal: React.FC<LogoManagerModalProps> = ({
  isOpen,
  onClose,
  currentLogo,
  onSaveLogo,
  logoPosition = 'left',
  onChangeLogoPosition,
  logoSize = 'large',
  onChangeLogoSize,
}) => {
  const [previewLogo, setPreviewLogo] = useState<string | null>(currentLogo);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Por favor seleccione un archivo de imagen válido (PNG, SVG, JPG, WEBP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('El archivo es demasiado grande. Seleccione una imagen de hasta 5 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPreviewLogo(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSaveLogo(previewLogo);
    onClose();
  };

  const handleRemove = () => {
    setPreviewLogo(null);
    onSaveLogo(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div>
            <h3 className="text-base font-semibold text-stone-900">
              Logotipo Oficial — Rancho Mogoruza
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Espacio exclusivo para el logo original de la empresa familiar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg transition-colors hover:bg-stone-200"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="p-4 bg-stone-100 border border-stone-300 rounded-lg text-xs text-stone-900 leading-relaxed">
            <span className="font-semibold block mb-1">Compromiso de fidelidad de marca:</span>
            No inventamos logotipos sustitutos ni ficticios. Este espacio está reservado para que cargue su archivo original (PNG con fondo transparente, SVG o JPG). Se mostrará en la cabecera preservando su proporción sin deformarlo.
          </div>

          {/* Current / Preview display */}
          <div className="border-2 border-dashed border-stone-300 rounded-xl p-6 text-center bg-stone-50 flex flex-col items-center justify-center min-h-[160px]">
            {previewLogo ? (
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-stone-200 inline-block">
                  <img
                    src={previewLogo}
                    alt="Vista previa del Logotipo de Rancho Mogoruza"
                    className="max-h-20 max-w-[220px] object-contain mx-auto"
                  />
                </div>
                <span className="text-xs font-medium text-stone-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#C29B38]" /> Logotipo cargado con éxito
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-stone-500">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mb-2 text-stone-600">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-stone-700">Espacio reservado para su archivo de logotipo</p>
                <p className="text-xs text-stone-500 mt-1">Haga clic abajo para seleccionar la imagen desde su computadora</p>
              </div>
            )}
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Upload Button */}
          <div>
            <label className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white border border-stone-300 rounded-lg text-xs font-medium text-stone-800 hover:bg-stone-50 cursor-pointer transition-colors shadow-sm">
              <Upload className="w-4 h-4 text-stone-900" />
              <span>Seleccionar archivo de imagen de mi equipo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-[11px] text-stone-500 text-center mt-1.5">
              Formatos admitidos: PNG (preferible con transparencia), SVG, JPG. Máximo 5MB.
            </p>
          </div>

          {/* Posición en la Portada */}
          <div className="pt-3 border-t border-stone-200">
            <label className="block text-xs font-semibold text-stone-800 mb-2">
              Ubicación del logotipo en la portada de inicio:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onChangeLogoPosition?.('left')}
                className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                  logoPosition === 'left'
                    ? 'border-[#C29B38] bg-[#FDF9EE] text-[#8C6D1F] font-semibold'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                ⬅️ Arriba a la Izquierda
              </button>
              <button
                type="button"
                onClick={() => onChangeLogoPosition?.('center')}
                className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                  logoPosition === 'center'
                    ? 'border-[#C29B38] bg-[#FDF9EE] text-[#8C6D1F] font-semibold'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                ⏺️ Centrado en Portada
              </button>
              <button
                type="button"
                onClick={() => onChangeLogoPosition?.('right')}
                className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                  logoPosition === 'right'
                    ? 'border-[#C29B38] bg-[#FDF9EE] text-[#8C6D1F] font-semibold'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                ➡️ Columna Derecha (2 col.)
              </button>
              <button
                type="button"
                onClick={() => onChangeLogoPosition?.('top-right')}
                className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                  logoPosition === 'top-right'
                    ? 'border-[#C29B38] bg-[#FDF9EE] text-[#8C6D1F] font-semibold'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                ↗️ Insignia Superior Derecha
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-stone-600 font-medium">Tamaño del logo:</span>
              <div className="flex gap-1.5">
                {(['normal', 'large', 'xl'] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => onChangeLogoSize?.(sz)}
                    className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                      logoSize === sz
                        ? 'border-[#C29B38] bg-[#C29B38] text-stone-950 font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {sz === 'normal' ? 'Normal' : sz === 'large' ? 'Grande' : 'Extra Grande'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-50 border-t border-stone-200">
          {previewLogo ? (
            <button
              onClick={handleRemove}
              className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-red-700 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Restablecer espacio</span>
            </button>
          ) : (
            <span className="text-xs text-stone-500">Sin logotipo asignado</span>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors shadow-sm"
            >
              Guardar en Cabecera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
