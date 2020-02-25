import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Inicio</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Recetas de Productos</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/shoppingcar">
					<button className="btn btn-primary">Carrito de Compras</button>
				</Link>
			</div>
		</nav>
	);
};
