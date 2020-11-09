import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import trainImage from "./../../assets/train-scenery.jpg";
import RWFLogo from "./../../assets/indian_railways_logo.png";
import { motion } from "framer-motion";

export default function header() {
  const styles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      backgroundImage:"url('/images/1a.jpg')",
      backgroundSize:"cover",
      backgroundPosition:"center center",
    },
    center:{
      background:"white",
      borderRadius:"12px",
      padding:"15px"
    }
  }));
  const classes = styles();
  const textTransition = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const logoTransition = {
    hidden: {
      opacity: 0,
      y: -10,
      scale:0.8
      
    },
    show: {
      opacity: 1,
      y: 0,
      scale:1
    },
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Grid container className={classes.container} alignItems="center">
          
          <Grid item xs={12} >
            <Grid container justify="center" alignItems="center">
              <Grid item className={classes.center}>
              <Grid container>
              <Grid item xs={12}>
                <motion.img
                  src={RWFLogo}
                  animate="show"
                  initial="hidden"
                  variants={logoTransition}
                  transition={{
                    duration: 0.8,
                  }}
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  animate="show"
                  initial="hidden"
                  variants={textTransition}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h1
                    style={{
                      marginBottom: "1px",
                      fontSize: "40px",
                    }}
                  >
                    RWF Heritage and Art Gallery
                  </h1>
                  <p
                    style={{
                      marginTop: "1px",
                      color: "#333",
                    }}
                  >
                    Rail Wheel Factory, Yelehanka
                  </p>
                </motion.div>
              </Grid>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
