import ShowBanner from '@/sections/ShowBanner'
import MovieDetails from '@/sections/MovieDetails'
import Seasons from '@/components/Seasons'
import { description } from '@/components/Seasons/seasonInfo'
import { castItems } from '@/components/Seasons/seasonInfo'
import { reviewItems } from '@/components/Seasons/seasonInfo'
import { gernes } from '@/components/Seasons/seasonInfo'
import { director } from '@/components/Seasons/seasonInfo'
import { music } from '@/components/Seasons/seasonInfo'

export const metadata = {
  title: 'Show - Stranger Things',
}

export default function () {
  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
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
