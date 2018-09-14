import React, { Component } from "react";
import Beer from "./Beer";
import axios from "axios";

class Beers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: null,
			query: null
		};
	}

	componentDidMount() {
		axios
			.get("https://ironbeer-api.herokuapp.com/beers/all")
			.then(beers => {
				this.setState({
					list: beers.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let list;
		if (
			(this.state.list && this.state.query === null) ||
			this.state.query === ""
		) {
			list = this.state.list.map((b, i) => {
				return (
					<Beer
						key={i}
						id={b._id}
						image={b.image_url}
						name={b.name}
						tagline={b.tagline}
						contributed_by={b.contributed_by}
					/>
				);
			});
		} else if (this.state.query) {
			list = this.state.list.map((b, i) => {
				if (b.name.toLowerCase().indexOf(this.state.query) !== -1) {
					return (
						<Beer
							key={i}
							id={b._id}
							image={b.image_url}
							name={b.name}
							tagline={b.tagline}
							contributed_by={b.contributed_by}
						/>
					);
				}
			});
		} else {
			return (
				<img
					src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif"
					alt="spin"
				/>
			);
		}
		return (
			<div>
				<div className="container mb-3">
					<input
						type="search"
						onChange={e => this._search(e)}
						className="form-control"
					/>
				</div>
				<div className="beers-list">{list}</div>
			</div>
		);
	}

	_search = e => {
		this.setState({
			query: e.target.value.toLowerCase()
		});
	};
}

export default Beers;
