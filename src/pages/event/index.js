import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import Head from 'next/head';
// import { getAllEvents } from "../dummy-data";

function AllEventPages(props) {
    // const events =getAllEvents();
    const { events } = props;
    const router = useRouter()

    function onSearch(selectedYear, selectedMonth) {
        const fullPath = `/event/${selectedYear}/${selectedMonth}`
        router.push(fullPath)
    }
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
                <EventsSearch onSearch={onSearch}/>
                <EventList items={events} />
            </div>
        </>
     );
}

export async function getStaticProps() {
    const events = await getAllEvents();
  
    return {
      props: {
        events: events,
      },
      revalidate: 60
    };
  }

export default AllEventPages;