// Styles
import classes from './Header.module.sass';

const Header = () => {
  const styles = {
    header: classes['header'],
    title: classes['header__title'],
    subtitle: classes['header__subtitle']
  };

  return (
    <header className={ styles.header }>
      <h1 className={ styles.title }>
        Hello Developer!
      </h1>
      <h2 className={ styles.subtitle }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
    </header>
  );
}

export default Header;