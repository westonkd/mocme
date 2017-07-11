import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import NewProject from '../components/NewProject';
import ProjectExplorer from '../components/ProjectExplorer';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  NewProject,
  ProjectExplorer
});
