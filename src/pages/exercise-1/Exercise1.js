// Styles
import classes from './Exercise1.module.sass';

// Components
import { Header, CardList } from '@components';

const Exercise1 = () => {
  const propsToPass = {
    numOfCards: 3
  };

  return (
    <main className={ classes['main'] }>
      <Header/>
      <CardList {...propsToPass}/>
    </main>
  );
}

export default Exercise1;