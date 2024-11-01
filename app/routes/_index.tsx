import {Link} from "@remix-run/react";

const Index = () => {
    return (
        <div>
            <h1>Welcome to Express + Remix Boilerplate</h1>
            <Link to={'/products'}>Products</Link>
        </div>
    );
}

export default Index;