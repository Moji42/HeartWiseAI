const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// in-memory sessions store (demo only)
const sessions = {};

// helper to create canned empathetic reply
function cannedReply(userText) {
  // very small "empathy engine" that varies reply
  const lower = (userText || "").toLowerCase();
  if (/angry|mad|frustrat|furious/.test(lower)) {
    return "I can hear how intense that feels — it's valid to feel angry. Can you tell me what happened in one short sentence?";
  }
  if (/sad|lonely|depress|tear|cry/.test(lower)) {
    return "I'm really sorry you're feeling that way. Would you like to share more about what led to this feeling, or try a short grounding exercise?";
  }
  if (/fight|argu|break up|cheat/.test(lower)) {
    return "That sounds painful — I'm here with you. Can you describe what the most difficult moment was?";
  }
  // default gentle reply
  return "Thanks for sharing. I hear you. Can you say a little more about that, or tell me what would feel helpful right now?";
}

// create session
app.post('/api/chat/session', (req, res) => {
  const id = Math.random().toString(36).slice(2, 9);
  const session = { id, messages: [
    { id: Date.now(), sender: 'ai', content: "Hi — I'm HeartWise (demo). How can I support you today?", createdAt: new Date() }
  ]};
  sessions[id] = session;
  res.json(session);
});

// get session
app.get('/api/chat/session/:id', (req, res) => {
  const s = sessions[req.params.id];
  if (!s) return res.status(404).json({ error: 'not found' });
  res.json(s);
});

// receive message -> return canned reply
app.post('/api/chat/session/:id/message', (req, res) => {
  const session = sessions[req.params.id];
  if (!session) return res.status(404).json({ error: 'session not found' });

  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: 'empty message' });

  const userMsg = { id: Date.now(), sender: 'user', content: text, createdAt: new Date() };
  session.messages.push(userMsg);

  // naive crisis detection
  const low = text.toLowerCase();
  if (/(suicide|kill myself|hurt myself|end my life)/.test(low)) {
    const crisis = "I'm sorry you're feeling this way. If you are in immediate danger, call your local emergency number. In the U.S. you can call 988 for suicide & crisis lifeline.";
    session.messages.push({ id: Date.now()+1, sender: 'system', content: crisis, createdAt: new Date() });
    return res.json({ reply: crisis, flagged: true });
  }

  // generate canned reply
  const reply = cannedReply(text);
  session.messages.push({ id: Date.now()+2, sender: 'ai', content: reply, createdAt: new Date() });

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`HeartWise demo server listening at http://localhost:${PORT}`);
});
