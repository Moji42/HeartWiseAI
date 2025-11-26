import { useState, useCallback } from 'react';

// Types for journal entries
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  wordCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface JournalStats {
  totalEntries: number;
  totalWords: number;
  streak: number;
  monthlyEntries: number;
}

// Mock data - will be replaced with Supabase queries
const mockJournalEntries: JournalEntry[] = [
  {
    id: '1',
    title: 'Reflecting on communication',
    content: 'I noticed that when I take a pause before responding...',
    wordCount: 245,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Gratitude practice',
    content: "Today I'm grateful for the small moments of connection...",
    wordCount: 189,
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 86400000),
  },
  {
    id: '3',
    title: 'Setting boundaries',
    content: 'Learning to say no has been challenging but necessary...',
    wordCount: 312,
    createdAt: new Date(Date.now() - 86400000 * 2),
    updatedAt: new Date(Date.now() - 86400000 * 2),
  },
];

export function useJournal() {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>(mockJournalEntries);

  // Create a new journal entry
  const createEntry = useCallback(async (title: string, content: string) => {
    setLoading(true);
    try {
      // TODO: Replace with Supabase insert
      const wordCount = content.trim().split(/\s+/).length;
      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        title,
        content,
        wordCount,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setEntries(prev => [newEntry, ...prev]);
      return newEntry;
    } finally {
      setLoading(false);
    }
  }, []);

  // Update an existing entry
  const updateEntry = useCallback(async (id: string, title: string, content: string) => {
    setLoading(true);
    try {
      // TODO: Replace with Supabase update
      const wordCount = content.trim().split(/\s+/).length;
      
      setEntries(prev =>
        prev.map(entry =>
          entry.id === id
            ? { ...entry, title, content, wordCount, updatedAt: new Date() }
            : entry
        )
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete an entry
  const deleteEntry = useCallback(async (id: string) => {
    setLoading(true);
    try {
      // TODO: Replace with Supabase delete
      setEntries(prev => prev.filter(entry => entry.id !== id));
    } finally {
      setLoading(false);
    }
  }, []);

  // Get journal statistics
  const getStats = useCallback((): JournalStats => {
    // TODO: Replace with Supabase query
    const totalEntries = entries.length;
    const totalWords = entries.reduce((sum, entry) => sum + entry.wordCount, 0);
    
    // Monthly entries
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthlyEntries = entries.filter(entry => entry.createdAt >= startOfMonth).length;

    // Calculate streak
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const sortedEntries = [...entries].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    for (const entry of sortedEntries) {
      const entryDate = new Date(entry.createdAt);
      entryDate.setHours(0, 0, 0, 0);
      
      const daysDiff = Math.floor((today.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff === streak) {
        streak++;
      } else {
        break;
      }
    }

    return { totalEntries, totalWords, streak, monthlyEntries };
  }, [entries]);

  // Get recent entries
  const getRecentEntries = useCallback((limit: number = 5) => {
    return entries.slice(0, limit);
  }, [entries]);

  return {
    loading,
    entries,
    createEntry,
    updateEntry,
    deleteEntry,
    getStats,
    getRecentEntries,
  };
}

