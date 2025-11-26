import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, Sparkles, Calendar, Lock } from 'lucide-react-native';
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
  TextArea,
} from '@/components/ui';

const prompts = [
  'What made you smile today?',
  'Describe a recent meaningful conversation',
  'What challenges are you facing in your relationships?',
  'What are you grateful for right now?',
  'How have you grown emotionally this week?',
];

const recentEntries = [
  {
    date: 'Today',
    title: 'Reflecting on communication',
    preview: 'I noticed that when I take a pause before responding...',
  },
  {
    date: 'Yesterday',
    title: 'Gratitude practice',
    preview: 'Today I\'m grateful for the small moments of connection...',
  },
  {
    date: 'Dec 1',
    title: 'Setting boundaries',
    preview: 'Learning to say no has been challenging but necessary...',
  },
];

export default function JournalScreen() {
  const { theme } = useTheme();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert(
        'Please fill in all fields',
        'Both title and content are required'
      );
      return;
    }

    Alert.alert(
      'Journal entry saved!',
      'Your thoughts have been securely recorded.'
    );

    setTitle('');
    setContent('');
  };

  const handlePromptPress = (prompt: string) => {
    setContent(content + (content ? '\n\n' : '') + prompt + '\n\n');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text variant="h1">
            Your{' '}
            <Text variant="h1" color={theme.colors.primary.main}>
              Personal
            </Text>{' '}
            Journal
          </Text>
          <Text variant="body" muted style={styles.headerSubtitle}>
            A safe space for your thoughts, feelings, and reflections
          </Text>
        </View>

        {/* Journal Editor */}
        <Card style={styles.editorCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <BookOpen size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>New Entry</CardTitle>
            </View>
            <View style={styles.privacyNote}>
              <Lock size={12} color={theme.colors.mutedForeground} />
              <CardDescription style={styles.privacyText}>
                Private and encrypted - only you can read this
              </CardDescription>
            </View>
          </CardHeader>
          <CardContent style={styles.editorContent}>
            <Input
              placeholder="Entry title..."
              value={title}
              onChangeText={setTitle}
              style={styles.titleInput}
            />
            
            <TextArea
              placeholder="Write your thoughts here..."
              value={content}
              onChangeText={setContent}
              style={styles.contentInput}
            />

            <View style={styles.editorFooter}>
              <Text variant="caption" muted>
                {content.length} characters
              </Text>
              <Button variant="gradient" onPress={handleSave}>
                Save Entry
              </Button>
            </View>
          </CardContent>
        </Card>

        {/* Writing Prompts */}
        <Card variant="gradient" style={styles.promptsCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <Sparkles size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>Writing Prompts</CardTitle>
            </View>
            <CardDescription>
              AI-suggested prompts to inspire reflection
            </CardDescription>
          </CardHeader>
          <CardContent style={styles.promptsContent}>
            {prompts.map((prompt, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.promptButton,
                  {
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                  },
                ]}
                onPress={() => handlePromptPress(prompt)}
                activeOpacity={0.7}
              >
                <Text variant="bodySmall">{prompt}</Text>
              </TouchableOpacity>
            ))}
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card style={styles.recentCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <Calendar size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>Recent Entries</CardTitle>
            </View>
          </CardHeader>
          <CardContent style={styles.recentContent}>
            {recentEntries.map((entry, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.entryItem,
                  { borderColor: theme.colors.border },
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.entryHeader}>
                  <Text variant="bodySmall" style={styles.entryTitle}>
                    {entry.title}
                  </Text>
                  <Text variant="caption" muted>
                    {entry.date}
                  </Text>
                </View>
                <Text variant="bodySmall" muted numberOfLines={2}>
                  {entry.preview}
                </Text>
              </TouchableOpacity>
            ))}
          </CardContent>
        </Card>

        {/* Progress Stats */}
        <Card style={styles.progressCard}>
          <CardHeader>
            <CardTitle style={styles.progressTitle}>Your Progress</CardTitle>
          </CardHeader>
          <CardContent style={styles.progressContent}>
            <View style={styles.progressItem}>
              <View style={styles.progressHeader}>
                <Text variant="bodySmall" muted>This Month</Text>
                <Text variant="bodySmall" style={styles.progressValue}>24 entries</Text>
              </View>
              <View style={[styles.progressBar, { backgroundColor: theme.colors.muted }]}>
                <View
                  style={[
                    styles.progressFill,
                    { width: '80%' },
                  ]}
                />
              </View>
            </View>

            <View style={styles.progressRow}>
              <View style={styles.progressStat}>
                <Text variant="bodySmall" muted>Streak</Text>
                <Text variant="bodySmall" style={styles.progressValue}>12 days 🔥</Text>
              </View>
              <View style={styles.progressStat}>
                <Text variant="bodySmall" muted>Total Words</Text>
                <Text variant="bodySmall" style={styles.progressValue}>18,432</Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  headerSubtitle: {
    marginTop: 8,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitleText: {
    fontSize: 18,
  },
  editorCard: {
    marginBottom: 16,
  },
  privacyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  privacyText: {
    marginTop: 0,
  },
  editorContent: {
    gap: 16,
  },
  titleInput: {
    fontSize: 18,
    fontWeight: '500',
  },
  contentInput: {
    minHeight: 200,
  },
  editorFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promptsCard: {
    marginBottom: 16,
  },
  promptsContent: {
    gap: 8,
  },
  promptButton: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  recentCard: {
    marginBottom: 16,
  },
  recentContent: {
    gap: 12,
  },
  entryItem: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  entryTitle: {
    fontWeight: '500',
    flex: 1,
  },
  progressCard: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
  },
  progressContent: {
    gap: 16,
  },
  progressItem: {
    gap: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressValue: {
    fontWeight: '500',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#E8652B',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressStat: {
    gap: 4,
  },
});

