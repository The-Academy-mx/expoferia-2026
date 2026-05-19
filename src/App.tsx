/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Globe, 
  Layers, 
  Zap, 
  CheckCircle, 
  Calendar, 
  Monitor, 
  HelpCircle, 
  Flame,
  MessageCircle,
  X
} from 'lucide-react';

const ASSET_LOGO = "https://storage.mlcdn.com/account_image/979637/DpFj1Yit3SVLMR0dMtYEBCvOoV7H3KW9degsl3Eb.png";
const ASSET_HERO_BG = "https://storage.mlcdn.com/account_image/979637/qyT98FxRRYCuFtaDSpHVSg3zopk7PcGtFSWggUf4.png";
const ASSET_DIVIDER_BG = "https://storage.mlcdn.com/account_image/979637/ZmQTLT9OiCXyakzxMi7EZDFvgKQ2QTToohCeYr5y.png";
const ASSET_FINAL_CTA_BG = "https://storage.mlcdn.com/account_image/979637/1ylsA5irMcfWFwOTLeWqqW0IrO8R7RrnYPUa7cSD.png";
const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScUivaYJCfIt2JxZeJEZCEg4eUij9GSQ2YKELKwTy1lQJSj7A/viewform";

interface Community {
  title: string;
  img: string;
  desc: React.ReactNode;
  waLink: string;
}

const COMMUNITIES: Community[] = [
  { 
    title: "Productos", 
    img: "https://i.ibb.co/sdr7mvxk/1.png",
    waLink: "https://chat.whatsapp.com/JX9YPAoRWwb6ZWB9vzs2W1",
    desc: (
      <div className="space-y-4">
        <p>¿Tu negocio <strong className="text-academy-ocean">crea, fabrica o comercializa productos</strong>? Este espacio es para ti.</p>
        <p>Si vendes productos físicos en tienda, desde casa o de forma digital, aquí podrás presentar lo que haces.</p>
        <p><span className="text-academy-red font-bold uppercase text-xs block mb-1">Incluye:</span> 
        <strong>alimentos, artículos artesanales, productos especializados, moda, bienestar, tecnología</strong> y productos con potencial de venta en otras ciudades o exportación.</p>
      </div>
    )
  },
  { 
    title: "Servicios", 
    img: "https://i.ibb.co/23cwYfQy/2.png",
    waLink: "https://chat.whatsapp.com/L6q2wUSt5Vh8R0npVsBa70",
    desc: (
      <div className="space-y-4">
        <p>¿Tu negocio <strong className="text-academy-ocean">ayuda a las personas a través de un servicio</strong>? Este es tu lugar.</p>
        <p>Si ofreces atención, asesoría, experiencia o soluciones para personas o empresas, este ecosistema es para ti.</p>
        <p><span className="text-academy-red font-bold uppercase text-xs block mb-1">Participan:</span> 
        <strong>belleza, salud, bienes raíces, mantenimiento, limpieza, consultoría, fotografía, tecnología, bienestar</strong> y muchos más.</p>
      </div>
    )
  },
  { 
    title: "Educación y Formación", 
    img: "https://i.ibb.co/rK0X2Ywf/3.png",
    waLink: "https://chat.whatsapp.com/G5TxLNGtLteEvb10im4Km5",
    desc: (
      <div className="space-y-4">
        <p>¿Tu negocio <strong className="text-academy-ocean">transforma vidas a través del aprendizaje</strong>? Este espacio es para ti.</p>
        <p>Si tu modelo de negocio se enfoca en enseñar, capacitar o desarrollar habilidades, aquí podrás compartirlo.</p>
        <p><span className="text-academy-red font-bold uppercase text-xs block mb-1">Áreas:</span> 
        <strong>clases, talleres, idiomas, tutorías, formación profesional, plataformas educativas, mentorías y desarrollo personal.</strong></p>
      </div>
    )
  },
];

