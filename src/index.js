// CSS
import './styles/base/reset.sass';
import './styles/base/main.sass';

// Libraries
import ReactDom from 'react-dom';

// Src Code
import { Hello } from './components';

ReactDom.render(
  <>
    <Hello/>
    <div>from the other side</div>
  </>,
  document.getElementById("root")
);