'use client'

import Link from "next/link"

import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
    href: string,
    name: string
}

export const ActiveLink = ({ href, name }: Props) => {

    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={`text-base capitalize ${style.link}  ${ (pathname.split('/')[2] === href) && style['active-link']} font-normal rounded-lg flex items-center p-2  group`}
        >
            <span className="ml-3">{name}</span>
        </Link>

    )
}