export default function App() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-academy-ocean/20">
      {/* STICKY TOP NAVIGATION */}
      <div className="sticky top-0 z-50">
        {/* ANNOUNCEMENT BANNER */}
        <div className="bg-academy-red text-white py-3 px-6 text-center text-sm font-black uppercase tracking-widest shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Tienes hasta el 5 de julio para completar tu registro — <span className="text-white/80">Solo hay 15 lugares disponibles por categoría</span></span>
          </div>
        </div>

        {/* HEADER */}
        <header className="flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="h-10">
          <img 
            src={ASSET_LOGO} 
            alt="Logo Academia" 
            className="h-full w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
        <a 
          href="#comunidades" 
          className="bg-academy-red text-white font-extrabold uppercase px-6 py-2.5 rounded-lg text-sm transition-all hover:scale-105 active:scale-95 shadow-academy hover:shadow-academy-hover"
        >
          Asegurar mi lugar
        </a>
      </header>
    </div>

      {/* HERO SECTION */}
      <section 
        className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 parallax text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ASSET_HERO_BG})` }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <p className="flex items-center justify-center gap-2 text-academy-gold font-semibold uppercase tracking-[2px] mb-6 animate-pulse">
            <Users className="w-5 h-5" /> +500 emprendedores ya han presentado su negocio
          </p>
          
          <h1 className="text-2xl md:text-5xl font-black uppercase leading-[1.1] mb-8 tracking-tight">
            Ser el mejor en lo que haces <br className="hidden md:block" /> 
            <span className="text-academy-gold">no te garantiza éxito</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Lleva tu negocio a una audiencia nacional. La <strong className="text-white font-extrabold">ExpoFeria 2026</strong> es nuestro escenario virtual como parte de la <strong className="text-white font-extrabold">Convención Anual de la Academia</strong>, diseñada para que cientos de personas conecten con lo que ofreces.
          </p>
          
          <a 
            href="#comunidades" 
            className="inline-block bg-academy-red text-white font-extrabold uppercase px-12 py-6 rounded-xl text-xl transition-all hover:scale-110 active:scale-95 shadow-academy hover:shadow-academy-hover border-2 border-white/20"
          >
            Asegurar mi lugar en la ExpoFeria
          </a>
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-stone-50 py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            {...fadeIn}
            className="text-3xl md:text-5xl font-extrabold text-academy-ocean uppercase mb-6"
          >
            El problema no es tu negocio… es que no te conocen
          </motion.h2>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-5xl mx-auto mb-16 leading-relaxed"
          >
            El error que cometen cientos de emprendedores es creer que por ser los mejores en lo que hacen, automáticamente les llegarán clientes; <strong className="text-stone-900 font-bold underline decoration-academy-gold underline-offset-4">solo los que vencen el anonimato dejan de ser invisibles para el mercado.</strong> Esta feria construye el puente hacia tu próxima etapa de crecimiento.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Alcance nacional", 
                desc: "No te limites a tu localidad. Expón tu marca ante una red nacional de clientes y aliados sin moverte de tu espacio." 
              },
              { 
                icon: Layers, 
                title: "Vitrina de Alto Impacto", 
                desc: "Aprovecha el escenario oficial de la Academia para elevar la percepción de tu marca ante una audiencia calificada." 
              },
              { 
                icon: Zap, 
                title: "Cero costos físicos", 
                desc: "Todo es 100% online. Olvida gastos de viaje, hoteles o montaje de stands. Máxima visibilidad, totalmente gratuito." 
              },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-xl shadow-sm border-t-6 border-academy-sky text-left hover:-translate-y-2 transition-transform duration-300"
              >
                <card.icon className="w-12 h-12 text-academy-red mb-6" />
                <h3 className="text-xl font-extrabold text-academy-ocean uppercase mb-4">{card.title}</h3>
                <p className="text-stone-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER PARALLAX */}
      <section 
        className="h-[40vh] parallax flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(33, 110, 168, 0.6), rgba(33, 110, 168, 0.6)), url(${ASSET_DIVIDER_BG})` }}
      >
        <motion.img 
          src="https://i.ibb.co/ZR9S2YCC/Expo-Feria-Logo.png" 
          alt="ExpoFeria 2026 Logo"
          className="h-28 md:h-44 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* VALUE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-center text-3xl md:text-4xl font-extrabold text-academy-ocean uppercase mb-16"
          >
            ¿Qué obtendrás al participar?
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Espacio de Exposición",
              "Contactos Estratégicos",
              "Nuevos Clientes",
              "Estatus de Marca"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <CheckCircle className="w-12 h-12 text-academy-gold mx-auto mb-4" />
                <h4 className="font-bold text-stone-800">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT DAY EXPERIENCE */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-academy-ocean uppercase mb-6 leading-tight">
                El Gran Día: <br /> Tu Momento de Brillar
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                La Feria de Negocios de la <strong>Convención Anual 2026</strong> no es solo una reunión; es el escenario donde tu esfuerzo se vuelve visible para todo México.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    title: "Pitch de Impacto", 
                    desc: "Tendrás 3 minutos de oro para captar la atención de la audiencia y generar interés real en tu proyecto." 
                  },
                  { 
                    title: "Visibilidad Nacional", 
                    desc: "Tu marca será presentada en vivo a través de Zoom, Facebook y YouTube, captando la atención de más de 500 personas simultáneamente. Además, el alcance se extiende con las visualizaciones posteriores al evento." 
                  },
                  { 
                    title: "Networking Estratégico", 
                    desc: "No solo te ven; creas puentes de conexión. Incrementas tu alcance y generas alianzas que pueden concluir en nuevas ventas para tu negocio." 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-academy-gold flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-academy-ocean" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-stone-900 uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                <p className="text-academy-red font-black uppercase text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> ¡Atención al calendario!
                </p>
                <p className="text-stone-600 mt-2">
                  El cierre de convocatoria es el <strong>Sábado 05 de Julio</strong>. No dejes que la oportunidad de conectar con aliados estratégicos se escape por esperar al último minuto.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-academy-gold/20 rounded-3xl rotate-3 blur-2xl" />
              <div className="relative bg-academy-ocean p-8 md:p-12 rounded-3xl text-white shadow-2xl overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Monitor className="w-48 h-48" />
                </div>
                
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
                  <Monitor className="w-10 h-10 text-academy-gold" />
                </div>

                <h3 className="text-3xl font-black uppercase mb-4">
                  Presentación 100% Virtual
                </h3>
                
                <p className="text-xl text-stone-200 mb-8 max-w-sm">
                  Llega a todo México sin salir de casa a través de nuestra plataforma oficial en <strong>Zoom</strong>.
                </p>

                <div className="flex items-center gap-2 mb-8 bg-red-600/20 px-4 py-2 rounded-full border border-red-600/30">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-500">Transmisión en Vivo</span>
                </div>

                <div className="mt-auto w-full bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Próxima gran fecha:</p>
                  <p className="text-2xl font-black uppercase text-academy-gold">Jueves 23 de Julio | 8:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-academy-ocean text-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-4">Tu Camino a la ExpoFeria</h2>
            <p className="text-academy-sky font-bold uppercase tracking-widest">Un proceso acompañado para asegurar tu éxito</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-12" />
            
            {[
              { step: "01", title: "Elige tu Comunidad", desc: "Identifica el sector que mejor represente a tu negocio.", icon: Globe },
              { step: "02", title: "Únete a WhatsApp", desc: "Recibe el link de registro y acompañamiento directo.", icon: MessageCircle },
              { step: "03", title: "Registro Oficial", desc: "Completa los requisitos con nuestra guía paso a paso.", icon: CheckCircle },
              { step: "04", title: "Gran Evento Zoom", desc: "Presenta tu marca ante México el 23 de Julio a las 8PM.", icon: Monitor },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-academy-gold text-academy-ocean rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-academy-gold/20">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-academy-sky mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITIES SECTION */}
      <section className="bg-stone-50 py-20 px-6" id="comunidades">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-center text-3xl md:text-4xl font-extrabold uppercase mb-4"
          >
            Encuentra tu comunidad
          </motion.h2>
          <p className="text-center text-stone-500 mb-12 max-w-2xl mx-auto">
            Selecciona tu sector para unirte al grupo de WhatsApp correspondiente y participar en la <strong>ExpoFeria</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMUNITIES.map((community, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCommunity(community)}
                className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white"
              >
                <img 
                  src={community.img} 
                  alt={community.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-3xl font-extrabold uppercase tracking-tight mb-2 group-hover:text-academy-gold transition-colors">{community.title}</h3>
                  <p className="text-stone-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Haz clic para ver detalles y unirte al grupo.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS BAR */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 -mt-10 mb-10">
        <div className="bg-academy-ocean rounded-3xl p-10 md:p-14 text-white shadow-2xl flex flex-col md:flex-row gap-8 justify-around items-center text-center">
          {[
            { icon: Calendar, label: "Fecha del Evento", value: "23 de Julio 2026", color: "text-academy-gold" },
            { icon: Monitor, label: "Horario y Canal", value: "8:00 PM vía Zoom", color: "text-academy-gold" },
            { icon: Zap, label: "Disponibilidad", value: "Solo 50 lugares", color: "text-academy-gold" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <item.icon className={`w-10 h-10 mx-auto ${item.color}`} />
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-70 mb-1">{item.label}</span>
                <strong className="text-xl md:text-2xl font-extrabold">{item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHATSAPP ACCOMPANIMENT SECTION */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            {...fadeIn}
            className="bg-green-50 rounded-3xl p-10 md:p-16 border border-green-100 relative overflow-hidden"
          >
            {/* Decorative background icon */}
            <div className="absolute -right-8 -bottom-8 opacity-5 text-green-600 rotate-12">
              <MessageCircle className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 uppercase mb-6 leading-tight">
                No estarás solo: <br className="hidden md:block" /> <span className="text-green-600">Te acompañamos en todo el proceso</span>
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                Una vez dentro de tu grupo de WhatsApp, nuestro equipo de mentores te llevará de la mano. Te enviaremos el formulario oficial de registro y te daremos las pautas clave para que tu negocio brille en la pantalla.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                {[
                  "Guía de Registro",
                  "Preparación de Pitch",
                  "Soporte Técnico"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-green-700 font-bold uppercase text-sm tracking-wider">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMMUNITY MODAL */}
      <AnimatePresence>
        {selectedCommunity && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCommunity(null)}
                className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full text-stone-500 hover:text-black transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-48 md:h-full">
                  <img 
                    src={selectedCommunity.img} 
                    alt={selectedCommunity.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-academy-ocean font-bold text-xs uppercase tracking-widest mb-2 block">Comunidad de</span>
                  <h3 className="text-3xl font-extrabold text-stone-900 uppercase mb-6">{selectedCommunity.title}</h3>
                  <div className="text-stone-600 leading-relaxed mb-8">
                    {selectedCommunity.desc}
                  </div>
                  <a 
                    href={selectedCommunity.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-600 text-white font-extrabold uppercase px-8 py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-200"
                  >
                    <MessageCircle className="w-5 h-5" /> Unirme a WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQ & LOGISTICS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          {...fadeIn}
          className="text-center text-3xl font-extrabold uppercase mb-12"
        >
          Resolvemos tus dudas
        </motion.h2>
        
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          {[
            { q: "¿Tiene costo participar?", a: "¡Es 100% gratuito! Nuestra misión es impulsar el crecimiento de tu negocio sin barreras económicas." },
            { q: "¿Es un evento presencial?", a: "No, es totalmente virtual. Podrás participar desde tu casa conectado a una sesión de Zoom, la cual será transmitida en vivo a varias plataformas globales." },
            { q: "¿Solo con estar en el grupo de WhatsApp ya podré participar?", a: "Estar en el grupo es el primer paso. Después de completar tu inscripción oficial y enviar los requisitos, confirmaremos tu lugar. Ten en cuenta que solo hay 15 lugares disponibles por categoría." },
            { q: "¿Tengo que ser graduado de la Academia?", a: "No, todos los emprendedores son bienvenidos. Si aún no eres graduado, este es el momento perfecto para conocer nuestra red y unirte a nosotros." },
            { q: "¿Debo ser miembro de la iglesia para participar?", a: "No, este evento está abierto a todo el público. Aunque nos regimos por normas de respeto y buenos modales alineados a nuestros valores, todos son bienvenidos independientemente de su afiliación." },
          ].map((faq, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-academy-gold flex gap-4 text-left"
            >
              <HelpCircle className="w-6 h-6 text-academy-ocean shrink-0" />
              <p className="text-stone-700">
                <strong className="block text-stone-900 mb-1">{faq.q}</strong>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section 
        className="relative py-32 px-6 parallax text-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(244, 245, 247, 0.9), rgba(244, 245, 247, 0.9)), url(${ASSET_FINAL_CTA_BG})` }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-3xl md:text-4xl font-extrabold text-academy-ocean uppercase mb-6 leading-tight"
          >
            Tu negocio puede crecer más <br className="hidden md:block" /> de lo que imaginas
          </motion.h2>
          <motion.p 
            {...fadeIn}
            className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto"
          >
            Creemos que cada negocio tiene el potencial de bendecir vidas. Esta feria es tu oportunidad para crecer, servir y dar el siguiente paso hacia la autosuficiencia.
          </motion.p>
          
          <a 
            href="#comunidades" 
            className="inline-block bg-academy-red text-white font-extrabold uppercase px-12 py-6 rounded-lg text-xl transition-all hover:scale-105 active:scale-95 shadow-academy hover:shadow-academy-hover"
          >
            Asegurar mi lugar en la ExpoFeria
          </a>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-10 flex items-center justify-center gap-2 text-academy-red font-black uppercase tracking-wider"
          >
            <Flame className="w-5 h-5" /> ¡Actúa hoy, el cupo es limitado!
          </motion.p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-stone-100 bg-white text-center">
        <img 
          src={ASSET_LOGO} 
          alt="Logo Academia" 
          className="h-12 mx-auto mb-8" 
          referrerPolicy="no-referrer"
        />
        <p className="text-stone-800 font-medium tracking-tight">Academia para la Creación de Empresas © 2026</p>
        <p className="text-stone-400 text-sm mt-2 font-medium italic">Cambiando vidas, una por una.</p>
      </footer>
    </div>
  );
}

