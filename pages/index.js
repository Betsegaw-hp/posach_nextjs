import { server } from '../config/index'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PostList from '../comps/PostList'

export default function Home({ posts, users }) {

  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keyword" content="next app"></meta>
    </Head>
    <div className={styles.common_container}>
    <div>
        <h1 className={styles.title}>Homepage </h1>
    </div>
      <PostList posts={posts}
                users={users}/>
    </div> 
    </>
  )
}

export async function getStaticProps() {

  const urls = [`${ server }/api/posts`, `${ server }/api/lister`]
  
  const res = await Promise.all(urls.map(url => fetch(url)))
  const data = await Promise.all(res.map(e => e.json()))

  return {
    props : { posts : data[0], users : data[1]}
  }
}
