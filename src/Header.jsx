import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div className="mt-3 mb-2">
		<Link to="/">
			<p>Back Home</p>
		</Link>
	</div>
);

export default Header;
