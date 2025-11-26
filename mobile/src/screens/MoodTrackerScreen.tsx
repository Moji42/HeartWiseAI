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
import LinearGradient from 'react-native-linear-gradient';
import { Smile, Meh, Frown, Heart, TrendingUp } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  TextArea,
} from '@/components/ui';

interface MoodOption {
  icon: typeof Smile;
  label: string;
  color: string;
  score: number;
}

const moods: MoodOption[] = [
  { icon: Smile, label: 'Great', color: '#22C55E', score: 9 },
  { icon: Smile, label: 'Good', color: '#3B82F6', score: 7 },
  { icon: Meh, label: 'Okay', color: '#F59E0B', score: 5 },
  { icon: Frown, label: 'Low', color: '#F97316', score: 3 },
  { icon: Frown, label: 'Struggling', color: '#EF4444', score: 1 },
];

const weeklyData = [
  { day: 'Monday', mood: 'Great', icon: Smile, color: '#22C55E' },
  { day: 'Tuesday', mood: 'Good', icon: Smile, color: '#3B82F6' },
  { day: 'Wednesday', mood: 'Okay', icon: Meh, color: '#F59E0B' },
];

export default function MoodTrackerScreen() {
  const { theme } = useTheme();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (!selectedMood) {
      Alert.alert('Please select a mood', 'Choose how you\'re feeling today');
      return;
    }

    Alert.alert(
      'Mood logged successfully!',
      'Your emotional wellness data has been recorded.'
    );

    setSelectedMood(null);
    setNotes('');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text variant="h1">
            How are you{' '}
            <Text variant="h1" color={theme.colors.primary.main}>
              feeling
            </Text>{' '}
            today?
          </Text>
          <Text variant="body" muted style={styles.headerSubtitle}>
            Track your emotional state and identify patterns over time
          </Text>
        </View>

        {/* Mood Selection */}
        <Card style={styles.moodCard}>
          <CardHeader>
            <CardTitle>Select Your Mood</CardTitle>
            <CardDescription>
              Choose the option that best describes how you're feeling right now
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View style={styles.moodGrid}>
              {moods.map((mood) => (
                <TouchableOpacity
                  key={mood.label}
                  style={[
                    styles.moodButton,
                    {
                      borderColor:
                        selectedMood === mood.label
                          ? theme.colors.primary.main
                          : theme.colors.border,
                      backgroundColor:
                        selectedMood === mood.label
                          ? `${theme.colors.primary.main}10`
                          : theme.colors.background,
                    },
                    selectedMood === mood.label && theme.shadows.warm,
                  ]}
                  onPress={() => setSelectedMood(mood.label)}
                  activeOpacity={0.7}
                >
                  <mood.icon size={40} color={mood.color} />
                  <Text variant="bodySmall" style={styles.moodLabel}>
                    {mood.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card style={styles.notesCard}>
          <CardHeader>
            <CardTitle>What's on your mind?</CardTitle>
            <CardDescription>
              Optional: Share more about how you're feeling (private and encrypted)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TextArea
              placeholder="Today I'm feeling this way because..."
              value={notes}
              onChangeText={setNotes}
              style={styles.notesInput}
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          variant="gradient"
          size="lg"
          onPress={handleSubmit}
          leftIcon={<Heart size={20} color={theme.colors.white} />}
          style={styles.submitButton}
        >
          Log My Mood
        </Button>

        {/* Weekly Overview */}
        <Card variant="gradient" style={styles.weeklyCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <TrendingUp size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>This Week's Overview</CardTitle>
            </View>
          </CardHeader>
          <CardContent style={styles.weeklyContent}>
            {weeklyData.map((day, index) => (
              <View
                key={index}
                style={[
                  styles.weeklyItem,
                  { backgroundColor: theme.colors.background },
                ]}
              >
                <Text variant="bodySmall" style={styles.weeklyDay}>
                  {day.day}
                </Text>
                <View style={styles.weeklyMood}>
                  <day.icon size={16} color={day.color} />
                  <Text variant="bodySmall" muted>
                    {day.mood}
                  </Text>
                </View>
              </View>
            ))}

            {/* Pattern Insight */}
            <View
              style={[
                styles.insightBox,
                {
                  backgroundColor: `${theme.colors.primary.main}10`,
                  borderColor: `${theme.colors.primary.main}30`,
                },
              ]}
            >
              <Text variant="bodySmall" color={theme.colors.primary.main} style={styles.insightTitle}>
                💡 Pattern Insight
              </Text>
              <Text variant="bodySmall" muted>
                Your mood tends to be highest in the first half of the week.
                Consider planning important activities early.
              </Text>
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
  moodCard: {
    marginBottom: 16,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  moodButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  moodLabel: {
    marginTop: 8,
    fontWeight: '500',
  },
  notesCard: {
    marginBottom: 16,
  },
  notesInput: {
    minHeight: 100,
  },
  submitButton: {
    marginBottom: 24,
  },
  weeklyCard: {
    marginBottom: 20,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitleText: {
    fontSize: 18,
  },
  weeklyContent: {
    gap: 12,
  },
  weeklyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
  },
  weeklyDay: {
    fontWeight: '500',
  },
  weeklyMood: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  insightBox: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 4,
  },
  insightTitle: {
    fontWeight: '500',
    marginBottom: 4,
  },
});

