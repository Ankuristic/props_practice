import { Component } from "react";
import AnimeCard from "./AnimeCard";


// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const {anime}= this.props
    console.log(anime);

    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {
        anime.map((ani,index)=>{
          console.log("Mapping anime item:", ani);

          <AnimeCard key={index} name={ani.name} image={ani.image} />
        })

        
      }

    </div>;
  }
}

export default AnimeList;
