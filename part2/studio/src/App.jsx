import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

import aveButton from "./SaveButton"
import ClickedButton from "./ClickedButton"

export default function App() {
  return (
    
    <RecipeImage />
     <RecipeName />
      <RateARecipe rating={5} />
      <SaveButton></SaveButton>
      <ClickButton></ClickButton>
     <Button saveButton={true}/>
      <AuthorInfo/>
      <IngredientList>
    
  );
}
