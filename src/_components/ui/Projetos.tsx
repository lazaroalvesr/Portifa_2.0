'use client'

import Image from "next/image"
import { BackgroundBeams } from "./background-beams"
import { CardProjetos } from "./CardProjetos"

export const Projetos = () => {
    return (
        <section id="projetos" className="lg:mt-60 mt-40 md:mt-72 w-full lg:p-0 p-5 max-w-7xl m-auto relative z-40">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h1 className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Alguns projetos que já desenvolvi</h1>
                </div>
                <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:ml-10 mt-12 m-auto lg:m-0 lg:grid-cols-3 lg:w-96 gap-x-8 lg:gap-x-96 gap-y-8 lg:mt-12 ">
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/Arruda_Bombas"
                        href="https://land-page-gym.vercel.app/"
                        src="/img/LandPage_GYM.png"
                        titulo="BestGym"
                        sobre="Nosso site foi desenvolvido para apresentar os produtos e serviços que oferecemos, assim como as características exclusivas que tornam a nossa academia especial"
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                    <CardProjetos
                        href="https://github.com/lazaroalvesr/Api_Car"
                        hrefGit="https://github.com/lazaroalvesr/Api_Car"
                        src="/img/Api_Car.png"
                        titulo="API - Gestão de loja de carros"
                        sobre="API completa para gestão de loja de carros. Cria, edita, visualiza e exclui registros, busca por ID e categoriza veículos."
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/LandPage_GYM"
                        href="https://arrudabombas.com.br/"
                        src="/img/Arruda_Bombas.png"
                        titulo="Arruda Bombas"
                        sobre="O site foi criado para mostrar os produtos e serviços da empresa, como suas bombas de concreto, e facilitar o contato com os clientes."
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                </div>
            </div>
            <BackgroundBeams />
        </section>
    )
}