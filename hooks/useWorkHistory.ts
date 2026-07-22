'use client';

import { useState, useCallback } from 'react';

export interface WorkHistoryEntry {
  id: string;
  employer: string;
  position: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
}

export function useWorkHistory() {
  const [entries, setEntries] = useState<WorkHistoryEntry[]>([]);

  const addEntry = useCallback((entry: Omit<WorkHistoryEntry, 'id'>) => {
    const newEntry: WorkHistoryEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setEntries((prev) => [...prev, newEntry]);
    return newEntry;
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }, []);

  const updateEntry = useCallback((id: string, updates: Partial<WorkHistoryEntry>) => {
    setEntries((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, ...updates } : entry))
    );
  }, []);

  return {
    entries,
    addEntry,
    removeEntry,
    updateEntry,
  };
}
