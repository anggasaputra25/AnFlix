import { Audiowide } from 'next/font/google'
import Link from 'next/link'
import { FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa'

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-audiowide',
})

const Footer = () => {
    return(
        <div className="mt-32">
            <div className="flex flex-wrap justify-between gap-y-8">
                <div className='flex flex-col gap-3 w-1/2 md:w-auto px-3'>
                    <h2 className={`${audiowide.className} text-3xl`}>An<span className="text-blue-500">Flix</span></h2>
                    <p className='text-sm'>Movies & Series, Anime, <br/> OMDb Api.</p>
                    <div className='flex gap-5'>
                        <Link href={'https://github.com/anggasaputra25'}><FaGithub className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out' size={24} /></Link>
                        <Link href={'https://www.instagram.com/anggasaputra.07/'}><FaInstagram className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out' size={24} /></Link>
                        <Link href={'https://www.tiktok.com/@anggatime'}><FaTiktok className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out' size={24} /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-1/2 md:w-auto px-3'>
                    <p className='font-bold'>AnFlix</p>
                    <Link href={'https://anggasaputra.vercel.app/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>About Me</Link>
                    <Link href={'https://anggasaputra.vercel.app/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>My Profile</Link>
                </div>
                <div className='flex flex-col gap-3 w-1/2 md:w-auto px-3'>
                    <p className='font-bold'>Browse</p>
                    <Link href={'#movie'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Home</Link>
                    <Link href={'https://www.imdb.com/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>IMDb</Link>
                </div>
                <div className='flex flex-col gap-3 w-1/2 md:w-auto px-3'>
                    <p className='font-bold'>Help</p>
                    <Link href={'/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Account & Billing</Link>
                    <Link href={'/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Plans & Pricing</Link>
                    <Link href={'/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Supported Devices</Link>
                </div>
            </div>
            <div className='bg-slate-900 h-0.5 my-10' />
            <div className="flex justify-center md:justify-between mb-10 flex-wrap gap-y-5">
                <p className='text-sm text-center md:text-left w-full md:w-1/2'>© copyright 2025 AnFlix</p>
                <div className="flex gap-10 justify-center md:justify-end w-full md:w-1/2">
                    <Link href={'/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Privacy policy</Link>
                    <Link href={'/'} className='text-sm hover:text-blue-500 transition-colors duration-300 ease-in-out'>Terms and conditions</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer