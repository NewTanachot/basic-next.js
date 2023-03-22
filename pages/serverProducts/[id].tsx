import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IProduct } from "@/types/interfaceType";

export const getServerSideProps: GetServerSideProps<{ product: IProduct[] }> = async (context) => {

    const id = context.query.id;
    const res = await fetch(`http://localhost:81/api/Product/GetProductForAllUser/${id}`);
    const product: IProduct[] = await res.json();
    
    return {
      props: {
        product,
      },
    }
}

export default function GetProducts( {product} : InferGetServerSidePropsType<typeof getServerSideProps> ) {

    console.log("U R in GetServerSideProps...");
    return (
        <>
            <h3>{product[0].productId} - {product[0].productName}</h3>
        </>
    );
};

// ========== [ Another way to get all props ] ==========

// export default function GetProducts( props : InferGetServerSidePropsType<typeof getServerSideProps> ) {
//     return (
//         <>
//             <h3>{props.product.productId} - {props.product.productName}</h3>
//         </>
//     );
// };