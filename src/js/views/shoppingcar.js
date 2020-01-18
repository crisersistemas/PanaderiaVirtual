import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { ProductCard } from "../component/productcard";

export const ShoppingCar = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			{store.products.map(product => {
				return <ProductCard key={product.id_prod} product={product} />;
			})}
		</React.Fragment>
	);
};
