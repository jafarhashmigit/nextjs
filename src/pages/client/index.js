import Link from "next/link";

function Client() {
    const clients = [
        {id:"max", value:"Maximum"},
        {id:"min", value:"Minimum"}
    ]
    return ( 
        <>
            This is Client
            <ul>
                {clients?.map((client)=>{
                    // console.log(client.id)
                    return <li key={client.id}>
                        <Link href={{
                            pathname: "/client/[id]",
                            query: {id: client.id}
                        }}>{client.value}</Link>
                    </li>
                })}
            </ul>
            
        </>
     );
}

export default Client;