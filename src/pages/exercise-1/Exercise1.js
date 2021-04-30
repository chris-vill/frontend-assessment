// Styles
import classes from './Exercise1.module.sass';

// Components
import { Header, CardList } from '@components';

const Exercise1 = () => {
  const cards = [
    {
      image: 'http://via.placeholder.com/400x300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image: 'http://via.placeholder.com/400x300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'http://via.placeholder.com/400x300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    }
  ];

  const propsToPass = {
    cards
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