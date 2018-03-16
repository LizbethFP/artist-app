// import React from 'react';

// const SearchBar = () => (
//   <div className="search-bar">
//     <input></input>
//   </div>
// )

// export default SearchBar;

import React , { Component } from 'react';
class SearchBar extends Component {
  
  constructor(props){
    super(props);
    this.state = {term : ''}
  }

  handleOnchange = (e) => {
    console.log(e.target.value)
    this.setState({ term : e.target.value})
  }

  render(){
    return (
      <div className="search-bar">
        <input onChange = {this.handleOnchange}/>
        El valor del input es : {this.state.term}  
      </div>
    )
  }
}

export default SearchBar