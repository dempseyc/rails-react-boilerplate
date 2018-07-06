import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld


// $ rails g react:component a_dir_or_default_components/HelloWorld greeting:string

//// in a view:
// <%= react_component("HelloWorld", { greeting: "Hello" }) %>
