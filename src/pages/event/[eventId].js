import ErrorAlert from "@/components/error/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
// import { getEventById } from "../dummy-data";

function EventDetailPage(props) {

    // const event = getEventById(eventId);

    const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }


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
        <Comments eventId={event.id} />
        
        </>
     );
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
  
    const paths = events.map(event => ({ params: { eventId: event.id } }));
  
    return {
      paths: paths,
      fallback: 'blocking'
    };
  }

  export async function getStaticProps(context) {
    const eventId = context.params.eventId;
  
    const event = await getEventById(eventId);
  
    return {
      props: {
        selectedEvent: event
      },
      revalidate: 30
    };
  }
// EventDetailPage.getInitialProps = async (context) => {
//     // context.query is the object of query params
//     const { eventId } = context.query
//     return { eventId }
// }

export default EventDetailPage;