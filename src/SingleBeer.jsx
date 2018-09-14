import React, { Component } from "react";
import Beer from "./Beer";
import axios from "axios";

class SingleBeer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			beer: null
		};
	}
	componentDidMount() {
		if (this.props.match.path !== "/random-beer") {
			axios
				.get(
					`https://ironbeer-api.herokuapp.com/beers/single/${
						this.props.match.params.id
					}`
				)
				.then(beer => {
					this.setState({
						beer: beer.data
					});
				})
				.catch(err => {
					console.log(err);
				});
		} else {
			axios
				.get(`https://ironbeer-api.herokuapp.com/beers/all/`)
				.then(beers => {
					let random = Math.floor(Math.random() * beers.data.length);
					this.setState({
						beer: beers.data[random]
					});
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
	render() {
		let beer;
		if (this.state.beer) {
			beer = (
				<Beer
					image={this.state.beer.image_url}
					name={this.state.beer.name}
					tagline={this.state.beer.tagline}
					contributed_by={this.state.beer.contributed_by}
					description={this.state.beer.description}
				/>
			);
		} else {
			return (
				<img
					src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif"
					alt="spin"
				/>
			);
		}
		return <div className="single-beer">{beer}</div>;
	}
}

export default SingleBeer;
