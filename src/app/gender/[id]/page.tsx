import MovieContainer from "@/components/MovieContainer"
import { getDiscoverMovies } from "@/lib/getMovies"

interface Props {
  params:{
    id:string
  }
  searchParams:{
    gender:string
  }

}

const GenderPage = async({ params:{ id } , searchParams: {gender} }:Props) => {
 
  const movies = await getDiscoverMovies(id)
  
  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">Result for {gender}</h2>
      <MovieContainer movies={movies} title="Gender" isVertical={true}/>
    </div>
  )
}

export default GenderPage