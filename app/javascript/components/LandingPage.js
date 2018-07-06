import React from 'react'
import QuoteDisplay from './QuoteDisplay'

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to landing page!</h1>
        <QuoteDisplay />
      </div>
    );
  }
}

export default LandingPage
