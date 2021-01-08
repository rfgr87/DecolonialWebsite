import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image1 from './foto-diego1.png';
import image2 from './foto-diego2.png';
import image3 from './foto-diego3.png';
import image4 from './foto-diego4.png';
import image5 from './foto-diego5.png';
import image6 from './foto-diego6.png';
import image7 from './foto-diego7.png';
import image8 from './foto-diego8.png';
import image9 from './foto-diego9.png';
import image10 from './foto-diego10.png';
import image11 from './foto-diego11.png';
import image12 from './foto-diego12.png';
import image13 from './foto-diego13.png';
import image14 from './foto-diego14.png';
import image15 from './foto-diego15.png';
import image16 from './foto-diego16.png';
import image17 from './foto-diego17.png';
import image18 from './foto-diego18.png';
import image19 from './foto-diego19.jpg';
import image20 from './foto-diego20.png';
import image21 from './foto-diego21.png';
import image22 from './foto-diego22.png';
import image23 from './foto-diego23.png';
import image24 from './foto-diego24.png';
import image25 from './foto-diego25.png';
import image26 from './foto-diego26.png';
import image27 from './foto-diego27.png';
import image28 from './foto-diego28.png';
import image29 from './foto-diego29.jpg';
import image30 from './foto-diego30.png';
import image31 from './foto-diego31.png';





import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import Vimeo from '@u-wave/react-vimeo';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image1,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 1000

  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30%',
  },
}));

function Composer3(props) {

  const classes = useStyles();
  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image1})`,
      height: "165%",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      paddingTop: 24,
      marginTop: -24,
      marginLeft: 0,
      paddingLeft: "10px",
      }}>
    <div>
     <h1 style={{
      position: 'relative',
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      marginLeft: "10px",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Diego Villaseñor de Cortinas</h1>
      </div>
     
      <h5 style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "10px",
      marginBottom: "-300px",
      height: "620px",
      widht: "400px",
      backgroundImage: `url(${image31})`,
      backgroundSize: "400px 300px",
      backgroundRepeat: "no-repeat",
       }}></h5>
     
      <iframe style={{
      position: "absolute",
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "440px",
      marginTop: "-220px",
      paddingTop: "0px",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
    }} width="660" height="415" src="https://www.youtube.com/embed/s15OA9nZ7AY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


          
      <iframe style={{
      position: "absolute",
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "460px",
      marginTop: "210px",
      paddingTop: "0px",
      width: "500px",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }} width="560" height="315" src="https://www.youtube.com/embed/HA49X3KUaA8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe style={{
      position: "absolute",
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "460px",
      marginTop: "520px",
      paddingTop: "0px",
      width: "500px",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
    }} width="560" height="315" src="https://www.youtube.com/embed/S-Y4cWhUE5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <div>
      <h5 style={{
      position: "relative",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "15px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "10px",
      marginTop: "0",
      border: "black",
      borderWidth: "3px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "25%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0"
       }}> {"Diego Villaseñor (Videco) es compositor, improvisador, multi-instrumentista, filósofo y programador, cuya práctica e investigación se desarrolla en torno a los siguientes temas: creación colectiva, composición modular e inspirada en sistemas naturales (particularmente ecosistemas), ecoacústica, comprovisación, desarrollo de técnicas extendidas, politemporalidad, microtonalidad, síntesis sonora mediante instrumentos acústicos, ontología del proceso creativo-musical."}<br></br><br></br>
         </h5>
       </div>
       <br></br>   
      
    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "10px",

              paddingTop: "0px",
              borderWidth: "1px",
              position: "absolute",
              opacity: "1.0",
              width: "10.5%", 
              marginBottom: "100px"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
    <a style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "980px",
              marginTop: "-800px",
              padding: "10px",
              borderWidth: "5px",
              position: "absolute",
              opacity: "1.0",
              width: "15%", 
              marginBottom: "100px"}} target="_blank" href="https://iclc.toplap.org/2019/papers/paper91.pdf"> Nanc-in-a-Can Canon Generator </a>

        <a style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              padding: "10px",
              marginLeft: "980px",
              marginTop: "-700px",
              borderWidth: "5px",
              position: "absolute",
              opacity: "1.0",
              width: "11.1%", 
              marginBottom: "100px"}} target="_blank" href="https://iclc.toplap.org/2019/papers/paper91.pdf"> [Videcoic One] </a>
    </div> 
    )
  }

  export default Composer3
