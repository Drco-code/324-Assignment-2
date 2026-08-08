# Workout App — DCIT 324 Assignment 2

**Reusable Components with Props and State**

A fitness app built with **React Native** and **Expo** that displays a list of workouts and a details screen for each one. The app demonstrates reusable components driven by **props** and interactive elements driven by **state**.

Built for the DCIT 324: Mobile Application Development course at the **University of Ghana**, based on the [Free Fitness App UI Kit](https://www.figma.com/community/file/1091263687486055207/free-fitness-app-ui-kit) reference design on Figma.

---

## 📱 Screenshots

> Add your screenshots to the `screenshots/` folder and reference them below by replacing the placeholder paths.

|                 Workout List Screen                  |                   Workout Details Screen                   |
| :--------------------------------------------------: | :--------------------------------------------------------: |
| ![Workout List Screen](screenshots/workout-list.png) | ![Workout Details Screen](screenshots/workout-details.png) |

_Placeholder:_ save your screenshots as `screenshots/workout-list.png` and `screenshots/workout-details.png`, or update the paths above.

---

## ✨ Features

- **Reusable Workout Card component** — one `Card` component receives its image, title, duration, and calorie information through **props**, so no card markup is repeated.
- **Workout List screen** — renders **six workout cards** by mapping over an array of workout data from `src/data/workouts.ts`.
- **Favourite button** — a heart icon on every card toggles between filled and unfilled using **state**, independently for each card.
- **Stack navigation** — tapping a card opens the **Workout Details** screen, passing the selected workout's data through **route params**.
- **Start / Completed toggle** — a button on the details screen toggles between **"Start Workout"** and **"Completed"** using state.
- **Simple, clean design** — flat colours, simple icons, shared theme and typography constants.

---

## 🛠 Tech Stack

| Layer          | Technology                                                                              |
| :------------- | :-------------------------------------------------------------------------------------- |
| Framework      | [Expo](https://expo.dev) (SDK 57)                                                       |
| UI             | [React Native](https://reactnative.dev) (0.86)                                          |
| Language       | [TypeScript](https://www.typescriptlang.org) (strict mode)                              |
| Navigation     | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based, stack navigator) |
| Icons          | [react-native-heroicons](https://www.npmjs.com/package/react-native-heroicons)          |
| List rendering | React Native `FlatList`                                                                 |

---

## 📁 Project Structure

```
.
├── assets/                      # Icons, splash screen and app icon images
├── src/
│   ├── app/
│   │   ├── _layout.tsx          # Root stack navigator (header config)
│   │   ├── index.tsx            # Workout List screen
│   │   └── work-details.tsx     # Workout Details screen
│   ├── components/
│   │   ├── Card.tsx             # Reusable workout card (props + favourite state)
│   │   └── custom/
│   │       └── CustomText.tsx   # Reusable text component (typography/colour props)
│   ├── constants/
│   │   └── theme.ts             # Colour palette and typography tokens
│   └── data/
│       └── workouts.ts          # Workout data array + Workout type
├── app.json                     # Expo configuration
├── package.json
└── tsconfig.json                # TS config with "@/" path alias → ./src
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)
- An Android emulator, iOS simulator, or the [Expo Go](https://expo.dev/go) app on your phone
- (Optional) Yarn or pnpm — the project ships with `pnpm-lock.yaml`

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the Expo dev server
npx expo start
```

### Running the app

From the Expo dev server output, you can:

- Press **`a`** to open on an Android emulator
- Press **`i`** to open on an iOS simulator
- Press **`w`** to open in the browser
- Scan the QR code with the **Expo Go** app on your physical device

---

## 🧭 Screens & Navigation

### Workout List (`src/app/index.tsx`)

- Displays the "WorkOuts" heading and a `FlatList` of six workouts.
- Each row is rendered with the reusable `Card` component:

```tsx
<Card
  onPress={() => handlePress(item)}
  image={item.image}
  title={item.title}
  calorie={item.calories}
  duration={item.duration}
/>
```

- Tapping the heart icon on a card toggles its own favourite state without affecting other cards.
- Tapping the card navigates to the details screen:

```tsx
router.push({ pathname: "/work-details", params: { id: item.id } });
```

### Workout Details (`src/app/work-details.tsx`)

- Reads the selected workout's `id` from route params via `useLocalSearchParams`.
- Shows a large image, title, duration, calories, description, and a list of exercises.
- The footer button toggles between **"Start Workout"** and **"✓ Completed"** using local state.

### Reusable Card (`src/components/Card.tsx`)

| Prop       | Type                            | Description                    |
| :--------- | :------------------------------ | :----------------------------- |
| `image`    | `ImageSourcePropType \| string` | Workout image (URI or require) |
| `title`    | `string`                        | Workout title                  |
| `duration` | `number`                        | Duration in minutes            |
| `calorie`  | `number`                        | Calories burned                |
| `onPress`  | `() => void`                    | Called when the card is tapped |

---

## ✅ Assignment Requirements

|  #  | Requirement                                              | Implementation                               |
| :-: | :------------------------------------------------------- | :------------------------------------------- |
|  1  | Set up a new Expo project                                | Expo project with file-based routing         |
|  2  | Reusable workout card component (props)                  | `src/components/Card.tsx`                    |
|  3  | List screen rendering ≥ 6 cards by mapping over data     | `src/app/index.tsx` + `src/data/workouts.ts` |
|  4  | Favourite icon toggling with state, independent per card | `useState` in `Card.tsx`                     |
|  5  | Stack navigator, card → details with route params        | Expo Router `<Stack>` + `router.push`        |
|  6  | Start Workout / Completed toggle button                  | `useState` in `work-details.tsx`             |
|  7  | Simple clean design, flat colours, simple icons          | `src/constants/theme.ts`                     |

---

## 📝 Notes

- Workout images are currently loaded from **Unsplash** URLs defined in `src/data/workouts.ts`. You can replace them with local images in `assets/` by changing the `image` field to a `require()` call.
- The design follows the reference Figma kit for structure and colour only.

---

## 📦 Submission

1. Push this project to a GitHub repository.
2. On GitHub, click **Code → Download ZIP**.
3. Submit the downloaded ZIP on **Sakai** under this assignment.

---

## 📄 License

This project is for academic purposes as part of DCIT 324 at the University of Ghana.
