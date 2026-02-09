
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Systems online. I'm Mohanned's technical assistant. How can I help clarify his expertise or project architecture?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const knowledgeBase = `
        PROFILE:
        Name: ${profile.name}
        Role: ${profile.role}
        Summary: ${profile.summary}
        Skills: ${profile.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join(' | ')}
        Experience: ${profile.experience.map(e => `${e.title} at ${e.company} (${e.period})`).join(' | ')}
        
        PROJECTS:
        ${projects.map(p => `
          Title: ${p.title}
          Tech: ${p.tags.join(', ')}
          Summary: ${p.summary}
          Highlights: ${p.highlights.join('; ')}
        `).join('\n')}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `
            You are a highly professional, direct, and serious Technical Assistant for Mohanned's developer portfolio.
            Your goal is to answer recruiter or collaborator questions based on the provided knowledge base.
            
            KNOWLEDGE_BASE:
            ${knowledgeBase}

            RULES:
            1. Be concise. Avoid fluff. Use technical terminology.
            2. If asked about contact info, refer them to the LinkedIn or Email in the portfolio.
            3. If a question is outside Mohanned's professional scope, politely decline and steer back to his work.
            4. Format short bullet points for lists.
            5. Do not hallucinate skills or projects not listed.
          `
        }
      });

      const botText = response.text || "Connection error. Please review the Projects section for full technical details.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Assistant offline. Please reach out via the contact form for urgent inquiries." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-96 h-[500px] bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 ring-1 ring-purple-500/20">
          <div className="p-4 border-b border-white/10 bg-[#161618] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-500" />
              <span className="font-bold text-white text-xs uppercase tracking-widest font-mono">System Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0a0a0c] to-[#121214]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none shadow-lg shadow-purple-900/20' 
                    : 'bg-white/5 text-zinc-300 rounded-bl-none border border-white/10'
                }`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl rounded-bl-none border border-white/10">
                  <Loader2 className="w-4 h-4 text-purple-500 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-[#161618]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query system knowledge..."
                className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all font-mono"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-500 hover:text-purple-400 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          aria-label="Open AI Assistant"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
