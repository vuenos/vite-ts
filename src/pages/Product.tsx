import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		
		try {
			const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProducts();
	}, [])

	return (
		<div>
			<h1>Product</h1>
			<ul>
				{products && products.map((product: {id: number, title: string, body: string}) => (
					<li key={product.id}>
						<h2>{product.title}</h2>
						<p>{product.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Product;