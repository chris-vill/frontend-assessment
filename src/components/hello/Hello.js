// CSS
import classes from './Hello.module.sass';

// Libraries
import classnames from 'classnames';

const Hello = ({ text }) => {

  // Classes
  const classNames = {
    main: classnames(classes['colorize'])
  }

  return (
    <div className={ classNames.main }>
      { text }
    </div>
  );
}

export default Hello;