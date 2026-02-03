
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  EDUCATION = 'EDUCATION',
  EXERCISES = 'EXERCISES',
  JOURNAL = 'JOURNAL',
  EXPERT = 'EXPERT'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TappingScript {
  id: string;
  title: string;
  setupPhrase: string;
  rounds: string[];
}

export interface MentalHealthTopic {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  strategies: string[];
  icon: string;
  tappingScript?: TappingScript;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  maidenName: string;
  birthDate: string;
}
