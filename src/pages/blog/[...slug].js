
function BlogPost() {
    return ( 
        <>
            <h1>Blog Post</h1>
        </>
     );
}

BlogPost.getInitialProps = async (context) => {
    // context.query is the object of query params
   console.log("context.query",context.query)
    return {};
}

export default BlogPost;