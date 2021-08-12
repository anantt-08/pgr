import { makeStyles } from "@material-ui/core/styles";
import { GlobalStyle } from "../../config/Theme";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: "#F1F1F1",
    },
    heading: {
      ...GlobalStyle.h3,
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "115%",
      color: "#012237",
      cursor:"pointer",
      
      margin:"28px 0px 16px 5px",
      '&:hover':{
        color:"#f16101"
      }
    },
    cardtitle: {
      border: "1px solid #d4d5d9",
      padding: "30px",
      margin: "10px 0 10px",
      backgroundColor: "white",
      width: "100%",
    },
    cardone: {
      marginBottom: "20px",
      backgroundImage:
        "linear-gradient(\n90deg\n,#a9abb2 25%,hsla(0,0%,100%,0) 0)",
      backgroundPosition: "bottom",
      backgroundSize: "4px 1px",
      backgroundRepeat: "repeat-x",
      display: "flex",
      [theme.breakpoints.down("500")]: {
        flexDirection: "column",
      },
    },
    image: {
      background: "rgba(40,44,63,.05)",
      width: "240px",
      height: "150px",
      cursor: "pointer",

      [theme.breakpoints.down("600")]: {
        width: "170px",
      },
      [theme.breakpoints.down("500")]: {
        width: "100%",
        height: "180px",
      },
      [theme.breakpoints.down("400")]: {
        width: "100%",
        height: "150px",
      },
    },

    insideimage: {
      width: "100%",
      height: "150px",
      [theme.breakpoints.down("600")]: {
        width: "100%",
      },
      [theme.breakpoints.down("500")]: {
        width: "100%",
        height: "180px",
      },
      [theme.breakpoints.down("400")]: {
        width: "100%",
        height: "150px",
      },
    },
    text: {
      flex: "1",
      position: "relative",
      paddingLeft: "18px",
      [theme.breakpoints.down("500")]: {
        marginTop: "10px",
      },
    },
    status: {
      float: "right",
      position: "absolute",
      top: "0",
      right: "0",
      paddingLeft: "18px",
      fontSize: "14px",
      color: "#686b78",
      fontWeight: "700",
      [theme.breakpoints.down("700")]: {
        float: "inherit",
        paddingLeft: "0px",
        fontSize: "14px",
        color: "#686b78",
        fontWeight: "700",
        top: "auto",
        right: "auto",
      },
      [theme.breakpoints.down("500")]: {
        marginTop: "20px",
      },
    },
    coursename: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#3d4152",
      display: "inline-block",
    },
    transactionid: {
      fontSize: "14px",
      color: "#686b78",
      marginTop: "3px",
      fontWeight: "600",
    },
    transactiondate: {
      fontSize: "13px",
      color: "#686b78",
      marginTop: "3px",
    },
    down: {
      float: "right",
      color: "#535665",
      fontSize: "14px",
      color: "darkgreen",
    },
  };
});

export default useStyles;
