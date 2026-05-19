/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
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
  desc: ReactNode;
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

  const InfoBanner = () => (
    <div className="bg-academy-gold py-6 border-y-4 border-academy-ocean shadow-2xl overflow-hidden relative z-20">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-20%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center mx-4 text-academy-ocean font-black uppercase tracking-tighter text-xl md:text-3xl">
            Aquí <span className="text-white bg-academy-ocean px-3 py-1 rounded mx-2 rotate-[-2deg]">NO</span> vas a competir por un premio, este es un espacio para exponer tu negocio.
            <Zap className="mx-12 w-8 h-8 text-white fill-white" />
          </span>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-academy-ocean/20">
      {/* STICKY TOP NAVIGATION */}
      <div className="sticky top-0 z-50">
        {/* ANNOUNCEMENT BANNER */}
        <div className="bg-academy-red text-white py-3 px-6 text-center text-sm font-black uppercase tracking-widest shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Fecha límite para registrarse 5 de julio - asegura tu stand virtual en la ExpoFeria.</span>
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
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${ASSET_HERO_BG})` }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="w-full max-w-md mx-auto mb-10 opacity-70">
            <svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <g fill="none" stroke="#19C8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
                <path d="M831,640 L740,570 L714,569 L670,586 L632,576 L601,556 L529,533 L502,511 L453,499 L442,484 L405,464 L385,431 L399,425 L389,419 L400,397 L376,350 L319,297 L329,303 L327,297 L313,293 L311,279 L269,259 L268,247 L278,239 L234,206 L234,187 L215,185 L182,152 L153,96 L153,79 L98,57 L107,118 L161,169 L166,191 L195,230 L193,219 L201,226 L230,287 L229,302 L255,312 L267,328 L267,340 L250,350 L240,328 L185,290 L184,281 L182,287 L184,255 L149,223 L151,216 L137,225 L93,192 L115,187 L126,194 L116,186 L124,168 L72,126 L22,20"/>
                <path d="M1000,109 L984,101 L963,107 L972,104 L968,98 L937,111 L946,108 L937,93 L933,108 L908,104 L886,113 L869,105 L863,116 L883,112 L881,121 L899,122 L884,132 L906,145 L893,153 L897,147 L882,135 L869,132 L871,146 L861,139 L848,148 L836,130 L826,134 L818,123 L802,133 L755,128 L754,118 L755,128 L726,139 L735,132 L719,127 L725,139 L707,155 L681,167 L688,162 L667,160 L675,169 L650,178 L650,189 L640,187 L649,193 L644,205 L632,207 L643,207 L639,221 L652,250 L640,281 L643,267 L631,273 L628,359 L651,423 L692,486 L713,486 L737,507 L802,487 L834,491 L837,485 L828,484 L853,465 L866,410 L933,391 L968,392 L977,407 L946,455 L956,458 L943,503 L936,482 L925,497 L935,498 L931,543 L908,578 L933,585 L946,577 L1000,578"/>
                <path d="M27,35 L103,29 L100,36 L217,74 L306,74 L306,60 L362,61 L409,99 L423,131 L457,150 L465,151 L490,122 L519,125 L578,197 L591,235 L643,254 L652,250"/>
              </g>

              <g stroke="#7FEAFF" strokeWidth="1.5" opacity="0.65">
                <line x1="250" y1="180" x2="430" y2="300"/>
                <line x1="430" y1="300" x2="610" y2="260"/>
                <line x1="610" y1="260" x2="760" y2="360"/>
                <line x1="760" y1="360" x2="900" y2="430"/>
                <line x1="430" y1="300" x2="520" y2="520"/>
                <line x1="520" y1="520" x2="720" y2="560"/>
                <line x1="610" y1="260" x2="720" y2="560"/>
                <line x1="300" y1="420" x2="520" y2="520"/>
              </g>

              <g fill="#FFFFFF" filter="url(#glow)">
                <circle cx="250" cy="180" r="6"/>
                <circle cx="430" cy="300" r="8"/>
                <circle cx="610" cy="260" r="7"/>
                <circle cx="760" cy="360" r="7"/>
                <circle cx="900" cy="430" r="6"/>
                <circle cx="300" cy="420" r="6"/>
                <circle cx="520" cy="520" r="8"/>
                <circle cx="720" cy="560" r="7"/>
              </g>
            </svg>
          </div>
          <p className="flex items-center justify-center gap-2 text-academy-gold font-semibold uppercase tracking-[2px] mb-6 animate-pulse">
            <Users className="w-5 h-5" /> +500 emprendedores ya han presentado su negocio
          </p>
          
          <h1 className="text-2xl md:text-5xl font-black uppercase leading-[1.1] mb-8 tracking-tight">
            Ser el mejor en lo que haces <br className="hidden md:block" /> 
            <span className="text-academy-gold">no te garantiza el éxito</span>
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

      <InfoBanner />

      {/* EVENT DAY EXPERIENCE */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <img 
              src="https://i.ibb.co/x8fZWDB9/image-landing.png" 
              alt="ExpoFeria 2026" 
              className="w-full rounded-3xl shadow-2xl border-b-8 border-academy-gold"
              referrerPolicy="no-referrer"
            />
          </motion.div>
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
                  El cierre de convocatoria es el <strong>sábado 05 de julio</strong>. No dejes que la oportunidad de conectar con aliados estratégicos se escape por esperar al último minuto.
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
                  <p className="text-2xl font-black uppercase text-academy-gold">jueves 23 de julio | 8:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-academy-ocean text-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 tracking-tighter leading-none">
              Pasos a seguir <br /> para participar
            </h2>
            <div className="w-24 h-2 bg-academy-gold mb-8 shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
            <p className="text-academy-sky font-black uppercase tracking-[0.2em] text-xs md:text-sm max-w-lg">
              Un proceso de acompañamiento diseñado para llevar tu negocio al siguiente nivel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-12" />
            
            {[
              { step: "01", title: "Elige tu Comunidad", desc: "Identifica el sector que mejor represente a tu negocio.", icon: Globe },
              { step: "02", title: "Únete a WhatsApp", desc: "Recibe el link de registro y acompañamiento directo.", icon: MessageCircle },
              { step: "03", title: "Registro Oficial", desc: "Completa los requisitos con nuestra guía paso a paso.", icon: CheckCircle },
              { step: "04", title: "Gran Evento Zoom", desc: "Presenta tu marca ante México el 23 de julio a las 8PM.", icon: Monitor },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-academy-gold text-academy-ocean rounded-full flex items-center justify-center font-black text-3xl mb-6 shadow-xl shadow-academy-gold/30 border-4 border-white/20 ml-auto">
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
          <p className="text-center text-stone-500 mb-8 max-w-2xl mx-auto">
            Selecciona tu sector para unirte al grupo de WhatsApp correspondiente y participar en la <strong>ExpoFeria</strong>.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="flex flex-col items-center mb-12"
          >
            <div className="bg-academy-gold text-academy-ocean px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 border-2 border-white">
              <Zap className="w-3 h-3 md:w-4 md:h-4 fill-academy-ocean" />
              <span>Haz clic en tu categoría para comenzar hoy mismo</span>
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-academy-gold to-transparent mt-2" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMUNITIES.map((community, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.01, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  delay: idx * 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={() => setSelectedCommunity(community)}
                className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white transition-shadow hover:shadow-academy-gold/20"
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

      <InfoBanner />

      {/* LOGISTICS BAR */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 -mt-10 mb-10">
        <div className="bg-academy-ocean rounded-3xl p-10 md:p-14 text-white shadow-2xl flex flex-col md:flex-row gap-8 justify-around items-center text-center">
          {[
            { icon: Calendar, label: "Fecha del Evento", value: "23 de julio 2026", color: "text-academy-gold" },
            { icon: Monitor, label: "Horario y Canal", value: "8:00 PM vía Zoom", color: "text-academy-gold" },
            { icon: Zap, label: "Disponibilidad", value: "Solo 15 lugares por categoría", color: "text-academy-gold" },
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

      {/* COMPARISON SECTION (SÍ vs NO) */}
      <section className="py-20 md:py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-academy-ocean">
              Claridad Total: <br /> <span className="text-academy-red">Lo que SÍ es</span> vs <span className="text-stone-400">Lo que NO es</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto font-medium">
              Queremos que participes con la mentalidad correcta para aprovechar esta vitrina al máximo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LO QUE SÍ ES */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-academy-ocean/5 border-t-8 border-academy-ocean"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-academy-ocean rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase text-academy-ocean tracking-tight">Lo que SÍ es ExpoFeria</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { t: "Una Vitrina Nacional", d: "Un espacio diseñado para que cientos de personas en todo México conozcan tu marca y tus productos." },
                  { t: "Networking Estratégico", d: "Oportunidad real de conectar con otros empresarios, posibles aliados y nuevos clientes." },
                  { t: "Estatus y Posicionamiento", d: "Aparecer en el escenario oficial de la Academia eleva la profesionalidad de tu negocio." },
                  { t: "Acompañamiento Mentorizado", d: "Te preparamos para que tu presentación (pitch) sea efectiva, clara y profesional." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle className="w-5 h-5 text-academy-ocean" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{item.t}</h4>
                      <p className="text-stone-500 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LO QUE NO ES */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-stone-200/50 border-t-8 border-stone-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-stone-400" />
                </div>
                <h3 className="text-2xl font-black uppercase text-stone-400 tracking-tight">Lo que NO es</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { t: "Un Concurso de Premios", d: "Aquí NO vas a competir por un premio en efectivo ni hay ganadores o perdedores." },
                  { t: "Una Evaluación Técnica", d: "No venimos a juzgar tu modelo de negocio, sino a darte un escenario para mostrarlo." },
                  { t: "Un Examen de Aprobación", d: "No necesitas 'pasar una prueba' para estar aquí, solo ganas de exponer tu marca." },
                  { t: "Una Reunión de Amigos", d: "Es un evento profesional enfocado 100% en el crecimiento de tu comunidad empresarial." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 opacity-70">
                    <div className="mt-1 shrink-0">
                      <X className="w-5 h-5 text-academy-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 line-through decoration-academy-red/30">{item.t}</h4>
                      <p className="text-stone-500 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            {...fadeIn}
            className="mt-16 bg-academy-ocean text-white p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-academy-gold" />
            <p className="text-lg md:text-xl font-medium">
              "El éxito de tu participación no depende de un premio, <br className="hidden md:block" /> 
              <span className="text-academy-gold font-black uppercase tracking-wider">sino de cuántas personas logran recordar tu marca mañana."</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMMUNITY MODAL */}
      <AnimatePresence>
        {selectedCommunity && (
          <div 
            onClick={() => setSelectedCommunity(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-2xl cursor-default"
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
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          {...fadeIn}
          className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter leading-none text-academy-ocean"
        >
          Preguntas <br className="md:hidden" /> Frecuentes
        </motion.h2>
        <div className="w-24 h-2 bg-academy-gold mb-16 shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
        
        <div className="max-w-3xl mx-auto mb-20 space-y-4 w-full">
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

      <InfoBanner />

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

