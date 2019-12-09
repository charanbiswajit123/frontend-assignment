import React from 'react';
import Tab from './Tab';
import SidebarMenu from './SidebarMenu';
import MyIssuances from './MyIssuances';
import ExternalIssuances from './ExternalIssuances';
import FavoriteIssuances from './FavoriteIssuances';
import MNDAManagement from './MNDAManagement';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
		<BrowserRouter>
			<div className="external">
				<div className="frame">
					<div className="group">
						<div className="vector"></div>
						<div className="text">
							<span>Alan Lambert</span>
						</div>
					</div>
					<div className="header">
						<span>Deal Room</span>
					</div>
					<Tab />
					<Switch>
						<Route path="/" exact component={ExternalIssuances} />
						<Route path="/favoriteissuances" component={FavoriteIssuances} />
						<Route path="/myissuances" component={MyIssuances} />
						<Route path="/mndamanagement" component={MNDAManagement} />
					</Switch>
				</div>
				<SidebarMenu />
			</div>
		</BrowserRouter>
    )
  }
}

export default App;
