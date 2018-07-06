import React from "react"
import PropTypes from "prop-types"
class Quote extends React.Component {
  render () {
    return (
      <React.Fragment>
        Text: {this.props.text}
        Author: {this.props.author}
      </React.Fragment>
    );
  }
}

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};
export default Quote
