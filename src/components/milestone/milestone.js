import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import data from "./data";

export default function Milestone() {
  const [loadedData , setLoadedData] = useState([]);
  useEffect(()=>{
    setLoadedData(data.slice(0,5))
  },[])
  function loadmore(){
    setLoadedData(data.slice(0,loadedData.length+5))
  }
  useEffect(()=>{
    console.log(loadedData)
  },[loadedData])
  return (
    <Grid container style={{ marginTop: "100px" }} justify="center">
      <Grid item xs={10} md={10}>
        <h1 style={{ textAlign: "left", color: "#444" }}>
          Milestones – WAP to RWF
        </h1>
        <div
          style={{
            marginTop: "70px",
          }}
        >
          {loadedData.map((eachMilestone, i) => (
            <Grid
              container
              key={i}
              justify="space-around"
              style={{
                background: "#eee",
                margin: "10px 0px",
                padding: "10px",
                borderRadius: "7px",
              }}
              alignItems="center"
            >
              <Grid item xs={12} sm={3}>
                <p
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#444",
                  }}
                >
                  {eachMilestone.date}
                </p>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p style={{ textAlign: "left" }}>{eachMilestone.text}</p>
              </Grid>
            </Grid>
          ))}
        </div>
        { loadedData.length!= data.length ? <Grid
              container
              justify="center"
              style={{
                background: "#eee",
                margin: "10px 0px",
                padding: "10px",
                borderRadius: "7px",
                cursor:"pointer"
              }}
              onClick={loadmore}

              alignItems="center"
            >
              <Grid item xs={12}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#111",
                    textTransform:"uppercase"
                  }}
                >
                  Load more
                </p>
              </Grid>
            </Grid> : null}
          
      </Grid>
    </Grid>
  );
}
