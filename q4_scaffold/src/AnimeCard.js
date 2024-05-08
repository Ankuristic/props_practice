import { Component } from "react";


// Complete the AnimeCard Component
class AnimeCard extends Component {

  render() {
    const { name, image } = this.props.anime;
    console.log("AnimeCard Component - Name:", name);
    console.log("AnimeCard Component - Image:", image);

    return <div className="anime-card">
      <img src={image} alt={image} />
        <p>{name}</p>
    </div>;
  }
}

export default AnimeCard;
