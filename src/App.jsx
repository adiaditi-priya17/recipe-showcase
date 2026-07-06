import React from 'react';
import Card from './components/Card';
const recipes = [
  {
    image:
      "https://myheartbeets.com/wp-content/uploads/2014/05/kadai-chicken-recipe.jpg",
    title: "Kadai Chicken",
    description:
      "A spicy and flavorful North Indian chicken curry cooked with fresh peppers and aromatic spices.",
    time: "20 min",
    servings: "4 servings",
    difficulty: "Medium",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogj6U05DJepLXoreZ2msV8Y4Z2-qa9OYkWA&s",
    title: "Paneer Butter Masala",
    description:
      "Creamy paneer cubes cooked in a rich tomato and butter-based gravy.",
    time: "30 min",
    servings: "3 servings",
    difficulty: "Easy",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/recipe/w-l/1030_1.jpg",
    title: "Veg Biryani",
    description:
      "Fragrant basmati rice layered with vegetables and aromatic spices.",
    time: "45 min",
    servings: "5 servings",
    difficulty: "Hard",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg",
    title: "Chicken Biryani",
    description:
      "A classic Indian rice dish packed with juicy chicken and flavorful spices.",
    time: "50 min",
    servings: "6 servings",
    difficulty: "Hard",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I8R5TXGoabQURaYGUMiLe7d1GIcdpLdTLQ&s",
    title: "Palak Paneer",
    description:
      "Soft paneer cubes simmered in a creamy spinach gravy.",
    time: "25 min",
    servings: "4 servings",
    difficulty: "Medium",
  },
  {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv8nOd0cc9Nemr_y1JLV41wTUUBg3vYAq2w&s",
  title: "Chhole Bhature ",
  description:
    "A hearty Punjabi chickpea curry cooked with onions, tomatoes, and aromatic spices.",
  time: "35 min",
  servings: "4 servings",
  difficulty: "Medium",
},
{
  image:
    "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
  title: "Masala Dosa",
  description:
    "A crispy South Indian rice crepe filled with a flavorful potato masala stuffing.",
  time: "40 min",
  servings: "3 servings",
  difficulty: "Hard",
},
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodHuEkUHdpxf6D9-rEvX2wubv4ap1psT_iQ&s",
    title: "Butter Chicken",
    description:
      "Tender chicken cooked in a rich buttery tomato sauce.",
    time: "40 min",
    servings: "5 servings",
    difficulty: "Medium",
  },
];

const App = () => {
  return (
    <div className='parent'>
      {recipes.map((elem,idx)=>{
        return <Card key={idx} recipe={elem}/>;
      })}
    </div>
  )
}

export default App
