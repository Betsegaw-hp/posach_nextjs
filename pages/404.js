import { useEffect } from 'react'
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const useStyles = makeStyles({
  root: {
    minWidth: 27+'rem',
  },
  pos: {
      display: 'flex',
      placeContent: 'center'
  }
});

export default function NotFound() {
  const classes = useStyles();
  const router =  useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push('/')
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <div className={styles.container}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={styles.title} variant="body2" component="h1">
            404
        </Typography>
        <Typography className={styles.title} variant="body2" component="p">
            Oooops not found!
        </Typography>
      </CardContent>
      <CardActions className={classes.pos}>
        <Link href='/' passHref={true}>
        <Button size="small" color="primary">Go back to home</Button>
        </Link>
      </CardActions>
    </Card>  
      </div>
  );
}