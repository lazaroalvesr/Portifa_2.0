import { MouseEventHandler, ReactNode } from "react"

export interface LinkRedirectProps {
    href: string
    children: ReactNode
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export interface CardProjetosProps {
    href: string
    hrefGit: string
    src: string
    titulo: string
    sobre: string
    tec: string[]
}