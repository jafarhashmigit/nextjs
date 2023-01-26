
import Button from '../ui/button/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { year, month } = props;

  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   month: 'long',
  //   year: 'numeric',
  // });

  return (
    <section className={classes.title}>
      <h1 className={classes.event}>Events in {year}</h1>
      <Button link='/event'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
