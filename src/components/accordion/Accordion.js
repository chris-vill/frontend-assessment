// Components
import AccordionItem from './accordion-item/AccordionItem';

const Accordion = ({ data }) => {

  return (
    <ul> {
      data.map((d, i) => (
        <li key={ i }>
          <AccordionItem {...d} initialState={ i === 0 }/>
        </li>
      ))
    } </ul>
  );
}

export default Accordion;