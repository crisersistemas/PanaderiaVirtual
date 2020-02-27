import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { ProductCard } from "../component/productcard";
import { OrderList } from "../component/orderlist";
import PropTypes from "prop-types";
import { viewprodname, viewprodpvp, viewOrderTotal } from "../utils/utils";

export const ShoppingCar = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="row">
							{store.products.map(product => {
								return <ProductCard key={product.id_prod} product={product} />;
							})}
						</div>
					</div>
					<div className="col-4">
						<div>
							<ul className="list-group">
								{store.orderProduct.map(order => {
									return <OrderList key={order.id_prod} order={order} />;
								})}
							</ul>
						</div>
						<div>{"el monto total es " + viewOrderTotal()}</div>
						<button className="btn btn-primary" type="submit">
							CONFIRMA PEDIDO
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
