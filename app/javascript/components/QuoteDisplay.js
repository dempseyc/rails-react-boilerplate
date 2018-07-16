import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import axios from 'axios';

import Quote from './Quote';

class QuoteDisplay extends React.Component {

  constructor () {
    super();
    this.state = {
      quotes: []
    };
  }

  componentDidMount () {
    axios.get( '/quotes' )
        .then(response => {
          this.setState({
            quotes: response.data
          })
        })
        .catch(error => {
          console.error(error);
        });
  }

  render () {
    const quotes = this.state.quotes;
    const numQuotes = quotes.length;
    const elements = quotes.map((q,i) => {
      return <Quote key={`quote-${i}`} text={q.text} author={q.author} />;
    });

    return (
      <div>
        {elements}
      </div>
    )

  }
}

export default QuoteDisplay
