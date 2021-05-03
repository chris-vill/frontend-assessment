// Styles
import classes from './Icon.module.sass';

// Libraries
import joinClasses from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretLeft as fasCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(fasCaretLeft);

const Icon = ({ icon, extClasses = '' }) => {

  return (
    <div className={ joinClasses(classes["icon"], extClasses) }>
      <FontAwesomeIcon icon={ getIconCode(icon) }/>
    </div>
  );
}

function getIconCode(icon) {
  return icon
    .split(/-(.+)/)
    .splice(0,2);
}

export default Icon;
