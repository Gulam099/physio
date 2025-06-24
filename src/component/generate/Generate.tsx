'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper, 
  CircularProgress 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const TypingEffect: React.FC<{ text: string; speed?: number }> = ({ 
  text, 
  speed = 20 
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    if (!text) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <>{displayedText}</>;
};

// Chat Message Component
interface ChatMessage {
  id: number;
  type: 'user' | 'assistant';
  content: string;
}

export default function ChatComponent() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    };

    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/chat/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputMessage }),
      });

      const data = await res.json();

      // Add assistant message
      const newAssistantMessage: ChatMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: data.data || 'Sorry, I could not generate a response.'
      };

      setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      const errorMessage: ChatMessage = {
        id: Date.now() + 2,
        type: 'assistant',
        content: 'An error occurred. Please try again.'
      };

      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h6'>ChatGPT</Typography>
      
        <Typography variant='h4' textAlign={'center'}sx={{fontWeight:650, marginTop:'30vh'}}>What can I help with?
        </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ pb: 2, display: 'flex', gap: 2, marginTop:'3vh' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          // variant="contained" 
          color="primary" 
          startIcon={<SendIcon
          fontSize='large'
          />}
          disabled={isLoading || !inputMessage.trim()}
        >
          {isLoading ? <CircularProgress size={24} /> : ''}
        </Button>
      </Box>
      <Box 
        sx={{ 
          flexGrow: 1, 
          overflowY: 'auto', 
          py: 2,
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        {messages.map((message) => (
          <Paper 
            key={message.id}
            sx={{ 
              maxWidth: '80%', 
              mb: 2, 
              p: 2,
              alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.type === 'user' ? '#e6f2ff' : '#f0f0f0'
            }}
          >
            {message.type === 'assistant' ? (
              <TypingEffect text={message.content} />
            ) : (
              <Typography>{message.content}</Typography>
            )}
          </Paper>
        ))}
        <div ref={chatEndRef} />
      </Box>
    </Container>
  );
}