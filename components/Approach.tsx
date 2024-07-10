"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-black">
        Nuestro <span className="text-[#f0c200]">acercamiento</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planificación y Estrategia"
          icon={<AceternityIcon order="Fase 1" />}
          des="Trabajaremos juntos para establecer una estrategia sólida que aborde los desafíos específicos de su proyecto. Definiremos objetivos claros, identificaremos el público objetivo adecuado y diseñaremos las funcionalidades esenciales. Este proceso incluirá la estructura del proyecto, la navegación y los requisitos de contenido necesarios para alcanzar el éxito."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#A8783E] overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Desarrollo y Actualización de Progreso"
          icon={<AceternityIcon order="Fase 2" />}
          des="Una vez acordada la estrategia, nos sumergiremos en el desarrollo del proyecto. Desde los primeros conceptos hasta el código finalizado, le mantendremos informado en cada etapa del proceso. Nuestro enfoque es garantizar que cada componente del proyecto refleje sus requisitos y funcione de manera óptima."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#BF8801] overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Desarrollo y Lanzamiento"
          icon={<AceternityIcon order="Fase 3" />}
          des="Aquí es donde convertimos las ideas en realidad. Basados en el diseño y la estrategia acordados, traduciremos todo en código funcional y desarrollaremos su solución desde cero. Nos aseguramos de que cada fase del desarrollo esté alineada con su visión y objetivos, proporcionando una solución robusta y eficiente para su negocio."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#D19B45] overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem"
      style={{
        background: "rgb(89, 64, 0)",
        backgroundColor:
          "linear-gradient(90deg, rgba(89,64,0,1) 0%, rgba(115,80,0,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0  group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#FFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#000_50%,#FFF_100%)]" />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#f0c200] bg-opacity-70 border-2 border-[#FFBD59] border-opacity-50 px-10 py-5 text-[20px] font-medium text-white backdrop-blur-2xl gap-2'>
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
