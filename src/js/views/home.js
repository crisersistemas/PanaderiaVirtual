import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import logoVibra from "../../img/logoVibra.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Bienvenidos </h1>
		<p>
			<img src={logoVibra} />
		</p>
		<a href="#" className="btn btn-success">
			la Panaderia Virtual
		</a>
	</div>
);
