import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la UI de repuesto.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto personalizada
      return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-6 text-gray-200">
          <div className="glass-card max-w-lg w-full p-8 md:p-12 rounded-3xl border border-white/5 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-400" size={40} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ups, algo salió mal</h2>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ha ocurrido un error inesperado al renderizar esta sección. 
              {this.state.error && <span className="block mt-2 text-sm opacity-70">Detalle: {this.state.error.toString()}</span>}
            </p>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              <RefreshCw size={20} />
              <span>Recargar página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}
