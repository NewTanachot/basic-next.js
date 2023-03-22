import { GetStaticPaths } from "next";
import { GetStaticProps, InferGetStaticPropsType  } from "next";
// import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IProduct } from "@/types/interfaceType";

export const getStaticPaths: GetStaticPaths = async () => {

    const products: IProduct[] = await fetch("http://localhost:81/api/Product/GetProductForAllUser").then(res => res.json());
    const paths = products.map(product => 
    (
        { 
            params: 
            { 
                id: product.productId.toString() 
            } 
        }
    ));

    return {
        paths,
        fallback: false
      }
}

export const getStaticProps: GetStaticProps<{ products: IProduct[] }>  = async (context) => {

    const id = context.params?.id;
    const res: Response = await fetch(`http://localhost:81/api/Product/GetProductForAllUser/${id}`);
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