import ErrorAlert from "@/components/error/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { useRouter } from "next/router";
import { getEventById } from "../dummy-data";

function EventDetailPage({eventId}) {

    const event = getEventById(eventId);

    if(!event){
        return <ErrorAlert><p>No event found !</p></ErrorAlert>
    }

    return ( 
        <>
        <EventSummary title ={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}  />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        </>
     );
}
EventDetailPage.getInitialProps = async (context) => {
    // context.query is the object of query params
    const { eventId } = context.query
    return { eventId }
}

export default EventDetailPage;