// src/App.tsx
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp, IonRouterOutlet, IonTabBar, IonTabButton,
  IonIcon, IonLabel
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubblesOutline, homeOutline } from 'ionicons/icons';
import ChatPage from './pages/ChatPage';
import LandingPage from './pages/LandingPage';
import './App.css';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chat" href="/chat">
          <IonIcon icon={chatbubblesOutline} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonReactRouter>
  </IonApp>
);

export default App;
