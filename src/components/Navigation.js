import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../Context/CartContext';

const Navigation = () => {
	const { cart } = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Carts 
				<span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;