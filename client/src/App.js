import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Auth from './pages/Auth';
import Dashborad from './pages/Dashboard';
import Landing from './pages/Landing';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/auth">
                        <Auth />
                    </Route>
                    <Route path="/dashboard">
                        <Dashborad />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
