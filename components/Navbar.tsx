'use client'
import { Audiowide } from 'next/font/google'
import { FiSearch, FiLogIn } from 'react-icons/fi';
import Link from "next/link"
import { useState } from 'react';

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-audiowide',
})

type Props = {
    onSend: (keyword: string) => void
}

const Navbar = ({ onSend }: Props) => {
    const [searchTerm, setSearchTerm] = useState('John Wick');

    return(
        <nav className="flex justify-between items-center flex-col gap-3 md:flex-row">
            <h2 className={`${audiowide.className} text-3xl`}>An<span className="text-blue-500">Flix</span></h2>
            <div className="hidden md:flex gap-5">
                <Link href={'/'} className='hover:text-blue-500 transition ease-in-out duration-150'>Home</Link>
                <Link href={'https://www.imdb.com/'} className='hover:text-blue-500 transition ease-in-out duration-150'>IMDb</Link>
            </div>
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-5 pr-12 py-2 rounded-md focus:outline-none bg-slate-900 text-white"
                />
                <button
                    onClick={() => onSend(searchTerm)}
                    type="submit"
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-500 rounded hover:text-blue-700 transition ease-in-out duration-150"
                >
                    <FiSearch size={20} />
                </button>
            </div>
            <Link href={'/'} className="hidden lg:flex gap-2 items-center">
                <p>Sign In</p>
                <FiLogIn size={20} className='text-blue-500' />
            </Link>
        </nav>
    )
}
export default Navbar