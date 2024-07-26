'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export const Footer = () => {
    const [anoCriacao, setAnoCriacao] = useState("");

    useEffect(() => {
        const obterAnoAtual = () => {
            const data = new Date();
            return data.getFullYear().toString();
        };

        setAnoCriacao(obterAnoAtual());
    }, []);


    return (
        <footer className="mt-40 pb-8">
            <div className="max-w-7xl m-auto flex lg:flex-row md:flex-row lg:px-0 px-7 flex-col gap-8 justify-between items-center relative z-50">
                <div className="flex items-center text-nowrap gap-3  w-32">
                    <Image
                        src="/icon/code-dots.svg"
                        alt="Icone chave de codigo"
                        width={20}
                        height={20}
                        className="w-8"
                    />
                    <h1 className="text-2xl font-bold w-8">Alves R</h1>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <Link href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/" target=" blank">
                            <Image
                                src="/icon/linkedin.svg"
                                alt="Icone Linkedin"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="mailto:lazaroalves12355@gmail.com">
                            <Image
                                src="/icon/mail.svg"
                                alt="Icone Linkedin"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="https://github.com/lazaroalvesr" target="_blank">
                            <Image
                                src="/icon/github.svg"
                                alt="Icone Linkedin"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </ul>
                </div>
                <p className="text-sm ">© {anoCriacao} Alves R. Alguns direitos reservados.</p>
            </div>
        </footer >
    )
}