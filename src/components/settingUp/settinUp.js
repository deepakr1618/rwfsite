import { Grid } from "@material-ui/core";
import React from "react";

import data from "./data";

export default function index() {
  return (
    <Grid container style={{ marginTop: "100px" }} justify="center">
      <Grid item xs={10} md={10}>
        <h1 style={{ textAlign: "left", color: "#444" }}>
          Setting-up of the factory
        </h1>
        <div
          style={{
            marginTop: "70px",
          }}
        >
          {data.map((text, i) => (
            <p
              key={i}
              style={{
                marginTop: "20px",
                textAlign: "justify",
                fontStyle: text.important ? "italic" : "bormal",
                margin: text.important ? "50px 0px" : "none",
                padding: text.important ? "20px" : "inherit",
                background: text.important ? "#eee" : "inherit",
                borderRadius: text.important ? "7px" : "0px",
                color: text.important ? "#333" : "#555",
              }}
            >
              {text.text}
            </p>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
