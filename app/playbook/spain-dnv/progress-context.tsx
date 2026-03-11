"use client";

import { createContext, useContext } from "react";

interface ProgressContextType {
  completedLessonIds: string[];
  markComplete: (lessonId: string, completed: boolean) => void;
}

export const ProgressContext = createContext<ProgressContextType>({
  completedLessonIds: [],
  markComplete: () => {},
});

export const useProgress = () => useContext(ProgressContext);
