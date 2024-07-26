import Image from "next/image"

export const ItensListaTec = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2 mt-4 -ml-2">
            <Image
                src="/icon/send.svg"
                alt="Icone de envio"
                width={25}
                height={25}
                className="transform rotate-45"
            />
            <p>{text}</p>
        </div>
    )
}