// Styles
import classes from './Main.module.sass';

// Libraries
import { Link } from 'react-router-dom';

// Components
import { Button } from '@components';

const Exercise1 = () => {

  return (
    <main className={ classes['main'] }>
      <ButtonWithLink
        text="Exercise 1"
        to="/exercise-1"
      />
      <ButtonWithLink
        text="Exercise 2"
        to="/exercise-2"
      />
    </main>
  );
}

function ButtonWithLink(props) {

  return (
    <Link className={ classes['link'] } to={ props.to }>
      <Button extClasses={ classes['button']  } {...props}/>
    </Link>
  );
}

export default Exercise1;