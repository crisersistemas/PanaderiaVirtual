import React from "react";
import { images } from "../utils/images";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<img src={product.url_img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">{"Es una tartaleta con una fresa en una cama de Crema Pastelera "}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item"> $0.10</li>
				<li className="list-group-item">0.25cm</li>
				<li className="list-group-item">20grs</li>
			</ul>
			<div className="card-body">
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
