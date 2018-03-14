import React, {Component} from 'react';
import Shakira from '../assets/images/shakira.jpg';
import Thalia from '../assets/images/thalia.jpg';
import Jenifer from '../assets/images/jenifer.jpg';

class ItemArtist extends Component {
  constructor() {
    super();
    this.state = { artists: [{
      artistName: 'Shakira',
      imgUrl: Shakira,
      description: 'fhsdjkfsgjfgsfgsjkfsdjkfgsjdfgsjfsjf'
    }, {
      artistName: 'Thalia',
      imgUrl: Thalia,
      description: 'fhsdjkfsgjfgsfgsjkfsdjkfgsjdfgsjfsjf'
    }, {
      artistName: 'Jenifer',
      imgUrl: Jenifer,
      description: 'fhsdjkfsgjfgsfgsjkfsdjkfgsjdfgsjfsjf'
    }]
    }
  }

render() {
  const arrayArtist = this.state.artists.map((artist, index) => {
    console.log(artist);
    
    return (
    <div>
    <li key="props">
      <img src={artist.imgUrl} alt={artist.artistName}/>      
      <p>{artist.artistName}</p>
    </li>
    </div>
    )
  });
    
  return (
      <div>{arrayArtist}</div>
    )
  };

};

export default ItemArtist;