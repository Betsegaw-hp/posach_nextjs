import { server } from '../config/index'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PostList from '../comps/PostList'

export default function Home({ posts, users, comments }) {

  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keyword" content="next app"></meta>
      <script data-ad-client="ca-pub-1355967539894036" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H9XCS33V2Q"></script>
    </Head>
    <div className={styles.common_container}>
    <div>
        <h1 className={styles.title}>Homepage </h1>
    </div>
      <PostList posts={posts}
                users={users}
                comments={comments}/>
    </div> 
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-H9XCS33V2Q');
      </script>
    </>
  )
}

export async function getStaticProps() {

  const urls = ['http://jsonplaceholder.typicode.com/posts',
                'http://jsonplaceholder.typicode.com/users', 
                'https://jsonplaceholder.typicode.com/comments']
  
  const res = await Promise.all(urls.map(url => fetch(url)))
  const data = await Promise.all(res.map(e => e.json()))

  return {
    props : { posts : data[0], users : data[1], comments : data[2]}
  }
}


