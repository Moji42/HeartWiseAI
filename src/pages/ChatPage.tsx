// src/pages/ChatPage.tsx
import React, { useEffect, useState, useRef } from "react";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonTextarea, IonButton, IonSpinner
} from "@ionic/react";
import axios from "axios";
import "../App.css";

const API = process.env.REACT_APP_API_URL || "http://localhost:4000";

const ChatPage: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const createSession = async () => {
      try {
        const r = await axios.post(`${API}/api/chat/session`);
        setSession(r.data);
      } catch (e) {
        console.error("create session error", e);
        // don't block demo; show placeholder session
        setSession({ id: "demo", messages: [
          { id: 1, sender: "ai", content: "Hi — I'm HeartWise (demo). How can I support you today?", createdAt: new Date() }
        ]});
      }
    };
    createSession();
  }, []);

  useEffect(() => {
    // auto-scroll when messages change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session?.messages?.length]);

  const send = async () => {
    if (!text.trim() || !session) return;
    setLoading(true);
    try {
      await axios.post(`${API}/api/chat/session/${session.id}/message`, { text });
      const s = await axios.get(`${API}/api/chat/session/${session.id}`);
      setSession(s.data);
      setText("");
    } catch (err:any) {
      console.error(err);
      alert("Error sending message — check server logs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HeartWise — Chat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="chat-outer">
        <div className="chat-container" ref={scrollRef}>
          {session?.messages?.map((m:any) => (
            <div key={m.id} className={`msg ${m.sender === 'user' ? 'user' : (m.sender === 'ai' ? 'ai' : 'system')}`}>
              <div className="msg-content">{m.content}</div>
              <small className="msg-time">{new Date(m.createdAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</small>
            </div>
          ))}
        </div>

        <div className="chat-input-wrapper">
          <div className="chat-input">
            <IonTextarea
              value={text}
              onIonChange={e => setText((e.target as any).value)}
              rows={1}
              placeholder="Write to your coach..."
              className="chat-textarea"
            />
            <IonButton className="send-btn" onClick={send} disabled={loading || !text.trim()}>
              {loading ? <IonSpinner name="crescent" /> : "Send"}
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChatPage;
