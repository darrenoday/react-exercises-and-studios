import recipedata from "./recipe.json";




function RecipeName() {
  const recipeImage = recipedata.map((data) =>(
<div key = {data.recipeImage}>
  <img  key =  {data.recipeImage} src = {data.recipeImage}></img>
</div>

  ))
  
  return recipeImage;
}
    

export default RecipeName;
// function RecipeImage() {
//    return;
//  }
 
//  export default RecipeImage;
 
//  //import json file for the data
 //apply css for className recipeImage
 