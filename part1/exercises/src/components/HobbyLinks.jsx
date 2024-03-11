export default function HobbyLinks(){
    let hobbyLinks = ["https://store.steampowered.com/", "https://www.alltrails.com/us/missouri"]
    return( 
        <div>
            <a href = {hobbyLinks[0]}>gaming</a>
            <a href = {hobbyLinks[1]}>hiking</a>
        </div>
    );


}