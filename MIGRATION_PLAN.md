# План миграции в новый проект

## Шаг 1: Создание базовой структуры

### 1.1 Типы (types.ts)
```typescript
export interface MentalHealthTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  symptoms: string[];
  strategies: string[];
  tappingScript?: TappingScript;
  isTest?: boolean;
}

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

export interface UserProfile {
  firstName: string;
  lastName: string;
  maidenName: string;
  birthDate: string;
}
```

## Шаг 2: Создание констант (constants.tsx)

- EXPERT_INFO (имя, должность, ссылки)
- EFT_DESCRIPTION (описание техники)
- SYSTEM_INSTRUCTION (для AI)
- TOPICS (массив тем с тэппинг-скриптами)

## Шаг 3: Создание компонентов

### 3.1 Layout.tsx
- Шапка с названием "ТЭС Ассистент"
- Навигация: Главная, Консультация, Упражнения, Архив, Эксперт
- Обёртка для контента

### 3.2 Dashboard.tsx
- Приветственный блок
- 4 кнопки быстрого доступа
- Список первых 4 тем

### 3.3 Assistant.tsx
- Окно чата
- Поле ввода сообщения
- Список сообщений
- Состояние загрузки

### 3.4 Exercises.tsx
- Список тем с тэппинг-скриптами
- Установочные фразы и раунды

### 3.5 ExpertProfile.tsx
- Аватар и информация
- Ссылки на Telegram
- Описание клуба
- Информация о ТЭС

### 3.6 TopicDetail.tsx
- Кнопка "Назад"
- Иконка и заголовок
- Симптомы и стратегии
- Тэппинг-скрипт (если есть)

### 3.7 StressTest.tsx
- 10 вопросов
- 5 вариантов ответа
- Расчёт результата
- Рекомендации

## Шаг 4: Главный компонент App.tsx

- Состояние activeView
- Состояние selectedTopic
- Состояние showStressTest
- Функции навигации
- Рендер контента по activeView

## Шаг 5: Стили

- Tailwind CSS через CDN или установка
- Шрифт Inter через Google Fonts
- Цветовая схема slate

## Порядок создания файлов

1. types.ts
2. constants.tsx
3. components/Layout.tsx
4. components/Dashboard.tsx
5. components/Assistant.tsx
6. components/Exercises.tsx
7. components/ExpertProfile.tsx
8. components/TopicDetail.tsx
9. components/StressTest.tsx
10. App.tsx
11. index.tsx
12. index.html (если нужно)

## Важные детали

- Все тексты на русском языке
- Стиль академический, без уменьшительных форм
- Целевая аудитория: женщины 35-80 лет
- Идентификация: [ИДЕНТИФИКАЦИЯ] в установочных фразах = Имя + Фамилия + Девичья фамилия + Дата рождения
