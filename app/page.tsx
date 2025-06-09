'use client';
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import SkeletonCard from "@/components/SkeletonCard"
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react'
import { Movie } from '@/types/Movie'
import { FaEllipsisH } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isYear, setIsYear] = useState(0);
  const [isType, setIsType] = useState('movie');

  // UseState get api
  const [movies, setMovies] = useState<Movie[]>([])
  const [isTitle, setIsTitle] = useState('John Wick')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchMoviesbyPage = async (pageNum: number) => {
    setLoading(true)
    try {
      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found in environment variables');
      }
      let res
        if (isYear != 0) {
          res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${isTitle}&type=${isType}&y=${isYear}&page=${pageNum}`)
        } else {
          res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${isTitle}&type=${isType}&page=${pageNum}`)
        }
      const data = await res.json()

      if (data.Search) {
        setMovies((prev) => [...prev, ...data.Search])
        setPage(pageNum)
        // OMDb biasanya batasi 10 per page, dan totalResults menunjukkan total item
        if (movies.length + data.Search.length >= parseInt(data.totalResults)) {
          setHasMore(false)
        }
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setPage(1)
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
        if (!apiKey) {
          throw new Error('API key not found in environment variables');
        }
        let res
        if (isYear != 0) {
          res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${isTitle}&type=${isType}&y=${isYear}`)
        } else {
          res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${isTitle}&type=${isType}`)
        }
        const data = await res.json()
        if (data.Search) {
          const total = parseInt(data.totalResults)
          setMovies(data.Search)
          if (data.Search.length >= total) {
            setHasMore(false)
          } else {
            setHasMore(true)
          }
        } else {
          setMovies([])
          setHasMore(false)
        }
        setMovies(data.Search || [])
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [isTitle, isType, isYear])

  const getSearch = (keyword: string) => {
    setIsTitle(keyword)
  }

  return (
    <div className="w-5/6 m-auto mt-10 flex flex-col gap-9">
      <Navbar onSend={getSearch}/>
      <HeroSection/>
      <div className="flex bg-slate-900 w-full p-5 rounded justify-between items-center gap-3 flex-col sm:flex-row">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between items-center gap-1 font-medium text-white focus:outline-none hover:text-blue-500 transition ease-in-out duration-150 cursor-pointer"
          >
            {isYear == 0? 'All Years' : isYear}
            <FiChevronDown
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button onClick={() => setIsYear(0)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                    All Years
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsYear(2025)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                    2025
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsYear(2024)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                    2024
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsYear(2023)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                    2023
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-3 bg-[#0D1117] p-2 rounded">
          <button onClick={() => setIsType('movie')} className={`text-sm ${isType == 'movie'? 'text-blue-500' : ''} cursor-pointer`}>Movie</button>
          <button onClick={() => setIsType('series')} className={`text-sm ${isType == 'series'? 'text-blue-500' : ''} cursor-pointer`}>Series</button>
          <button onClick={() => setIsType('episode')} className={`text-sm ${isType == 'episode'? 'text-blue-500' : ''} cursor-pointer`}>Episode</button>
        </div>
      </div>
      {movies.length == 0 && !loading && (<h1 className="text-center">Movie Could Not Found</h1>)}
      {/* <div className="flex flex-wrap gap-6 justify-between md:justify-center"> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {loading
          ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => (
              <Card
                key={movie.imdbID}
                imdbID={movie.imdbID}
                image_url={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
              />
            ))
        }
        {hasMore && (
          <button onClick={() => fetchMoviesbyPage(page + 1)} disabled={loading} className="gap-2 w-32 lg:w-56 h-60 lg:h-80 flex flex-col justify-center items-center group bg-slate-900 rounded hover:bg-blue-600 disabled:opacity-50 transition-colors duration-300 ease-in-out cursor-pointer">
            <FaEllipsisH size={24} />
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
      {/* {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => fetchMoviesbyPage(page + 1)}
            disabled={loading}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-950 text-white rounded disabled:opacity-50 w-full cursor-pointer transition-colors duration-300 ease-in-out"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )} */}
      <Footer/>
    </div>
  );
}
