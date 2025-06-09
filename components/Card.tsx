import Image from "next/image"
import Link from "next/link";

type CardProps = {
    imdbID: string;
    image_url: string;
    title: string;
    type: string;
    year: string;
};

const Card = ({ imdbID, image_url, title, type, year }: CardProps) => {
    return(
        // <Link href={`https://www.imdb.com/title/${imdbID}`} target="_blank" className="w-32 md:w-40 group">
        //     <div className="rounded-md w-full h-60 mb-2 overflow-hidden">
        //         <Image
        //         src={image_url === 'N/A' ? '/fallback.jpg' : image_url}
        //         width={1000}
        //         height={1000}
        //         className="w-full object-cover h-full transition-all duration-300 ease-in-out group-hover:scale-105"
        //         alt="Image"
        //         />
        //     </div>
        //     <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-500">{title}</p>
        //     <div className="flex gap-4">
        //         <p className="text-sm transition-colors duration-300">{type}</p>
        //         <p className="text-sm transition-colors duration-300">{year}</p>
        //     </div>
        // </Link>
        <Link href={`https://www.imdb.com/title/${imdbID}`} target="_blank" className="group">
            <div className="rounded-md w-full h-60 lg:h-80 mb-2 overflow-hidden">
                <Image
                src={image_url === 'N/A' ? '/fallback.jpg' : image_url}
                width={1000}
                height={1000}
                className="w-full object-cover h-full transition-all duration-300 ease-in-out group-hover:scale-105"
                alt="Image"
                />
            </div>
            <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-500">{title}</p>
            <div className="flex gap-4">
                <p className="text-sm transition-colors duration-300">{type}</p>
                <p className="text-sm transition-colors duration-300">{year}</p>
            </div>
        </Link>
    )
}

export default Card