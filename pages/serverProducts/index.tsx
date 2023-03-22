import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IProduct } from "@/types/interfaceType";

export const getServerSideProps = async () => {
    const res: Response = await fetch("http://localhost:81/api/Product/GetProductForAllUser");
    const products: IProduct[] = await res.json();

    return { props: { products } }; 
}

export default function GetProducts( {products} : InferGetServerSidePropsType<typeof getServerSideProps> ) {

    console.log("U R in GetServerSideProps...");
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
