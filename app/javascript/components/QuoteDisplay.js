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

//   setQuoteIdFromQueryString (qs) {
//     this.qsParams = queryString.parse(qs);
//     if (this.qsParams.quote) {
//       // assign quote ID from the URL's query string
//       this.quoteId = Number(this.qsParams.quote);
//     } else {
//       this.quoteId = this.props.startingQuoteId
//       // update URL in browser to reflect current quote in query string
//       this.props.history.push(`/?quote=${this.quoteId}`);
//     }
//   }

//   componentDidMount () {
//     console.log(this.props, "qd-props");
//     this.setQuoteIdFromQueryString(this.props.location.search);
//     this.fetchQuote(this.quoteId);
//   }

//   componentWillReceiveProps (nextProps) {
//     this.setQuoteIdFromQueryString(nextProps.location.search);
//     this.fetchQuote(this.quoteId);
//   }

//   render () {
//     const quote = this.state.quote
//     const nextQuoteId = quote.next_id
//     const previousQuoteId = quote.previous_id

//     return (
//         <div>
//         {previousQuoteId &&
//         <Link to={`/?quote=${previousQuoteId}`}>
//             Previous
//             </Link>
//         }
//         {nextQuoteId &&
//             <Link to={`/?quote=${nextQuoteId}`}>
//             Next
//             </Link>
//         }
//         <p>{quote.text}</p>
//         <p>{quote.author}</p>
//         </div>
//     )

//   }
// }

// export default QuotesDisplay;
