import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {
  Heart,
  TrendingUp,
  MessageCircle,
  BookOpen,
  Calendar,
  Zap,
  LogOut,
} from 'lucide-react-native';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import {
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui';
import { IconButton } from '@/components/ui/IconButton';

type NavigationProp = BottomTabNavigationProp<MainTabParamList, 'Dashboard'>;

const stats = [
  { label: 'Current Streak', value: '12 days', subtitle: 'Keep it up! 🔥' },
  { label: 'Mood Score', value: '8.2/10', subtitle: '+0.5 this week' },
  { label: 'Journal Entries', value: '24', subtitle: 'This month' },
  { label: 'AI Sessions', value: '18', subtitle: 'Total conversations' },
];

const recentActivity = [
  { icon: Heart, text: 'Mood logged: Happy', time: '2 hours ago' },
  { icon: BookOpen, text: 'New journal entry', time: 'Yesterday' },
  { icon: MessageCircle, text: 'AI coaching session', time: '2 days ago' },
];

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();
  const { user, logout } = useAuth();

  const userName = user?.name || 'there';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <LinearGradient
              colors={theme.colors.gradients.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.logoGradient}
            >
              <Heart size={20} color={theme.colors.white} />
            </LinearGradient>
            <Text variant="h4">HeartWise</Text>
          </View>
          <TouchableOpacity
            onPress={logout}
            style={[styles.logoutButton, { backgroundColor: theme.colors.muted }]}
          >
            <LogOut size={20} color={theme.colors.foreground} />
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text variant="h1">
            Welcome back,{' '}
            <Text variant="h1" color={theme.colors.primary.main}>
              {userName}
            </Text>
          </Text>
          <Text variant="body" muted style={styles.welcomeSubtitle}>
            Here's your emotional wellness journey at a glance
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Card key={index} style={styles.statCard}>
              <CardHeader style={styles.statHeader}>
                <Text variant="caption" muted>{stat.label}</Text>
              </CardHeader>
              <CardContent style={styles.statContent}>
                <Text variant="h3" color={theme.colors.primary.main}>
                  {stat.value}
                </Text>
                <Text variant="caption" muted>{stat.subtitle}</Text>
              </CardContent>
            </Card>
          ))}
        </View>

        {/* Quick Actions */}
        <Text variant="h4" style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('MoodTracker')}
          >
            <Card style={styles.quickAction}>
              <CardHeader>
                <IconButton
                  icon={<TrendingUp size={24} color={theme.colors.white} />}
                  size="md"
                  variant="gradient"
                />
                <CardTitle style={styles.quickActionTitle}>Track Your Mood</CardTitle>
                <Text variant="bodySmall" muted>
                  Log how you're feeling today and track emotional patterns
                </Text>
              </CardHeader>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('Journal')}
          >
            <Card style={styles.quickAction}>
              <CardHeader>
                <IconButton
                  icon={<BookOpen size={24} color={theme.colors.white} />}
                  size="md"
                  variant="gradient"
                />
                <CardTitle style={styles.quickActionTitle}>Write in Journal</CardTitle>
                <Text variant="bodySmall" muted>
                  Reflect on your thoughts and feelings with guided prompts
                </Text>
              </CardHeader>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('AICoach')}
          >
            <Card style={styles.quickAction}>
              <CardHeader>
                <IconButton
                  icon={<MessageCircle size={24} color={theme.colors.white} />}
                  size="md"
                  variant="gradient"
                />
                <CardTitle style={styles.quickActionTitle}>Talk to AI Coach</CardTitle>
                <Text variant="bodySmall" muted>
                  Get personalized guidance and emotional support
                </Text>
              </CardHeader>
            </Card>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Card style={styles.activityCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <Calendar size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>Recent Activity</CardTitle>
            </View>
          </CardHeader>
          <CardContent style={styles.activityContent}>
            {recentActivity.map((activity, index) => (
              <View
                key={index}
                style={[
                  styles.activityItem,
                  index < recentActivity.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                  },
                ]}
              >
                <View style={[styles.activityIcon, { backgroundColor: `${theme.colors.primary.main}15` }]}>
                  <activity.icon size={16} color={theme.colors.primary.main} />
                </View>
                <View style={styles.activityText}>
                  <Text variant="bodySmall">{activity.text}</Text>
                  <Text variant="caption" muted>{activity.time}</Text>
                </View>
              </View>
            ))}
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card variant="gradient" style={styles.insightsCard}>
          <CardHeader>
            <View style={styles.cardTitleRow}>
              <Zap size={20} color={theme.colors.primary.main} />
              <CardTitle style={styles.cardTitleText}>AI Insights</CardTitle>
            </View>
          </CardHeader>
          <CardContent style={styles.insightsContent}>
            <View style={[styles.insightItem, { backgroundColor: theme.colors.background, borderColor: theme.colors.border }]}>
              <Text variant="bodySmall" style={styles.insightTitle}>✨ Positive Pattern Detected</Text>
              <Text variant="bodySmall" muted>
                Your mood has improved by 15% over the past week. Great progress!
              </Text>
            </View>

            <View style={[styles.insightItem, { backgroundColor: theme.colors.background, borderColor: theme.colors.border }]}>
              <Text variant="bodySmall" style={styles.insightTitle}>💡 Recommendation</Text>
              <Text variant="bodySmall" muted>
                You've been most positive in the mornings. Consider scheduling important conversations then.
              </Text>
            </View>

            <Button variant="gradient" style={styles.insightsButton}>
              View Full Analysis
            </Button>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoGradient: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeSubtitle: {
    marginTop: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    width: '48%',
    flexGrow: 1,
  },
  statHeader: {
    paddingBottom: 4,
  },
  statContent: {
    paddingTop: 0,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  quickActions: {
    gap: 12,
    marginBottom: 24,
  },
  quickActionCard: {
    flex: 1,
  },
  quickAction: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 18,
    marginTop: 12,
  },
  activityCard: {
    marginBottom: 16,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitleText: {
    fontSize: 18,
  },
  activityContent: {
    gap: 0,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    gap: 12,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityText: {
    flex: 1,
    gap: 2,
  },
  insightsCard: {
    marginBottom: 20,
  },
  insightsContent: {
    gap: 12,
  },
  insightItem: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  insightTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  insightsButton: {
    marginTop: 4,
  },
});

