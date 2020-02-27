import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const viewprodname = id_prod => {
	const { store, actions } = useContext(Context);
	for (let product of store.products) {
		console.log(product.nom_prod);
		if (product.id_prod == id_prod) {
			return product.nom_prod;
		}
	}
	return "no consegui";
};
export const viewprodpvp = id_prod => {
	const { store, actions } = useContext(Context);
	for (let product of store.products) {
		console.log(product.pvp_prod);
		if (product.id_prod == id_prod) {
			return product.pvp_prod.toFixed(2);
		}
	}
	return 0;
};

export const viewOrderTotal = () => {
	const { store, actions } = useContext(Context);
	let total = 0;
	for (let orderedProduct of store.orderProduct) {
		total += viewprodpvp(orderedProduct.id_prod) * orderedProduct.quantity;
	}
	return total.toFixed(2);
};
