import Link from "next/link";
import Button from "../ui/button/button";
import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

function EventItem(props) {
    const {title, image, date, location, id} = props;
    // const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
    //     day: "numaric",
    //     month: "long",
    //     year: "numaric"
    // })
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/event/${id}`;
    return <li className={classes.item}>
        <img src={'/'+image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{date}</time>
                </div>
                <div className={classes.address}> 
                <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
          
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span>
                </Button>
            </div>
        </div>
    </li>;
}

export default EventItem;