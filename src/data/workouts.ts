export type Workout = {
  id: string;
  title: string;
  duration: number;
  calories: number;
  category: "Gym" | "Yoga" | "HIIT" | "Cardio";
  image: string;
  description: string;
  exercises: string[];
};

export const workouts: Workout[] = [
  {
    id: "1",
    title: "Full Body Strength",
    duration: 45,
    calories: 320,
    category: "Gym",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
    description:
      "A complete full body workout designed to build strength and improve endurance.",
    exercises: ["Push Ups", "Dumbbell Rows", "Squats", "Plank"],
  },

  {
    id: "2",
    title: "Morning Yoga",
    duration: 30,
    calories: 180,
    category: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    description:
      "Start your day with gentle movements and stretches that improve flexibility and balance.",
    exercises: ["Cat Cow", "Downward Dog", "Warrior Pose", "Child's Pose"],
  },

  {
    id: "3",
    title: "HIIT Cardio Blast",
    duration: 25,
    calories: 280,
    category: "HIIT",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800",
    description:
      "A high-intensity workout designed to burn calories and improve cardiovascular fitness.",
    exercises: ["Jumping Jacks", "Mountain Climbers", "Burpees", "High Knees"],
  },

  {
    id: "4",
    title: "Lower Body Burn",
    duration: 40,
    calories: 300,
    category: "Gym",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800",
    description:
      "Focus on your legs and glutes with a challenging lower-body strength workout.",
    exercises: ["Squats", "Lunges", "Glute Bridges", "Calf Raises"],
  },

  {
    id: "5",
    title: "Core Crusher",
    duration: 20,
    calories: 150,
    category: "Gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    description:
      "Strengthen your core with exercises that target your abs and improve stability.",
    exercises: ["Crunches", "Russian Twists", "Leg Raises", "Plank"],
  },

  {
    id: "6",
    title: "Evening Stretch",
    duration: 15,
    calories: 120,
    category: "Yoga",
    image: "https://images.unsplash.com/photo-1510894347719-fc3d9f7c4e3d?w=800",
    description:
      "Relax and recover with a gentle stretching session for your entire body.",
    exercises: [
      "Neck Stretch",
      "Shoulder Stretch",
      "Hamstring Stretch",
      "Butterfly Stretch",
    ],
  },
];
