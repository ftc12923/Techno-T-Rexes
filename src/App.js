import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link 
} from "react-router-dom";  
import './App.css';
import TrexesHomeHeader from './Components/TrexesHomeHeader';
import TrexesHomeText from './Components/TrexesHomeText';
import MahitBio from './Components/MahitBio'; 
import VeenaBio from './Components/VeenaBio';
import VivekBio from './Components/VivekBio';
import PranaviBio from './Components/PranaviBio';
import SatvikBio from './Components/SatvikBio';
import VidiptBio from './Components/VidiptBio';
import TeamAchievementsText from './Components/TeamAchievementsText';
import TeamFirstAchievements from './Components/TeamFirstAchievement';
import TeamSecondAchievements from './Components/TeamSecondAchievements';
import TeamThirdAchievements from './Components/TeamThirdAchievements';
import TeamFourthAchievements from './Components/TeamFourthAchievements';
import TeamFifthAchievements from './Components/TeamFifthAchievements';
import TeamOutreachText from './Components/TeamOutreachText';
import TeamCoderSchoolOutreach from './Components/TeamCoderSchoolOutreach';
import TeamFallFestivalOutreach from './Components/TeamFallFestivalOutreach';
import TeamJRFLLOutreach from './Components/TeamJRFLLOutreach';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/achievements">
            <TrexesHomeHeader />
            <TeamAchievementsText />
            <TeamFirstAchievements />
            <TeamSecondAchievements />
            <TeamThirdAchievements />
            <TeamFourthAchievements />
            <TeamFifthAchievements />

          </Route>
          <Route path="/outreach">
            <TrexesHomeHeader />
            <TeamOutreachText />
            <TeamCoderSchoolOutreach />
            <TeamFallFestivalOutreach />
            <TeamJRFLLOutreach />

          </Route>
          <Route path="/contactus">
            <TrexesHomeHeader />
            <h1><center>CONTACT US</center></h1>
            
          </Route>
          
          <Route path="/">
            <TrexesHomeHeader />
            <TrexesHomeText />
            <VivekBio />
            <VeenaBio />
            <MahitBio />
            <PranaviBio />
            <SatvikBio /> 
            <VidiptBio />

          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
