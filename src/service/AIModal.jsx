import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Ensure this model name is valid
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};



export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a meal idea for Japanese cuisine, eating with friends:",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
{
  "meal": "Sushi Rolls",
  "ingredients": [
    "sushi rice",
    "nori (seaweed sheets)",
    "salmon",
    "avocado",
    "soy sauce",
    "wasabi"
  ],
  "prepTime": "45 minutes",
  "servingSize": "4",
  "instructions": "Prepare sushi rice, slice the fillings, and roll everything in nori. Serve with soy sauce and wasabi."
}
\`\`\``
        },
      ],
    },
  ],
});


// export const MealPlanchatSession = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: "Generate a home-cooked meal plan for breakfast, lunch, and dinner with Japanese cuisine, eating with friends:",
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: `\`\`\`json
// {
//   "userEmail": "",
//   "userSelection": {
//     "mealType": ["Breakfast", "Lunch", "Dinner"],
//     "cuisineType": "Japanese",
//     "companions": "Friends"
//   },
//   "id": "1234567890",
//   "mealPlan": {
//     "breakfast": {
//       "meal": "Japanese Pancakes (Okonomiyaki)",
//       "ingredients": [
//         "flour",
//         "eggs",
//         "cabbage",
//         "pork belly",
//         "okonomiyaki sauce",
//         "mayonnaise"
//       ],
//       "preparationTime": "30 minutes",
//       "instructions": "Mix all ingredients, cook on a griddle, and top with okonomiyaki sauce and mayonnaise."
//     },
//     "lunch": {
//       "meal": "Sushi Rolls",
//       "ingredients": [
//         "sushi rice",
//         "nori (seaweed sheets)",
//         "salmon",
//         "avocado",
//         "soy sauce",
//         "wasabi"
//       ],
//       "preparationTime": "45 minutes",
//       "instructions": "Prepare sushi rice, slice the fillings, and roll everything in nori. Serve with soy sauce and wasabi."
//     },
//     "dinner": {
//       "meal": "Ramen Noodles",
//       "ingredients": [
//         "ramen noodles",
//         "chicken broth",
//         "soy sauce",
//         "soft-boiled eggs",
//         "pork belly",
//         "scallions"
//       ],
//       "preparationTime": "1 hour",
//       "instructions": "Simmer the broth, cook the noodles, and add toppings such as pork belly, eggs, and scallions."
//     }
//   }
// }
// \`\`\``
//         },
//       ],
//     },
//   ],
// });
