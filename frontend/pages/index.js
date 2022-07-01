import Head from 'next/head'
// import Link from 'next/link'
import { useQuery } from 'urql'
import { IMAGE_QUERY } from '../lib/query'

export default function Home() {
  const [results] = useQuery({ query: IMAGE_QUERY })
  const { data, fetching, error } = results

  if (fetching) return <p>Loading....</p>
  if (error) return <p>Error! {error.message}</p>
  console.log(results)
  return (
    <div>
      <Head>
        <title>[◉"] Saad-Photography</title>
        <meta
          name="description"
          content="Developer? Photographer? Engineer? Chemist? We'll never know ¯\_(ツ)_/¯"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> Next Start </h1>
        {/* <Link href={'/about'}>About</Link> */}
      </main>

      <footer></footer>
    </div>
  )
}
