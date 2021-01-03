import React from 'react'
import {useRouter} from "next/router";

const Product2 = (props)=>{
    const router = useRouter();
    

    return (
        
        <div>
            product {router.query.slug[0]}
            <br/>
            product {router.query.slug[1]}
        </div>
    )
}

export default Product2;