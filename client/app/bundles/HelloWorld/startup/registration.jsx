import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import NewProject from '../components/NewProject';
import ProjectExplorer from '../components/ProjectExplorer';
import PhaseEditor from '../components/PhaseEditor';
import ImageUpload from '../components/ImageUpload';
import Phase from '../components/Phase';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  NewProject,
  ProjectExplorer,
  ImageUpload,
  Phase
});
