import React, { Component } from "react";
import { Link } from "react-router-dom";

class View extends Component {
	render() {
		return (
			<div className="home-view">
				<Link to={this.props.address}>
					<img
						src={this.props.img}
						className="home-cover"
						alt={this.props.title}
					/>
				</Link>
				<h1>{this.props.title}</h1>
				<p>{this.props.caption}</p>
			</div>
		);
	}
}

export default View;
