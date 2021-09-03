import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Divider } from '@material-ui/core';
import styles from '../../styles/Home.module.css';
import styleslist from '../../styles/lister.module.css';
import Link from 'next/link'
import { Button } from '@material-ui/core';
import BackArrow from '@material-ui/icons/ArrowBack'
import { useRef, useState } from 'react'


const STYLE = {
    FADE_out : {
        'display': 'none',
    },
    FADE_in : {
        'display': 'block',
    }
}

const UserId = ( { userData }) => {

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '90vw',
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',  
        [theme.breakpoints.up('sm')]: {
          width: '50%',
        },
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        maxWidth: '100%',  
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(5),
        [theme.breakpoints.up('sm')]: {
          width: '50%',
        },
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        justifyContent: 'space-between',
      },
      text: {
          margin: theme.spacing(2)
      },
      columns: {
        [theme.breakpoints.down('sm')]: {
          columns: '15ch 2',
          gap: '2em',
        },
      }
    }));
    const [ nextSlideStatus, setNextSlideStatus] = useState(false)
    const [ PrevSlideStatus, setPrevSlideStatus] = useState(true)
    const classes = useStyles();
    const router = useRouter()
    const { user_id } = router.query

    const ele0 = useRef(null)
    const ele1 = useRef(null)
    const ele2 = useRef(null)
    const ele3 = useRef(null)


    const handleClick = (e, status) => {
      
     
      
        if(status === "next") {
            ele1.current.style.display = STYLE.FADE_in.display
            ele3.current.style.display = STYLE.FADE_in.display

            ele0.current.style.display = STYLE.FADE_out.display
            ele2.current.style.display = STYLE.FADE_out.display
            setNextSlideStatus(true)
            setPrevSlideStatus(false)
        }
        else if(status === "previous") {
            ele0.current.style.display = STYLE.FADE_in.display
            ele2.current.style.display = STYLE.FADE_in.display

            ele1.current.style.display = STYLE.FADE_out.display
            ele3.current.style.display = STYLE.FADE_out.display
            setNextSlideStatus(false)
            setPrevSlideStatus(true)
        }
    }

    return ( 
        <>
        <Head>
            <title>Next | { userData.name }</title>
        </Head>
      <Button>
        <Link href="/lister" passHref>
            <BackArrow />
        </Link>
    </Button>
        <div className={styles.container}>
            <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`https://avatars.dicebear.com/api/avataaars/${ user_id }.svg?mood[]=happy`}
        title={ userData.username }
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.columns}>
          <Typography className={classes.text} component="h6" variant="h6">
            Name: { userData.name }
          </Typography>
          <Typography className={classes.text} component="h6" variant="h6">
            Email: { userData.email }
          </Typography>
          <Typography className={classes.text} component="h6" variant="h6">
            Address: {`${ userData.address.street }, ${ userData.address.city}`}
          </Typography>
          </div>
          <Divider className={classes.text}  variant="inset" component="hr" />
          <div className={classes.columns} style={STYLE.FADE_in} ref={ele0}>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Company Name: { userData.company.name }
          </Typography>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Company bs: { userData.company.bs }
          </Typography>
          </div>
          <div className={classes.columns} style={STYLE.FADE_out} ref={ele1}>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Address suite: { userData.address.suite }
          </Typography>    
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Address zipcode: { userData.address.zipcode }
          </Typography>    
          </div>
          <Divider className={classes.text} variant="inset" component="hr" />
          <div className={classes.columns} style={STYLE.FADE_in} ref={ele2}>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Website: { userData.website}
          </Typography>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Phone: { userData.phone }
          </Typography>
          </div>
          <div className={classes.columns} style={STYLE.FADE_out} ref={ele3}>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            <ul>Address geo: 
              <li><cite> lattitude: { userData.address.geo.lat } </cite></li>
              <li><cite>  longitude: { userData.address.geo.lng } </cite></li>
            </ul>         
          </Typography>    
          <Typography className={classes.text} variant="subtitle1" color="textSecondary">
            Company catchPhrase: <q>{ userData.company.catchPhrase }</q>
          </Typography>    
          </div>
        </CardContent>
        <div className={classes.controls}>
          <IconButton disabled={PrevSlideStatus} aria-label="previous" id="previous" onClick={e => handleClick(e, 'previous')}>
             <SkipPreviousIcon />
          </IconButton>
          <IconButton disabled={nextSlideStatus} aria-label="next" id="next" onClick={ e => handleClick(e, 'next')}>
             <SkipNextIcon />
          </IconButton>
        </div>
      </div>
    </Card>
    </div>
        </>
     );
}
 
export default UserId;

export async function getStaticProps({ params }) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${params.user_id}`)
    const data =  await res.json()

    return {
        props: { userData: data}
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json()

  const paths = data.map(user => {
        return { params: { user_id: user.id.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}