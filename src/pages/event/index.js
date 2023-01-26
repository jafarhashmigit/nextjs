import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../dummy-data";

function AllEventPages() {
    const events =getAllEvents();
    const router = useRouter()

    function onSearch(selectedYear, selectedMonth) {
        const fullPath = `/event/${selectedYear}/${selectedMonth}`
        router.push(fullPath)
    }
    return ( 
        <>
            <div>
                <EventsSearch onSearch={onSearch}/>
                <EventList items={events} />
            </div>
        </>
     );
}

export default AllEventPages;