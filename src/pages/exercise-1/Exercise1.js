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
      <section className={ classes['main__section'] }>
        <CardList {...propsToPass}/>
      </section>
    </main>
  );
}

export default Exercise1;