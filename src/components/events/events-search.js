import { useRef } from "react";
import Button from "../ui/button/button";
import classes from "./events-search.module.css"

function EventsSearch(props) {
    const yearRef = useRef();
    const monthRef = useRef();
    const submintHandler=(event)=>{
        event.preventDefault();

        const selectedYear = yearRef.current.value;
        const selectedMonth = monthRef.current.value;
        props.onSearch(selectedYear, selectedMonth);
    }
    return ( 
        <>
            <form className={classes.form} onSubmit={submintHandler}>
               <div className={classes.controls}>
               <div className={classes.control}>
                    <lable htmlFor="year">Year</lable>
                    <select id="year" ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <lable htmlFor="month">Month</lable>
                    <select id="month" ref={monthRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
               </div>
                <Button>Find Events</Button>
            </form>
        </>
     );
}

export default EventsSearch;