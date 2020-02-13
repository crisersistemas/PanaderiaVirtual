import React, { useState } from "react";
import { images } from "../utils/images";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
	const [count, setCounter] = useState(0);
	const addprod = () => {
		setCounter(count + 1);
	};
	const subprod = () => {
		setCounter(count - 1);
	};
	return (
		<div className="card col-4">
			<img src={product.url_img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">
					<strong>{product.nom_prod}</strong>
				</h5>
				<p className="card-text">{product.desc_prod}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item"> Pvp ${product.pvp_prod}</li>
				<li className="list-group-item">
					{" "}
					Tamaño
					{product.tam_prod * 100}
					cm
				</li>
				<li className="list-group-item">
					Peso
					{product.peso_prod * 1000}
					grs
				</li>
			</ul>
			<div className="card-body">
				<div>Compra</div>
				<div className="col-8">
					<span className="input-group-btn">
						<button className="btn btn-defaultz" id="carga" onClick={addprod} type="button">
							+
						</button>
					</span>
					<input type="text" id="contador" className="form-control" placeholder="1" value={count} />
					<span className="input-group-btn">
						<button className="btn btn-default" id="carga" onClick={subprod} type="button">
							-
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
