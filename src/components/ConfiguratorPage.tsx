import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer, Smartphone, AlertTriangle, ExternalLink } from 'lucide-react';

export default function ConfiguratorPage() {
  const [isMobile, setIsMobile] = React.useState(false);
  const CONFIGURATOR_URL = 'http://103.91.247.12:8181/webclient/?appliId=1313802028543115264';

  React.useEffect(() => {
    const checkDevice = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Interactive Car Configurator | Kustom Auto Wrx</title>
        <meta name="description" content="Design your dream vehicle with our interactive 3D car configurator. Explore colors, finishes, and modifications in real-time." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interactive Car Configurator
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Design Your Dream Vehicle in Real-Time
          </p>
        </div>

        {/* Video Tutorial Section */}
        <div className="mb-8">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-black/50 rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/5LVga5CaGts"
              title="Car Configurator Tutorial"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Launch Button */}
        <div className="text-center mb-12">
          <a
            href={CONFIGURATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Launch Car Configurator
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>

        {isMobile && (
          <div className="bg-yellow-500/10 text-yellow-400 p-4 rounded-lg mb-6 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              You're viewing the basic mobile version. For full customization features, 
              please visit this page on a desktop or laptop computer.
            </p>
          </div>
        )}

        <div className="text-center space-y-4">
          <p className="text-gray-400">
            Use your mouse to interact with the 3D model:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Left click + drag to rotate</li>
            <li>• Right click + drag to pan</li>
            <li>• Scroll wheel to zoom</li>
            <li>• Use the menu to customize colors and options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}