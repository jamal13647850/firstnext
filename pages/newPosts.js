import axios from "axios";
import Link from "next/link";


const NewPosts=({posts})=>{
    
    return (
        <div>
            <h1>new post</h1>
            <ul>
            {posts.map(post=><li key={post.id}><Link href={"/posts/"+post.id}>{post.title}</Link></li>)}
            </ul>
        </div>
    );
};


export async function getServerSideProps(){
    const response = await axios.get("http://localhost:4001/posts");
    return {
        props:{
            posts:response.data,
        }
    }
}

export default NewPosts