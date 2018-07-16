import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import axios from 'axios';

import Cocktail from './Cocktail';
// import CocktailForm from './CocktailForm';

class CocktailUI extends React.Component {

  constructor () {
    super();
    this.state = {
      drinkVal: "",
      ingredientVal: "",
      cocktailsArr: []
    };
  }

  componentDidMount () {
    // let params = {cocktail: "margarita"};
    axios.get( '/cocktails/margarita' )
        .then(response => {
          this.setState({
            cocktailsArr: response.data.drinks
          })
        })
        .catch(error => {
          console.error(error);
        });
  }

  render () {
    const cocktailsArr = this.state.cocktailsArr;
    let strings = [];
    
    let drinks = cocktailsArr.map((drink, i) => {
          for (let key in drink) {
            let str = `${key}: ${drink[key]}`
            strings.push(str);
          }
    });

    let elements = strings.map((str,i) => <p key={i}>{str}</p>);

    return (
      <div className="cocktail-elements">
        {elements}
      </div>
    )

  }
}

export default CocktailUI