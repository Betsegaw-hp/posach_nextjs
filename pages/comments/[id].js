import { server } from '../../config/index'
import { useRouter } from "next/router";
import CommentView from "../../comps/CommentView";
import styles from '../../styles/Home.module.css'

const Comments = ({ comments, post, users  }) => {

    const router = useRouter()
    const { id } = router.query

    return ( 
        <div className={styles.common_container}>
        <CommentView    comments={comments}
                        users={users}
                        post={post}/>
        </div>
     );
}
 
export default Comments;

export async function getStaticProps({ params }) {
    const urls =    [   `http://jsonplaceholder.typicode.com/posts/${params.id}/comments`,
                        `http://jsonplaceholder.typicode.com/posts/${params.id}`,
                        `http://jsonplaceholder.typicode.com/users/${params.id}`]

    const res = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(res.map(e => e.json()))

    return {
        props : { comments : data[0] , post : data[1], users : data[2]}
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()

    const paths = data.map(comment => {
        return { params : { id : comment.postId.toString()}}
    })

    console.log(paths)
    return {
        paths,
        fallback: false
    }
}