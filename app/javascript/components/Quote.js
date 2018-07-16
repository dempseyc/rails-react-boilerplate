import React from "react"
import PropTypes from "prop-types"
class Quote extends React.Component {
  render () {
    console.log(this.props, "quote props");
    return (
      <React.Fragment>
        <div>
          <p>{this.props.text}</p>
        </div>
      </React.Fragment>
    );
  }
}

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};
export default Quote
