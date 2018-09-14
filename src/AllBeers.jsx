import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Beers from "./Beers";
import SingleBeer from "./SingleBeer";
import NewBeer from "./NewBeer";

const AllBeers = () => (
	<div>
		<div>
			<Route path="/beers" component={Header} />
			<Route path="/random-beer" component={Header} />
			<Route path="/beer/:id" component={Header} />
			<Route path="/new-beer" component={Header} />
		</div>

		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/beers" component={Beers} />
			<Route exact path="/random-beer" component={SingleBeer} />
			<Route path="/beer/:id" component={SingleBeer} />
			<Route path="/new-beer" component={NewBeer} />
		</Switch>
	</div>
);

export default AllBeers;
