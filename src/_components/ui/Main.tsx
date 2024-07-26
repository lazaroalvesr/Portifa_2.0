import { TypewriterEffect } from "./typewriter-effect"

export const Main = () => {
    const words = [
        {
            text: "Lázaro",
        },
        {
            text: "Alves",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "R",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <section className="w-full flex justify-center m-auto h-[500px] items-center text-center px-5">
            <div className="flex flex-col gap-3 max-w-[560px] w-full m-auto">
                <TypewriterEffect words={words} />
                <h1 className="text-xl lg:text-xl font-bold">Desenvolvedor Front-End ReactJS</h1>
                <h2 className="lg:text-lg text-gray-600 dark:text-gray-400 mt-2">Transformando Ideias em Realidade com Código</h2>
            </div>
        </section>
    )
}
