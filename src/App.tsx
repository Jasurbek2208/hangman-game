import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from 'assets/styles/global'
import Hangman from 'pages/Hangman'

export default function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Hangman} />
        </Switch>
      </>
    </Router>
  )
}
