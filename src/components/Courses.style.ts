import { CSSProperties } from "react";

export const container: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: "1px solid black",
    padding: "20px 40px",
};

export const title: CSSProperties = {
    fontSize: "45px",
    fontWeight: "500",
    margin: "5px",
};

export const description: CSSProperties = {
    maxWidth: "70%",
    margin: "5px",
};

export const button: CSSProperties = {
    background: "white",
    border: "1px solid black",
    padding: "18px",
    margin: "10px 10px",
    fontWeight: "700",
    height: "55px",
};

export const coursesWrapper: CSSProperties = {
    width: "100%",
};

export const courses: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px 30px",
    width: "fitContent",
};
