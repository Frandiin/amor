import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { photos } from "./mock/photo";

// Configurações de animação
const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
};

const App: React.FC = () => {
  // Estado para controlar o modal de imagem
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springConfig);
  // Referência para controlar o elemento de áudio
  const audioRef = useRef<HTMLAudioElement>(null);
  const [, setCurrentImageIndex] = useState(0);

  // Placeholder photos - replace with your actual photos


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  // Efeito para lidar com a reprodução automática do áudio
  useEffect(() => {
    const iniciarMusica = async () => {
      if (audioRef.current) {
        try {
          // Configura o volume inicial
          audioRef.current.volume = 0.5;
          // Tenta reproduzir o áudio
          await audioRef.current.play();
          console.log('Música iniciada com sucesso!');
        } catch (error ) {
          console.log('É necessário interagir com a página para iniciar a música', error);
        }
      }
    };

    iniciarMusica();

    // Adiciona um listener para quando a página receber interação
    const handleInteracao = () => {
      iniciarMusica();
      // Remove o listener após a primeira interação
      document.removeEventListener('click', handleInteracao);
    };

    document.addEventListener('click', handleInteracao);

    // Limpa o listener quando o componente for desmontado
    return () => {
      document.removeEventListener('click', handleInteracao);
    };
  }, []);

  // Memoize os elementos decorativos para evitar re-renders desnecessários
  const decorativeElements = useMemo(() => {
    return [...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {i % 2 === 0 ? (
          <span className="text-rose-300 text-3xl filter blur-[1px]">❤️</span>
        ) : (
          <span className="text-pink-300 text-2xl filter blur-[0.5px]">✨</span>
        )}
      </motion.div>
    ));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-200 to-purple-300 relative overflow-hidden">
      {/* Barra de progresso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rose-500 origin-left z-50"
        style={{ scaleX }}
      />
      {/* Elementos decorativos flutuantes */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {decorativeElements}
      </div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden object-cover">
        {/* Círculo decorativo atrás do título */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.h1 
            className="text-7xl font-bold text-rose-600 mb-6 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Para Meu Amor
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-700 italic font-serif"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            "Em cada batida do meu coração, 
            <br/>existe um pedacinho do seu amor"
          </motion.p>
        </motion.div>
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm"></div>
      </section>
      <motion.div 
        className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-rose-200"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <audio
          ref={audioRef}
          controls
          loop
          className="w-64"
          style={{ backgroundColor: "transparent" }}
        >
          <source src="/music.mp3" type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </motion.div>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold text-rose-600 mb-4 drop-shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Nossos Momentos Especiais
            </motion.h2>
            <p className="text-xl text-gray-600 italic font-serif">
              Cada foto conta uma história do nosso amor
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 mx-auto space-y-4 p-4">
            {/* Modal de imagem */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </motion.div>
            )}
            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-4 break-inside-avoid"
              >
                <div 
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo}   
                    loading="lazy"
                    className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-90 group-hover:scale-105"
                  />
                  {/* Overlay com efeitos hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        Momento Especial {index + 1}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-rose-500/80 backdrop-blur-sm hover:bg-rose-600/80 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Adicionar funcionalidade de curtir aqui
                          }}
                        >
                          ❤️
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-purple-500/80 backdrop-blur-sm hover:bg-purple-600/80 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Adicionar funcionalidade de favoritar aqui
                          }}
                        >
                          ✨
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Love Letter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white/30 to-rose-100/30 backdrop-blur-sm relative overflow-hidden">
        {/* Elementos decorativos da seção */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 text-4xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ❤️
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 text-4xl opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ❤️
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold text-rose-600 mb-8 drop-shadow-lg">
            Carta de Amor
          </h2>
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-200">
            <p className="text-xl text-gray-700 leading-relaxed font-serif italic">
              Meu amor Feliz dia dos namorados<br/><br/>
             

Palavras ou intenções nunca serão suficientes para traduzir o amor imenso e a admiração profunda que sinto por você. <br/>
              Você é minha companheira para tudo – para o que já vivemos e para tudo o que ainda está por vir. Sou eternamente grato <br/>
              por você cuidar de mim com tanto carinho e por me guiar, com sua luz, a ser um homem melhor a cada dia. Meu coração <br/>
              é seu, e eu te amo com toda a minha alma.<br/><br/>
              Para sempre seu,<br/>
              ❤️
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default App;
