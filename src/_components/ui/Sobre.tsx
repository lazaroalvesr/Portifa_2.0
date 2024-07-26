'use client'

import Image from "next/image"
import { ItensListaTec } from "./ItensListaTec"
import { BackgroundBeams } from "./background-beams"

export const Sobre = () => {
    return (
        <section className="mt-32 lg:max-w-7xl pl-4 m-auto relative -z-20" id="sobre">
            <div className="flex lg:flex-row flex-col md:flex-row ">
                <div className="flex flex-col">
                    <h1 className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Sobre Mim</h1>
                    <div className="lg:w-[700px] w-[380px]    mt-12  ml-10 text-[#979797]">
                        <p className="pb-4">
                            Desenvolvedor Front-End ReactJS com 2 ano de
                            experiência. Sou especializado em HTML, CSS,
                            JavaScript, TypeScript, ReactJS, Next.js,
                            Tailwind CSS e Styled-Components. Além disso,
                            possuo habilidades em Node.js, Fastify, SQL,
                            PostgreSQL e Prisma.
                        </p>
                        <p>
                            Com um forte conhecimento na concepção e implementação
                            de soluções, estou comprometido em entregar resultados
                            de alta qualidade e impactantes para cada projeto.
                            Minha abordagem é orientada para a inovação e a
                            excelência, sempre buscando criar experiências
                            significativas e eficientes.
                        </p>
                    </div>
                    <div className="pt-4 ml-10">
                        <p>Algumas tecnologias que tenho trabalhado <span className="font-bold">recentemente</span>:</p>
                        <div className="grid lg:grid-cols-2 w-[450px]">
                            <ItensListaTec text="Javascript (ES6++)" />
                            <ItensListaTec text="React" />
                            <ItensListaTec text="Next.js" />
                            <ItensListaTec text="Typescript" />
                            <ItensListaTec text="Node.js" />
                            <ItensListaTec text="PostgreSQL " />
                        </div>
                    </div>
                </div>
                {/* <div className="border border-blue-500 rounded-full m-auto p-2 lg:ml-32 w-72 mt-[20px] md:mt-32 lg:mt-20">
                    <Image
                        src="/img/foto.jpg"
                        alt="Foto"
                        width={300}
                        height={90}
                        className="w-72 rounded-full"
                    />
                </div> */}
            </div>
            <BackgroundBeams />
        </section>
    )
}