// src/pages/LandingPage.tsx
import React from "react";
import { IonPage, IonContent, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "../App.css";

const LandingPage: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen className="landing">
        <div className="landing-inner">
          <h1>HeartWise</h1>
          <p>Your emotionally intelligent relationship coach — quick empathy, guided exercises, and human escalation.</p>
          <div style={{display:'flex', gap:12}}>
            <IonButton onClick={() => history.push("/chat")} size="large">Open Chat</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
