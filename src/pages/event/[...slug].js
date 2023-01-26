import ErrorAlert from "@/components/error/error-alert";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button/button";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";

function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading....</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
        return <>
            <ErrorAlert><p>Invalid Filter</p></ErrorAlert>
            <div className="center"><Button link='/event'>Show All Events</Button></div>
        </>
    }

    const filteredEvents = getFeaturedEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            <ErrorAlert><p>No events found </p></ErrorAlert>
            <div className="center"><Button link='/event'>Show All Events</Button></div>
        </>
    }

    return (
        <>
            <ResultsTitle year={numYear} month={numMonth} />
            <EventList items={filteredEvents} />
        </>
    );
}

export default FilteredEventsPage;