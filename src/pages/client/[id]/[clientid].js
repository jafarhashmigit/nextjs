import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ClientDynamicList = ({id, clientid}) => {
    return ( 
        <>
        id: {id} <br/>
        clientid: {clientid}
        </>
     );
}

ClientDynamicList.getInitialProps = async (context) => {
    // context.query is the object of query params
    console.log("context.query", context.query)
    const { id, clientid } = context.query
    return { id, clientid }
}

export default ClientDynamicList;