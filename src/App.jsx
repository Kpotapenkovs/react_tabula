import { useState } from 'react'

import './App.css'
import Translate from "./translate";
import Feature from "./feature";
import UserStory from "./UserStory";
import Scenario from "./scenario";
import Rubika_kubs from "./rubika_kubs";
import Happy_scenario from "./happy_scenario";

function App() {
    return (
      <>
        <Feature />
        <UserStory />
        <Scenario />
        <Rubika_kubs />
        <Happy_scenario />
      </>
    );
  }

export default App
