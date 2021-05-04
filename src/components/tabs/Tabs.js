// Styles
import classes from './Tabs.module.sass';

// Libraries
import { useState } from 'react';
import parse from 'html-react-parser';
import joinClasses from 'classnames';

const Tabs = ({ data }) => {
  const [ currentTabIndex, setTabIndex ] = useState(0);
  const styles = {
    nav: classes['nav'],
    tabs: classes['nav__tabs'],
    tab: index => (joinClasses(
      classes['nav__tab'],
      currentTabIndex === index
        ? classes['nav__tab--active']
        : ''
    )),
    articles: classes['nav__articles'],
    article: index => (joinClasses(
      classes['nav__article'],
      currentTabIndex === index
        ? classes['nav__article--active']
        : ''
    ))
  };

  return (
    <nav className={ styles.nav }>
      <ul className={ styles.tabs }> {
        data.map((d, i) => (
          <li
            className={ styles.tab(i) }
            onClick={ () => { setTabIndex(i) } }
            key={ i }
          >{ d.title }</li>
        ))
      } </ul>
      <section className={ styles.articles }> {
        data.map((d, i) => (
          <article className={ styles.article(i) }>{ parse(d.content) }</article>
        ))
      } </section>
    </nav>
  );
}

export default Tabs;