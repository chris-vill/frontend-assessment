// Styles
import classes from './AccordionItem.module.sass';

// Libraries
import parse from 'html-react-parser';
import joinClasses from 'classnames';
import { useState } from 'react';

// Components
import { Icon } from '@components';

const Accordion = ({ title, content, initialState = false }) => {
  const [ isOpen, setOpen ] = useState(initialState);
  const styles = {
    header: classes['accordion-item__header'],
    article: joinClasses(
      classes['accordion-item__article'],
      !isOpen ? classes['accordion-item__article--close'] : ''
    ),
    icon: joinClasses(
      classes['icon'],
      isOpen ? classes['icon--open'] : ''
    )
  };

  return (<>
    <header className={ styles.header } onClick={ () => { setOpen(prev => !prev) } }>
      <span>{ title }</span>
      <Icon extClasses={ styles.icon } icon="fas-caret-left"/>
    </header>
    <article className={ styles.article }>
      { parse(content) }
    </article>
  </>);
}

export default Accordion;