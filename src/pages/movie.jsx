import MovieBanner from '@/sections/MovieBanner'
import MovieDetails from '@/sections/MovieDetails'
import { description } from '@/sections/MovieDetails/movieInfo'
import { castItems } from '@/sections/MovieDetails/movieInfo'
import { gernes } from '@/sections/MovieDetails/movieInfo'
import { director } from '@/sections/MovieDetails/movieInfo'
import { music } from '@/sections/MovieDetails/movieInfo'
import { reviewItems } from '@/sections/MovieDetails/movieInfo'

export const metadata = {
  title: 'Movie - Kantara',
}

export default function () {
  return (
    <>
      <MovieBanner />
      <MovieDetails
        description={description}
        cast={castItems}
        reviewItems={reviewItems}
        gernes={gernes}
        director={director}
        music={music}
      />
    </>
  )
}
