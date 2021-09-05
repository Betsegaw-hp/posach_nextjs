import { server } from '../../config/index'
import { useRouter } from "next/router";
import CommentItem from "../../comps/CommentItem";
import styles from '../../styles/Home.module.css'

const Comments = ({ comments }) => {

    const router = useRouter()
    const { id } = router.query

    return ( 
        <div className={styles.common_container}>
        <CommentItem {...comments} />
        </div>
     );
}
 
export default Comments;

export async function getStaticProps({ params }) {
    const res = await fetch(`${ server }/api/comment/${params.id}`)
    const data = await res.json()

    return {
        props : { comments : data}
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${ server }/api/comment`)
    const data = await res.json()

    const paths = data.map(comment => {
        return { params : { id : comment.id.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}