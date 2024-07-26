"use client"

import Image from "next/image"
import { BackgroundBeams } from "./background-beams"
import Link from "next/link"

export const Contato = () => {
    return (
        <section className="mt-32 w-full lg:p-0 p-5 max-w-7xl m-auto justify-center flex items-center" id="contato">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="lg:text-2xl flex gap-4">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Vamos Conversar</h1>
                </div>
                <div className="items-center flex flex-col">
                    <p className="text-3xl mt-4 font-bold">Faça contato comigo</p>
                    <div className="flex gap-4 m-auto items-centerc justify-center mt-8">
                        <Link href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/">
                            <Image
                                src="/icon/linkedin.svg"
                                alt="Icone Linkedin"
                                width={50}
                                height={50}
                            />
                        </Link>
                        <Link href="mailto:lazaroalves12355@gmail.com">
                            <Image
                                src="/icon/mail.svg"
                                alt="Icone Linkedin"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    )
}