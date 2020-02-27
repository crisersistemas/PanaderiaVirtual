import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { viewprodname, viewprodpvp } from "../utils/utils";

export const OrderList = ({ order }) => {
	const { store, actions } = useContext(Context);

	//const concurent_product = viewprod(order.id_prod);
	const renglon_pedido = viewprodpvp(order.id_prod) * order.quantity;
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{viewprodname(order.id_prod)}
			<span className="badge badge-primary badge-pill">{order.quantity}</span>
			<span>{viewprodpvp(order.id_prod)}</span>
			<span>{renglon_pedido.toFixed(2)}</span>
		</li>
	);
};

OrderList.propTypes = {
	order: PropTypes.object
};
