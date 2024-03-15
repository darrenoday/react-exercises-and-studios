import "./styling.css";
import recipedata from "./recipe.json";

function AuthorInfo() {
  const authorName = recipedata.map((data) =>(
    <div key = {data.name} >{data.author}</div>
  ))

  const authorImage = recipedata.map((data) =>(
    <div> img src={data.authorImage}</div>
  ))

  const authorURL = recipedata.map((data) =>(
    <div> a href = ={data.website}</div>
  ))
   return(
    <div>
      {authorImage}
      {authorName}
      {auithorURL}

    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 