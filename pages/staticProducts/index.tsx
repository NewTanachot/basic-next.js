import { GetStaticProps, InferGetStaticPropsType } from "next";
import { IProduct } from "@/types/interfaceType";

export const getStaticProps = async () => {
    const res: Response = await fetch("http://localhost:81/api/Product/GetProductForAllUser");
    const products: IProduct[] = await res.json();

    return { props: { products } }; 
}

export default function GetProducts( {products} : InferGetStaticPropsType<typeof getStaticProps> ) {

    console.log("U R in GetStaticProps...");
    return (
        <>
            {products.map((product) => (
                <div key={product.productId}>
                    <h3>{product.productId} - {product.productName}</h3>
                </div>
            ))}
        </>
    );
};
