// CSS
import classes from './Hello.module.css';

// Libraries
import classnames from 'classnames';

const Hello = () => {
  const classNames = {
    main: classnames(classes['red'])
  }

  console.log(classes);

  return (
    <div className={ classNames.main }>
      Hello
    </div>
  );
}

export default Hello;