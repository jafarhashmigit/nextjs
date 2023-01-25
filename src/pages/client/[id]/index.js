import { useRouter } from "next/router";

const SingleClient = ({id}) =>{
    const router = useRouter();

    const LoadProject =(id)=>{
        router.replace(`/client/${id}/a`)
    }

    return ( 
        <>
        Client id = {id}
        <div>

        <button onClick={()=>LoadProject(id)}>Load project</button>
        </div>
        </>
     );
}


SingleClient.getInitialProps = async (context) => {
    // context.query is the object of query params
    console.log("context.query", context.query)
    const { id } = context.query
    return { id }
}


export default SingleClient;