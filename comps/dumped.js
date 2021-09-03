// This page is purposed to show pictures from the internet
// with dynamic parameter in url 
// but it confilicts with other dynamic router. so it is commented out! 

// import { useRouter } from "next/router";
// import styles from '../styles/Home.module.css'
// import Head from 'next/head'
// import Image from 'next/image'
 

// export const getStaticProps = async ({ params })  => {

//     const url = `https://source.unsplash.com/featured/?${params.id}`
 
//     return {
//         props: { datas : url}
//     }
// }

// // tell nextjs which path shoud it dynamicaly route
// export const getStaticPaths = async () => {
//   const res = await fetch('https://random-word-api.herokuapp.com/all')
//   const data = await res.json();

//     const paths = data.map(item => {
//     return  { params: { id: item} }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }



// const DynamicData = ({ datas }) => {
//     const router = useRouter()
//     const { id } = router.query
//     const img_name = datas.slice(38)


//     return ( 
//     <>
//     <Head>
//         <title>
//             Next | { id }
//         </title>
//     </Head>
//     <div className={styles.container}>
//     <Image width="500" height="450" src={datas} alt={`${img_name}_image`}/>
//     </div>
             
//     </>

//      );
// }
 
// export default DynamicData;