// Styles
import classes from './AccordionItem.module.sass';

// Libraries
import parse from 'html-react-parser';

// Components
import { Icon } from '@components';

const Accordion = ({ title, content }) => {

  console.log(title);
  console.log(content);

  return (<>
    <header className={ classes['accordion-item__header']}>
      <span>{ title }</span>
      <Icon extClasses={ classes['icon'] } icon="fas-caret-left"/>
    </header>
    <article className={ classes['accordion-item__article']}>
      { parse(content) }
    </article>
  </>);
}

export default Accordion;