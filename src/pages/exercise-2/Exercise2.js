// Styles
import classes from './Exercise2.module.sass';

// Libraries
import data from '@assets/data.json';
import useWindowSize from '@hooks/use-window-size';

// Components
import { Accordion, Tabs } from '@components';

const Exercise2 = () => {
  const viewportWidth = useWindowSize();
  const styles = {
    main: classes['main']
  };

  const propsToPass = {
    data
  };

  return (
    <main className={ styles.main }> {
      viewportWidth < 981
        ? <Accordion {...propsToPass}/>
        : <Tabs {...propsToPass}/>
    } </main>
  );
}

export default Exercise2;