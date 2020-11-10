import { Grid, IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Card from "./card";
import data from "./data";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const slideImages = [
    "images/slide_2.jpg",
    "images/slide_3.jpg",
    "images/slide_4.jpg",
];

const Slideshow = () => {
    const fadeProperties = {
        duration: 3500,
        pauseOnHover: true,
        scale: 1.2,
        prevArrow: <div style={{ width: "0px", marginRight: "0px" }}><IconButton children={<ArrowBackIosIcon />}></IconButton></div>,
        nextArrow: <div style={{ width: "30px", marginLeft: "0px" }}><IconButton children={<ArrowForwardIosIcon />}></IconButton></div>,
        indicators: true,
    };
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        setNewData(data.sort((a, b) => a.text.length - b.text.length));
    }, []);
    const style = makeStyles({
        gradBack: {
            padding: "15px"
        }
    });
    const classes = style();
    return (
        <div className="slide-container">
            <Slide  {...fadeProperties}>
                {newData.map((i) => {
                    return (
                        <div className="each-slide" style={{ position: "relative" }}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12} md={8} style={{
                                    backgroundImage: `url(${i.image})`,
                                    width: "auto",
                                    height: "80vh",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "contain"
                                }}>

                                </Grid>
                                <Grid item xs={12} md={4} className={classes.gradBack}>
                                    <h4 style={{ fontFamily: "inherit", fontSize: "22px", margin: "2px auto" }}>{i.heading}</h4>
                                    <p style={{ fontFamily: "inherit", fontSize: "15px", margin: "4px auto" }}>{i.text}</p>
                                </Grid>

                            </Grid>
                        </div>
                    );
                })}
            </Slide>
        </div >

    );
};

export default function Tour() {
    return (
        <React.Fragment>
            <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item xs={10}>
                    <h1 style={{ textAlign: "left", color: "#444" }}>
                        Virtual tour of Art Gallery from WAP to RWF:
          </h1>
                    <p style={{ textAlign: "left", color: "#444" }}>
                        In a quest to connect Art and Railways, an Art Camp was organized at
                        Rail Wheel Factory on 13th and 14th May 2016, in which renowned
                        artists from Karnataka were invited to paint & make murals inside
                        RWF factory premises. RWF’s own Art Club staff also gave shape to
                        their creative energy. Children also revealed their minds in brushes
                        and colours. The Paintings made during the Art Camp has been
                        displayed in the Heritage Gallery, of RWF. Here is a tour of this
                        art gallery.
          </p>
                </Grid>
                <Grid item xs={12} sm={12} justify="center">
                    <Grid container justify="center" alignItems="center" style={{
                        background: "#eee",
                        minHeight: "100vh",
                        marginTop: "25px"
                    }}>
                        <Grid item xs={10}>
                            <Slideshow />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
