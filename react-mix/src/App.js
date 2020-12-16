import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LoginComponent from './components/loginComponent/LoginComponent';
import MultiStepForm from './components/multiStepForm/MultiStepForm';
import ReactIcons from './components/reactIcons/ReactIcons';
import ReactModal from './components/reactModal/ReactModal';
import ReactToolTip from './components/reactTooltip/ReactToolTip';
import ReactCountup from './components/reactCountup/ReactCountup';
import IdleTimer from './components/idleTimer/IdleTimer';
import ColorPicker from './components/colorPicker/ColorPicker';
import CreditCards from './components/creditCards/CreditCards';
import DatePicker from './components/datePicker/DatePicker';
import PresentationDeck from './components/presentationDeck/PresentationDeck';
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import LoadingIndicator from './components/loadingIndicator/LoadingIndicator';
import Charts from './components/charts/Charts';
import SkeltonComponent from './components/skeltonComponent/SkeltonComponent';
import Moment from './components/moment/Moment';
import ReactWizard from './components/reactWizard/ReactWizard';
import MaterialTabel from './components/materialTable/MaterialTable';
import ReactDropzone from './components/reactDropzone/ReactDropzone';
import ReactImageGallery from './components/reactImageGallery/ReactImageGallery';
import ReactDateRange from './components/reactDateRange/ReactDateRange';
import ReactVirtualizedTable from './components/reactVirtualizedTable/ReactVirtualizedTable';
import Notifications from './components/notifications/Notifications';
import ReactEventTimeline from './components/eventTimeline/ReactEventTimeline';
import ReactUserAvatar from './components/userAvatar/ReactUserAvatar';
import Drawer from './components/drawer/Drawer';
import NumberFormat from './components/numeral/NumberFormat';
import HeatMapComponent from './components/heatMap/HeatMapComponent';

import './App.css';

const App = () => {
  return (
    <Router>
    <div className='wrapper'>
    <div className='side'>
      <Navigation/>
    </div>
    <div className='main'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login-component' component={LoginComponent}/>
            <Route path='/multi-step-form' component={MultiStepForm}/>
            <Route path='/react-icons' component={ReactIcons}/>
            <Route path='/react-modal' component={ReactModal}/>
            <Route path='/react-tooltip' component={ReactToolTip}/>
            <Route path='/react-countup' component={ReactCountup}/>
            <Route path='/idle-timer' component={IdleTimer}/>
            <Route path='/color-picker' component={ColorPicker}/>
            <Route path='/credit-cards' component={CreditCards}/>
            <Route path='/date-picker' component={DatePicker}/>
            <Route path='/react-date-range' component={ReactDateRange}/>
            <Route path='/presentation-deck' component={PresentationDeck}/>
            <Route path='/video-player' component={VideoPlayer}/>
            <Route path='/loading-indicator' component={LoadingIndicator}/>
            <Route path='/charts' component={Charts}/>
            <Route path='/skelton-component' component={SkeltonComponent}/>
            <Route path='/moment' component={Moment}/>
            <Route path='/material-table' component={MaterialTabel}/>
            <Route path='/react-dropzone' component={ReactDropzone}/>
            <Route path='/react-image-gallery' component={ReactImageGallery}/>
            <Route path='/react-wizard' component={ReactWizard}/>
            <Route path='/react-virtualized-table' component={ReactVirtualizedTable}/>
            <Route path='/notifications' component={Notifications}/>
            <Route path='/react-event-timeline' component={ReactEventTimeline}/>
            <Route path='/react-user-avatar' component={ReactUserAvatar}/>
            <Route path='/drawer' component={Drawer}/>
            <Route path='/heat-map' component={HeatMapComponent}/>
            <Route path='/numeral' component={NumberFormat}/>
          </Switch>
        </div>
    </div>
  </Router>
  );
}

export default App;
