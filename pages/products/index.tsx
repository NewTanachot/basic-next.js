interface Product {
    productId: string,
    productName: string,
    productDescription: string,
    mfd: Date,
    exd: Date,
    userId: string,
    userName: string,
    productAddDate: Date
}

interface ProductProps {
    products: Product[];
  }

export async function getStaticProps() {
    const res: Response = await fetch("http://localhost:81/api/Product/GetProductForAllUser");
    const products: Product[] = await res.json();

    return { props: { products } }; 
}

export default function Index({products} : ProductProps) {
    console.log(products)
    return (
        <>
            {products.map((product) => (
                <div key={product.productId}>
                    <h3>{product.productName}</h3>
                </div>
            ))}
        </>
    );
};