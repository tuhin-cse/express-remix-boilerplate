import { json } from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return json(products);
}

interface Product {
    id: number;
    title: string;
    price: number;
}



export default function ProductsPage() {
    const products: Product[] = useLoaderData(); // Access the data provided by loader

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
