import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='inicio'>
      <div className='h-screen w-full dark:bg-grid-black/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center' />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-black'>
            Magia Digital con Software Solutions SAS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transformando Ideas en Soluciones Integrales"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black">
            ¡Hola! Somos Software Solutions SAS, ubicada en Colombia. Nos especializamos en crear soluciones digitales innovadoras que impulsan el crecimiento y la eficiencia de tu negocio.
          </p>

          <a href="#about">
            <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#000_50%,#FFF_100%)]" />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#f0c200] bg-opacity-70 border-2 border-[#FFBD59] border-opacity-50 px-7 text-sm font-medium text-white backdrop-blur-2xl gap-2'>
                Observa nuestro trabajo
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero