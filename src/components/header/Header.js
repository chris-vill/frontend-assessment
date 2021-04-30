// Styles
import classes from './Header.module.sass';

const Header = () => {


  return (
    <header className={ classes['header'] }>
      <h1 className={ classes['header__title'] }>
        Hello Developer!
      </h1>
      <h2 className={ classes['header__subtitle'] }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
    </header>
  );
}

export default Header;