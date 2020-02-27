import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { images } from "../utils/images";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
	const [count, setCounter] = useState(0);
	const { store, actions } = useContext(Context);
	const addprod = () => {
		setCounter(count + 1);
		if (count + 1 >= 0) {
			actions.updateOrder(product.id_prod, count + 1);
		} else {
			setCounter(0);
		}
	};
	const subprod = () => {
		setCounter(count - 1);
		if (count - 1 >= 0) {
			actions.updateOrder(product.id_prod, count - 1);
		} else {
			setCounter(0);
		}
	};
	const negprod = () => {
		if (count < 0) {
			setCounter(0);
		}
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
				<li className="list-group-item"> Pvp ${product.pvp_prod.toFixed(2)}</li>
				<li className="list-group-item">
					{" "}
					<span>Tamaño</span>
					<span>{product.tam_prod * 100} cm</span>
				</li>
				<li className="list-group-item">
					<span>Peso</span>
					<span>{product.peso_prod * 1000} grs</span>
				</li>
			</ul>
			<div className="card-body">
				<div>Compra</div>
				<div className="row">
					<div className="col-sm-3">
						<span className="input-group-btn">
							<button className="btn btn-default" id="carga" onClick={subprod}>
								<h1>
									<strong> -</strong>
								</h1>
							</button>
						</span>
					</div>
					<div className="col-sm-6">
						<span className="input-group-btn">
							<input
								type="text"
								id="contador"
								className="form-control input-group-btn text-right"
								value={count}
								onChange={negprod}
							/>
						</span>
					</div>
					<div className="col-sm-3">
						<span className="input-group-btn">
							<button className="btn btn-default" id="carga" onClick={addprod}>
								<h1>
									<strong>+</strong>
								</h1>
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
