import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://delicious-in-dungeon.fandom.com/wiki/Senshi";
   let authorPhoto = "https://opreviews.anime-pictures.net/fdb/fdbc81b35a41b8f774cfc69813e549d7_bp.jpg";
   let authorName = "Senshi";

   return (
      <div>
         <img src={authorPhoto} alt = "dwarf" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["huge scorpion","walking mushroom","seaweed","dried slime","water"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>HUGE SCORPION AND WALKING MUSHROOM HOTPOT</h1>
            <p>This is the moment. The legend. The first dish we see Senshi make and the one we have been chasing ever since. The individual parts are questionable — slime? Scorpions? Sentient mushrooms? — but by God, that is the most delicious soup Ive ever seen. You know the slime noodles have a tantalizing texture, and that the scorpion meat is juicy, and that the mushrooms are flavorful. It is the sort of dish where I will be eating every bit and slurp up the last drops of soup at the bottom of the bowl. </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://cdn.vox-cdn.com/thumbor/70xz1bHNU_iCi8uXGFCpslqSFGg=/0x0:1000x563/920x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25248289/1_1_Huge_Scorpion_and_Walking_Mushroom_Hotpot__Anime_.jpeg" alt="dish" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
