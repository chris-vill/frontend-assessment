// Styles
// import classes from './Accordion.module.sass';

// Components
import AccordionItem from './accordion-item/AccordionItem';

const Accordion = ({ data }) => {

  return (
    // <ul className={ classes['accordion'] }> {
    <ul> {
      data.map((d, i) => (
        <li key={ i }>
          <AccordionItem {...d}/>
        </li>
      ))
    } </ul>
  );
}

export default Accordion;