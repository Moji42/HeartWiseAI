import { useState, useCallback } from 'react';

// Types for mood tracking
export interface MoodEntry {
  id: string;
  mood: string;
  score: number;
  notes?: string;
  createdAt: Date;
}

export interface MoodStats {
  streak: number;
  averageScore: number;
  totalEntries: number;
}

// Mock data - will be replaced with Supabase queries
const mockMoodHistory: MoodEntry[] = [
  { id: '1', mood: 'Great', score: 9, createdAt: new Date('2024-12-02') },
  { id: '2', mood: 'Good', score: 7, createdAt: new Date('2024-12-01') },
  { id: '3', mood: 'Okay', score: 5, createdAt: new Date('2024-11-30') },
];

export function useMoodTracker() {
  const [loading, setLoading] = useState(false);
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>(mockMoodHistory);

  // Log a new mood entry
  const logMood = useCallback(async (mood: string, score: number, notes?: string) => {
    setLoading(true);
    try {
      // TODO: Replace with Supabase insert
      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        mood,
        score,
        notes,
        createdAt: new Date(),
      };
      
      setMoodHistory(prev => [newEntry, ...prev]);
      return newEntry;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get mood statistics
  const getStats = useCallback((): MoodStats => {
    // TODO: Replace with Supabase query
    const totalEntries = moodHistory.length;
    const averageScore = totalEntries > 0
      ? moodHistory.reduce((sum, entry) => sum + entry.score, 0) / totalEntries
      : 0;
    
    // Calculate streak (consecutive days)
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (const entry of moodHistory) {
      const entryDate = new Date(entry.createdAt);
      entryDate.setHours(0, 0, 0, 0);
      
      const daysDiff = Math.floor((today.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff === streak) {
        streak++;
      } else {
        break;
      }
    }

    return { streak, averageScore, totalEntries };
  }, [moodHistory]);

  // Get weekly mood data
  const getWeeklyData = useCallback(() => {
    // TODO: Replace with Supabase query
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const entry = moodHistory.find(e => {
        const entryDate = new Date(e.createdAt);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === date.getTime();
      });

      weekData.push({
        day: days[date.getDay()],
        mood: entry?.mood || null,
        score: entry?.score || null,
      });
    }

    return weekData;
  }, [moodHistory]);

  return {
    loading,
    moodHistory,
    logMood,
    getStats,
    getWeeklyData,
  };
}

