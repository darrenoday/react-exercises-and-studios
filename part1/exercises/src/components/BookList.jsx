export default function BookList() {
   let pageTitle = "Favorite Books";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Return_of_the_King_cover.gif/220px-The_Return_of_the_King_cover.gif";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="lord of the rings" />
         <img src={book2} alt="two towers" />
         <img src={book3} alt="return of the king" />
      </div>      
   );
}