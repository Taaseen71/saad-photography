import Head from 'next/head'
// import Link from 'next/link'
import { useQuery } from 'urql'
import { IMAGE_QUERY } from '../lib/query'
import Images from '../components/Images'
import { Gallery } from '../styles/Gallery'

export default function Home() {
  const [results] = useQuery({ query: IMAGE_QUERY })

  const { data, fetching, error } = results
  if (fetching) return <p>Loading....</p>
  if (error) return <p>Error! {error.message}</p>
  const images = data.images.data

  return (
    <div>
      <Head>
        <title>Saad-Photography</title>
        <meta
          name="description"
          content="Developer? Photographer? Engineer? Chemist? I'll never know ¯\_(ツ)_/¯"
        />
        <link rel="icon" href="/dslr.png" />
      </Head>

      <main>
        <h1>Saad's Photography</h1>
        <Gallery>
          {images.map((image) => {
            return <Images images={image} key={image.attributes.createdAt} />
          })}
        </Gallery>
        {/* <Link href={'/about'}>About</Link> */}
      </main>

      <footer></footer>
    </div>
  )
}
