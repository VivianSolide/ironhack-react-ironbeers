import React, { Component } from "react";
import View from "./View";

class Home extends Component {
	render() {
		return (
			<div>
				<View
					address="/beers"
					img="https://images.unsplash.com/photo-1527443631444-cfeaa17b56fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1e687f285bb4037a5b11e9fc6be1a2&auto=format&fit=crop&w=1503&q=80"
					title="All Beers"
					caption="Lorem ipsum dolor sit amet"
				/>
				<View
					address="/random-beer"
					img="https://images.unsplash.com/photo-1529378836015-aaf5c35609ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53b505c3b1cc4516cc34c1ea88c44195&auto=format&fit=crop&w=1350&q=80"
					title="Random Beer"
					caption="Lorem ipsum dolor sit amet"
				/>
				<View
					address="/new-beer"
					img="https://images.unsplash.com/photo-1531816416667-36b0e8a9bc63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a122629d3ec8b75cba3e8c6fa2608d&auto=format&fit=crop&w=1350&q=80"
					title="New Beer"
					caption="Lorem ipsum dolor sit amet"
				/>
			</div>
		);
	}
}

export default Home;
