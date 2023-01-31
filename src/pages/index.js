import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import { getFeaturedEvents } from './dummy-data'
import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/helpers/api-util'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
    <Head>
        <title>NextJS Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <div>
        <EventList items={props.events} />
      </div>
    </>
  )
}
export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props:{
      events: featuredEvents
    }
  }
}