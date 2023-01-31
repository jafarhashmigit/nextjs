import ErrorAlert from "@/components/error/error-alert";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button/button";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";
import Head from 'next/head';
import useSWR from 'swr';
import { useEffect, useState } from "react";

function FilteredEventsPage() {
    const [loadedEvents, setLoadedEvents] = useState();
    const router = useRouter();
    const filterData = router.query.slug;

    const { data, error } = useSWR(
        'https://nextjs-42ea6-default-rtdb.firebaseio.com/events.json',
        (url) => fetch(url).then(res => res.json())
    );

    useEffect(() => {
        if (data) {
          const events = [];
    
          for (const key in data) {
            events.push({
              id: key,
              ...data[key],
            });
          }
          console.log(events)
          setLoadedEvents(events);
        }
      }, [data]);

      
  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={`A list of filtered events.`} />
    </Head>
  );


      if (!loadedEvents) {
        {pageHeadData}
        return <p className='center'>Loading...</p>;
      }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    
  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name='description'
        content={`All events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12 ||
        error
    ) {
        return <>
             {pageHeadData}
            <ErrorAlert><p>Invalid filter. Please adjust your values!</p></ErrorAlert>
            <div className="center"><Button link='/event'>Show All Events</Button></div>
        </>
    }

    // const filteredEvents = getFeaturedEvents({
    //     year: numYear,
    //     month: numMonth
    // })
    const filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === numYear &&
          eventDate.getMonth() === numMonth - 1
        );
      });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            {pageHeadData}
            <ErrorAlert><p>No events found </p></ErrorAlert>
            <div className="center"><Button link='/event'>Show All Events</Button></div>
        </>
    }

    return (
        <>
            {pageHeadData}
            <ResultsTitle year={numYear} month={numMonth} />
            <EventList items={filteredEvents} />
        </>
    );
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
export default FilteredEventsPage;