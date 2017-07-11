import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import NewProject from '../components/NewProject';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  NewProject
});
