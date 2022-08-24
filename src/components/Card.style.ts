import { CSSProperties } from "react";

export const container: CSSProperties = {
    width: "290px",
    height: "290px",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflowY: "hidden",
};

export const image: CSSProperties = {
    width: "100%",
    aspectRatio: "5/3",
};

export const title: CSSProperties = {
    fontSize: "large",
    fontWeight: 700,
    marginBlockStart: 0,
    marginBlockEnd: 0,
};

export const subtitle: CSSProperties = {
    fontSize: "small",
    fontWeight: "400",
    color: "gray",
    marginBlockStart: 0,
    marginBlockEnd: 0,
};

export const price: CSSProperties = {};

export const star: CSSProperties = {
    stroke: "#e59819",
    width: "32",
    height: "32",
    fill: "white",
};

export const starFilled: CSSProperties = {
    fill: "#e59819",
};

export const starContainer: CSSProperties = {};

export const rating: CSSProperties = {};

export const ratingContainer: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    // justifyContent:"center"
    alignItems: "center",
};
