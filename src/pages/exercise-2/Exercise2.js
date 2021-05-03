// Styles
import classes from './Exercise2.module.sass';

// Data & Libraries
import data from '@assets/data.json';
import { getViewportWidth } from '@core/utilities';

// Components
import { Accordion } from '@components';

const Exercise2 = () => {

  // console.log(getViewportWidth());

  const propsToPass = {
    data
  };

  return (
    <main className={ classes['main'] }>
      <Accordion {...propsToPass}/>
    </main>
  );
}

export default Exercise2;