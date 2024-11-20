import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Righteous({ subsets: ['latin'], weight: '400' })

export default function Logo() {
    return (
        <Link href="/" className={`flex gap-2 items-center ${font.className}`}>
            <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer"
            />
            <h1 className="flex-col flex items-center text-lg leading-5 uppercase">
                <div>Convit<span className="text-blue-500">3</span></div>
                <div>Digital</div>
            </h1>
        </Link>
    )
}
