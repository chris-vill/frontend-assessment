// Styles
import classes from './Tabs.module.sass';

// Libraries
import { useState } from 'react';
import parse from 'html-react-parser';
import joinClasses from 'classnames';

const Tabs = ({ data }) => {
  const [ currentTabIndex, setTabIndex ] = useState(0);
  const styles = {
    tabs: classes['tabs'],
    tab: index => (joinClasses(
      classes['tab'],
      currentTabIndex === index
        ? classes['tab--active']
        : ''
    )),
    article: classes['article']
  };

  return (
    <nav>
      <ul className={ styles.tabs }> {
        data.map((d, i) => (
          <li
            className={ styles.tab(i) }
            onClick={ () => { setTabIndex(i) } }
            key={ i }
          >{ d.title }</li>
        ))
      } </ul>
      <article className={ styles.article }> {
        parse(data[currentTabIndex].content)
      } </article>
    </nav>
  );
}

export default Tabs;