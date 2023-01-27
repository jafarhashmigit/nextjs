import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function Product(props) {
    return ( 
        <>
            <ul>
                {props?.products?.map((product)=> {
                    return <li key={product.id}><Link href={`/product/${product.id}`}>{product.title}</Link></li>
                })}
            </ul>
        </>
     );
}

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(),'src/data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return {
        props:{
            products: data.products
        },
        revalidate: 10,
    }
}

export default Product;