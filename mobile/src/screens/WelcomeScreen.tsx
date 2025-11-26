import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { Heart, Brain, TrendingUp, MessageCircle, BookOpen, Shield } from 'lucide-react-native';
import { AuthStackParamList } from '@/navigation/types';
import { useTheme } from '@/contexts/ThemeContext';
import { Text, Button, Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { IconButton } from '@/components/ui/IconButton';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced emotional intelligence algorithms analyze patterns and provide personalized guidance',
  },
  {
    icon: TrendingUp,
    title: 'Mood Tracking',
    description: 'Monitor your emotional wellness journey with intuitive tracking and progress visualization',
  },
  {
    icon: MessageCircle,
    title: '24/7 Support',
    description: 'Get instant guidance whenever you need it with our always-available AI coaching assistant',
  },
  {
    icon: BookOpen,
    title: 'Guided Journaling',
    description: 'Reflect and grow with AI-guided prompts designed to deepen self-awareness',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is encrypted, anonymized, and never shared. Your journey stays private',
  },
  {
    icon: Heart,
    title: 'Red Flag Detection',
    description: 'AI identifies concerning patterns and provides guidance for healthier relationship dynamics',
  },
];

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['rgba(229, 77, 77, 0.05)', 'rgba(245, 166, 35, 0.05)', 'transparent']}
            style={styles.heroGradient}
          />
          
          {/* Logo */}
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={theme.colors.gradients.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.logoGradient}
            >
              <Heart size={28} color={theme.colors.white} />
            </LinearGradient>
            <Text variant="h3" style={styles.logoText}>
              HeartWise{' '}
              <Text variant="h3" color={theme.colors.primary.main}>
                AI
              </Text>
            </Text>
          </View>

          {/* Hero Content */}
          <View style={styles.heroContent}>
            <Text variant="h1" style={styles.heroTitle}>
              Transform Your Relationships with{' '}
              <Text variant="h1" color={theme.colors.primary.red}>
                Emotional Intelligence
              </Text>
            </Text>
            
            <Text variant="bodyLarge" muted style={styles.heroDescription}>
              HeartWise AI combines cutting-edge artificial intelligence with proven psychological principles to help you build healthier, more fulfilling relationships.
            </Text>

            <View style={styles.heroButtons}>
              <Button
                variant="hero"
                size="xl"
                onPress={() => navigation.navigate('Signup')}
                style={styles.heroButton}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="xl"
                onPress={() => navigation.navigate('Login')}
                style={styles.heroButton}
              >
                Sign In
              </Button>
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text variant="h2" center style={styles.sectionTitle}>
            Your Personal Relationship Coach
          </Text>
          <Text variant="body" muted center style={styles.sectionDescription}>
            Powered by advanced AI and backed by relationship psychology
          </Text>

          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Card key={index} style={styles.featureCard}>
                <CardHeader>
                  <IconButton
                    icon={<feature.icon size={24} color={theme.colors.white} />}
                    size="md"
                    variant="gradient"
                  />
                  <CardTitle style={styles.featureTitle}>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <LinearGradient
          colors={theme.colors.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.ctaSection}
        >
          <Text variant="h2" color={theme.colors.white} center>
            Ready to Transform Your Relationships?
          </Text>
          <Text variant="body" color="rgba(255,255,255,0.9)" center style={styles.ctaDescription}>
            Join thousands who are building healthier, more fulfilling connections with HeartWise AI
          </Text>
          <Button
            variant="default"
            size="xl"
            onPress={() => navigation.navigate('Signup')}
            style={styles.ctaButton}
          >
            <Text variant="button" color={theme.colors.primary.main}>
              Start Your Free Journey Today
            </Text>
          </Button>
        </LinearGradient>

        {/* Footer */}
        <View style={[styles.footer, { backgroundColor: theme.colors.muted }]}>
          <Text variant="caption" muted center>
            <Text variant="caption" style={{ fontWeight: '600' }}>Important:</Text> HeartWise AI is a coaching tool, not a replacement for professional therapy or counseling.
          </Text>
          <Text variant="caption" muted center style={styles.footerCopyright}>
            © 2024 HeartWise AI. Part of the EdVisingU ecosystem. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoGradient: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    marginLeft: 12,
  },
  heroContent: {
    gap: 20,
  },
  heroTitle: {
    fontSize: 36,
    lineHeight: 44,
  },
  heroDescription: {
    lineHeight: 28,
  },
  heroButtons: {
    gap: 12,
    marginTop: 8,
  },
  heroButton: {
    width: '100%',
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  sectionDescription: {
    marginBottom: 32,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    marginBottom: 0,
  },
  featureTitle: {
    fontSize: 18,
    marginTop: 12,
  },
  ctaSection: {
    padding: 32,
    marginHorizontal: 20,
    borderRadius: 24,
    marginBottom: 20,
  },
  ctaDescription: {
    marginTop: 12,
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: '#FFFFFF',
  },
  footer: {
    padding: 24,
    marginTop: 20,
  },
  footerCopyright: {
    marginTop: 8,
  },
});

