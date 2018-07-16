import React from "react"
import PropTypes from "prop-types"
class Cocktail extends React.Component {
  render () {
    console.log(this.props, "cocktail props");
    return (
        <div>
          <p>{this.props.cocktail}</p>
        </div>
    );
  }
}

Cocktail.propTypes = {
  cocktail: PropTypes.string,
};

export default Cocktail