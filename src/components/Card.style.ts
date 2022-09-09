import { CSSProperties } from "react";

export const container: CSSProperties = {
    width: "290px",
    height: "290px",
    padding: "20px",
    boxSizing: "border-box",
};

export const cardContainer: CSSProperties = {
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



export const starContainer: CSSProperties = {};

export const rating: CSSProperties = {};

export const ratingContainer: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    // justifyContent:"center"
    alignItems: "center",
};

export const hoverPreviewContainer: CSSProperties = {
    position: "relative",
    top: "-340px",
    left: "300px",
    width: "300px",
    height: "450px",
    boxShadow: "0px 0px 5px 2px rgb(0 0 0 / 10%)",
    backgroundColor: "white",

    display: "flex",
    flexDirection: "column",
    padding: "15px 30px",
    justifyContent: "space-between",
};

export const hoverPreviewDate: CSSProperties = {
    color: "green",
    fontSize: "small",
};

export const hoverPreviewInfo: CSSProperties = {
    fontSize: "small",
};

export const hoverPreviewTitle: CSSProperties = {
    fontWeight: 700,
};

export const hoverPreviewDescription: CSSProperties = {
    height: "150px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    // whiteSpace: "revert",
    margin: "15px 0px",
    lineHeight: "1.5",
    // fontSize: "large",
};
