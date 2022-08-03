import React, {useContext} from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import {Context} from "../store/appContext";

	export const Home = () => {
		const {store, actions} = useContext(Context)

	
		return(
		<div className="text-center mt-5">
			{store.characters.map((alien,i)=> {
				return <Card key={i} item={alien}/>
			})}
		</div>
	)};

	Card.proptype = { }