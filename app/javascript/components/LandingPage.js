import React from 'react'
import QuoteDisplay from './QuoteDisplay'
import CocktailUI from './CocktailUI'

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to landing page!</h1>
        <QuoteDisplay />
        <CocktailUI />
      </div>
    );
  }
}

export default LandingPage
