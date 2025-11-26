import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { MessageCircle, Send, Brain, Sparkles, Shield } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
} from '@/components/ui';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickPrompts = [
  'How can I communicate better?',
  'I\'m feeling overwhelmed',
  'Help me set boundaries',
  'Dealing with conflict',
];

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content:
      "Hello! I'm your HeartWise AI coach. I'm here to support you with relationship guidance, emotional intelligence insights, and a safe space to explore your feelings. How can I help you today?",
  },
];

export default function AICoachScreen() {
  const { theme } = useTheme();
  const scrollViewRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content:
          'Thank you for sharing that with me. I understand this must be important to you. Can you tell me more about how this situation is affecting you emotionally?',
      };
      setMessages(prev => [...prev, aiMessage]);
      
      // Scroll to bottom after adding message
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text variant="h1">
            Your{' '}
            <Text variant="h1" color={theme.colors.primary.main}>
              AI
            </Text>{' '}
            Coach
          </Text>
          <Text variant="body" muted style={styles.headerSubtitle}>
            Get personalized guidance powered by emotional intelligence AI
          </Text>
        </View>

        {/* Chat Container */}
        <Card style={styles.chatCard}>
          {/* Chat Header */}
          <View style={[styles.chatHeader, { borderBottomColor: theme.colors.border }]}>
            <LinearGradient
              colors={theme.colors.gradients.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.avatarGradient}
            >
              <Brain size={20} color={theme.colors.white} />
            </LinearGradient>
            <View style={styles.chatHeaderText}>
              <Text variant="body" style={styles.chatTitle}>HeartWise AI</Text>
              <Text variant="caption" muted>Online • Emotionally intelligent coaching</Text>
            </View>
          </View>

          {/* Messages */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageWrapper,
                  message.role === 'user' ? styles.userMessage : styles.assistantMessage,
                ]}
              >
                {message.role === 'user' ? (
                  <LinearGradient
                    colors={theme.colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.messageBubble}
                  >
                    <Text variant="bodySmall" color={theme.colors.white}>
                      {message.content}
                    </Text>
                  </LinearGradient>
                ) : (
                  <View
                    style={[
                      styles.messageBubble,
                      { backgroundColor: theme.colors.muted },
                    ]}
                  >
                    <Text variant="bodySmall">{message.content}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>

          {/* Input */}
          <View style={[styles.inputContainer, { borderTopColor: theme.colors.border }]}>
            <Input
              placeholder="Share what's on your mind..."
              value={input}
              onChangeText={setInput}
              onSubmitEditing={handleSend}
              returnKeyType="send"
              style={styles.input}
            />
            <Button
              variant="gradient"
              size="icon"
              onPress={handleSend}
              style={styles.sendButton}
            >
              <Send size={18} color={theme.colors.white} />
            </Button>
          </View>
        </Card>

        {/* Quick Prompts */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.promptsScroll}
          contentContainerStyle={styles.promptsContainer}
        >
          {quickPrompts.map((prompt, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.promptChip,
                {
                  backgroundColor: theme.colors.card,
                  borderColor: theme.colors.border,
                },
              ]}
              onPress={() => handleQuickPrompt(prompt)}
              activeOpacity={0.7}
            >
              <Text variant="bodySmall">{prompt}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bottom Cards */}
        <View style={styles.bottomCards}>
          {/* AI Features */}
          <Card variant="gradient" style={styles.featuresCard}>
            <CardHeader style={styles.smallCardHeader}>
              <View style={styles.cardTitleRow}>
                <Brain size={16} color={theme.colors.primary.main} />
                <Text variant="label">AI Features</Text>
              </View>
            </CardHeader>
            <CardContent style={styles.featuresContent}>
              <View style={styles.featureItem}>
                <MessageCircle size={14} color={theme.colors.primary.main} />
                <Text variant="caption">Emotional intelligence guidance</Text>
              </View>
              <View style={styles.featureItem}>
                <Sparkles size={14} color={theme.colors.primary.main} />
                <Text variant="caption">Pattern recognition</Text>
              </View>
              <View style={styles.featureItem}>
                <Shield size={14} color={theme.colors.primary.main} />
                <Text variant="caption">Red flag detection</Text>
              </View>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card style={[styles.disclaimerCard, { borderColor: `${theme.colors.destructive}50` }]}>
            <CardContent style={styles.disclaimerContent}>
              <Text variant="caption" muted>
                <Text variant="caption" color={theme.colors.destructive} style={styles.importantText}>
                  Important:
                </Text>{' '}
                HeartWise AI provides guidance and support, but is not a replacement for professional therapy, medical advice, or crisis intervention.
              </Text>
              <Text variant="caption" muted style={styles.crisisText}>
                If you're in crisis, please contact emergency services or a crisis hotline immediately.
              </Text>
            </CardContent>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 8,
    marginBottom: 16,
  },
  headerSubtitle: {
    marginTop: 4,
  },
  chatCard: {
    flex: 1,
    overflow: 'hidden',
    marginBottom: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  avatarGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatHeaderText: {
    flex: 1,
  },
  chatTitle: {
    fontWeight: '600',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 12,
  },
  messageWrapper: {
    maxWidth: '85%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
  },
  sendButton: {
    marginLeft: 4,
  },
  promptsScroll: {
    maxHeight: 44,
    marginBottom: 12,
  },
  promptsContainer: {
    gap: 8,
    paddingRight: 20,
  },
  promptChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  bottomCards: {
    gap: 12,
    paddingBottom: 20,
  },
  featuresCard: {
    padding: 0,
  },
  smallCardHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featuresContent: {
    paddingTop: 0,
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  disclaimerCard: {
    borderWidth: 1,
  },
  disclaimerContent: {
    paddingVertical: 12,
  },
  importantText: {
    fontWeight: '600',
  },
  crisisText: {
    marginTop: 8,
  },
});

