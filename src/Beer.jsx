import React, { Component } from "react";
import { Link } from "react-router-dom";

class Beer extends Component {
	render() {
		let beer;
		if (this.props.id) {
			beer = (
				<React.Fragment>
					<Link to={`beer/${this.props.id}`}>
						<img
							src={this.props.image}
							className="beer-img"
							alt={this.props.name}
						/>
					</Link>

					<h3>{this.props.name}</h3>
					<h4>{this.props.tagline}</h4>
					<p>{this.props.description}</p>
					<b>Contributed by: {this.props.contributed_by}</b>
				</React.Fragment>
			);
		} else {
			beer = (
				<React.Fragment>
					<img
						src={this.props.image}
						className="beer-img"
						alt={this.props.name}
					/>

					<h3>{this.props.name}</h3>
					<h4>{this.props.tagline}</h4>
					<p>{this.props.description}</p>
					<b>Contributed by: {this.props.contributed_by}</b>
				</React.Fragment>
			);
		}
		return <div className="beer"> {beer}</div>;
	}
}

export default Beer;
