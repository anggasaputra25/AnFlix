import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return(
        <Link href={'https://www.imdb.com/title/tt6146586'} id='movie' className='h-52 md:h-96 rounded-md overflow-hiddens relative overflow-hidden group'>
            <div className='absolute z-10 bottom-1/4 ml-5'>
                <h1 className='text-xl md:text-5xl mb-5 font-bold'>John Wick: Chapter 3 - Parabellum</h1>
                <div className="flex gap-5">
                    <p>Movie</p>
                    <p>2019</p>
                    <p>2h 11m</p>
                </div>
            </div>
            <Image src="/images/hero-section.jpg" alt="John Wick" width={1000} height={1000} className="w-full h-full sm:h-auto object-cover transition-transform duration-500 group-hover:scale-105 absolute" />
        </Link>
    )
}

export default HeroSection