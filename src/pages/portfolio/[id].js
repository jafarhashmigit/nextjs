import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PortfolioDynamicList = ({id}) => {
    return ( 
        <>
        Portfolio {id}
        </>
     );
}

PortfolioDynamicList.getInitialProps = async (context) => {
    // context.query is the object of query params
    const { id } = context.query
    return { id }
}

export default PortfolioDynamicList;