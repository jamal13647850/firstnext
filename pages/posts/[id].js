import axios from "axios";
import { useEffect, useState } from "react"
const PostDetail = ({ post }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/comments?postId=" + post.id).then(res => {
            setComments(res.data)
        })
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <hr></hr>
            <ul>
                {comments.map((comment, index )=> (<li key={index}><h3>{comment.sender}</h3><p>{comment.message}</p></li>))}
            </ul>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const response = await axios.get("http://localhost:4001/posts/" + params.id);
    return {
        props: {
            post: response.data,
        }
    }
};


export async function getStaticPaths() {
    const response = await axios.get("http://localhost:4001/posts");
    const paths = response.data.map((post) => `/posts/${post.id}`)
    return {
        paths,
        fallback: false
    }
}

export default PostDetail;