import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

export const OrderList = ({ order }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{order.id_prod}
			<span className="badge badge-primary badge-pill">{order.quantity}</span>
		</li>
	);
};

OrderList.propTypes = {
	order: PropTypes.object
};
