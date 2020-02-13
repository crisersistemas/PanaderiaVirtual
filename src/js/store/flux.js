import { images } from "../utils/images";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			products: [
				{
					id_prod: 1,
					nom_prod: "Tartaleta de Fresa",
					url_img: images.img_1,
					desc_prod: "Es una tartaleta con una fresa en una cama de Crema Pastelera ",
					pvp_prod: 0.1,
					peso_prod: 0.2,
					tam_prod: 0.25,
					cos_prod: 0.7
				},
				{
					id_prod: 2,
					nom_prod: "Tartaleta de Durasno",
					url_img: images.img_2,
					desc_prod: "Es una tartaleta con un Durasno en una cama de Crema Pastelera ",
					pvp_prod: 0.1,
					peso_prod: 0.2,
					tam_prod: 0.25,
					cos_prod: 0.7
				},
				{
					id_prod: 3,
					nom_prod: "Ponque de Arequipe",
					url_img: images.img_3,
					desc_prod: "Es un Suave ponque con una Delicioza Crema de arequipe ",
					pvp_prod: 0.2,
					peso_prod: 0.2,
					tam_prod: 0.25,
					cos_prod: 0.14
				},
				{
					id_prod: 4,
					nom_prod: "Ponque de Limon",
					url_img: images.img_1,
					desc_prod: "Es un Suave Ponque con una Delicioza Crema de Limon ",
					pvp_prod: 0.2,
					peso_prod: 0.2,
					tam_prod: 0.25,
					cos_prod: 0.14
				},
				{
					id_prod: 5,
					nom_prod: "Ponque de Chocolate",
					url_img: images.img_5,
					desc_prod: "Es un Suave Ponque con una Delicioza Crema de Chocolate ",
					pvp_prod: 0.2,
					peso_prod: 0.2,
					tam_prod: 0.25,
					cos_prod: 0.14
				}
			],
			orders: [
				{
					id_prod: 1,
					cantidad: 5
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
