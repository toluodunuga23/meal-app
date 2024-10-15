export const SelectMealMembers= [
  {
    id: 1,
    title: "Just Me",
    desc: "Dinner for one, please.",
    icon: "👤", // Symbol for solo traveler
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Enjoy a romantic meal for two.",
    icon: "👥", // Symbol for couple
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "Share a meal with your loved ones.",
    icon: "👨‍👩‍👧‍👦", // Symbol for family
    people: "4",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Dine with your squad.",
    icon: "👬", // Symbol for group of friends
    people: "5+",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💸", // Symbol for cheap
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balance between cost and comfort, enjoy the best of both worlds.",
    icon: "💵", // Symbol for moderate budget
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Indulge in lavish experiences, no expense spared.",
    icon: "💎", // Symbol for luxury
  },
];


export const MealTime = [
  {
    id: 1,
    title: "Breakfast",
    icon: "🍳"
    },
  {
    id: 2,
    title: "Lunch",
    icon: "🍔"
    },
  {
    id: 3,
    title: "Dinner",
    icon: "🍝"
    },
  
  ];


export const MealType = [
  {
    id: 1,
    title: "Home Cooked",
    icon: "🍳",
    desc: "Cook a meal at home with fresh ingredients.",
  }
  ,
  {
    id: 2,
    title: "Restaurant",
    icon: "🍽",
    desc: "Dine out at a local restaurant or cafe.",
  }
  ];
  


export const AI_PROMPT_HOME = `
You are an AI Meal Chef. They are eating {meal_time} and want to cook a {meal} meal for {people} people with a Provide a recipe that they would love based on the following criteria. 

`;

