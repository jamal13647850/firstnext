import React from 'react'
import {useRouter} from "next/router";
import style from "./[pname].module.css"
const Product = (props)=>{
    const router = useRouter();
    return (
        <div className={style.div}>
            product {router.query.pname}
        </div>
    )
}

export default Product;