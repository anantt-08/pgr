import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import { Avatar, Grid, Container, TextField } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Input from "../Input";
import Icon from "../Icon";
import axios from "axios";
import TablePagination from "@material-ui/core/TablePagination";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import "./Style/Table.css";
import "./Style/PredictionTable.css";
import Dialog from "@material-ui/core/Dialog";
import Alert from "@material-ui/lab/Alert";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { signin, signup } from "../actions/auth";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Chart from "./Chart";
import Historical from "../Historical";

//importing plans
import Plans from "./Plans";

import { useParams } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobileno: "",
  password: "",
  confirmPassword: "",
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
    color: "black",
    fontFamily: "vardana",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red !important",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function Tables({ history, whole, setwhole, name }) {
  const [Color, setColor] = useState({});
  const classes = useStyles();
  const [data, setdata] = useState([]);
  const [header, setheader] = useState([]);
  let { id } = useParams();
  const [loading, setloading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [wholedata, setwholedata] = useState(null);
  const [openn, setOpenn] = React.useState(false);
  const [Chartcategory, setChartcategory] = useState("");
  const [Chartdate, setChartdate] = useState([]);
  const [ChartPSAR, setChartPSAR] = useState([]);
  const [ChartADX, setChartADX] = useState([]);
  const [ChartplusDI, setChartplusDI] = useState([]);
  const [ChartminusDI, setChartminusDI] = useState([]);
  const [ChartRSI, setChartRSI] = useState([]);

  const [ChartMACD, setChartMACD] = useState([]);
  const [ChartExp9Macd, setChartExp9Macd] = useState([]);
  const [ChartMacdHisto, setChartMacdHisto] = useState([]);

  const [ChartMFI, setChartMFI] = useState([]);
  const [ChartCCI, setChartCCI] = useState([]);

  const [ChartWR, setChartWR] = useState([]);

  const [BBUB, setBBUB] = useState([]);
  const [BBMB, setBBMB] = useState([]);
  const [BBLB, setBBLB] = useState([]);

  const [ChartSK, setChartSK] = useState([]);
  const [ChartSD, setChartSD] = useState([]);

  const [Historic, setHistoric] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosee = () => {
    setOpenn(false);
  };

  //console.log("Datttaaaaa",data)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //console.log("------------",user)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const [prediction, setPrediction] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const API = axios.create({ baseURL: "https://pgrdemo.herokuapp.com" });
    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).token
        }`;
      }
      return req;
    });
    if (isSignup) {
      try {
        const { data } = await API.post("/signup", formData);
        NotificationManager.success("Success");
        setTimeout(() => {
          dispatch({ type: "AUTH", data });
          history.push("/login");
        }, 1000);
      } catch (err) {
        if (
          err.response &&
          (err.response.status === 404 || err.response.status === 401)
        )
          NotificationManager.error(err.response.data.message);
        else NotificationManager.error("Something Went Wrong");
      }
    } else {
      try {
        const { data } = await API.post("/signin", formData);
        NotificationManager.success("Success");
        setTimeout(() => {
          dispatch({ type: "AUTH", data });
          history.push("/");
        }, 1000);
      } catch (err) {
        if (
          err.response &&
          (err.response.status === 404 || err.response.status === 401)
        )
          NotificationManager.error(err.response.data.message);
        else NotificationManager.error("Something Went Wrong");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  useEffect(
    function () {
      if (wholedata != null && id != null) {
        setloading(true);
        setdata(wholedata.data[id]);
        let parr = [];
        Object.values(wholedata.objdata).map((item, index) => parr.push(item));
        setPrediction(parr);
        let arr = [];
        Object.values(wholedata.data[id][0]).map((item, index) =>
          arr.push(item)
        );
        setheader(arr);
        setloading(false);
        setColor(
          wholedata.color[window.location.pathname.split("/").slice(-1)[0]]
        );
        setChartcategory(window.location.pathname.split("/").slice(-1)[0]);
      } else {
        setloading(true);
      }
    },
    [history.location.pathname]
  );
  useEffect(
    function () {
      const headers = {
        "Access-Control-Allow-Origin": "*",
      };
      setloading(true);
      axios
        .get(`https://pgrdemo.herokuapp.com/users/first/${name}`, {
          headers,
        })
        .then((res) => {
          setdata(res.data.data[id]);
          let parr = [];
          Object.values(res.data.objdata).map((item, index) => parr.push(item));
          setPrediction(parr);
          let arr = [];
          Object.values(res.data.data[id][0]).map((item, index) =>
            arr.push(item)
          );
          setheader(arr);
          setloading(false);
          setColor(
            res.data.color[window.location.pathname.split("/").slice(-1)[0]]
          );
          setChartdate(res.data.chart.psar.date);
          setChartPSAR(res.data.chart.psar.psar);
          setHistoric(res.data.historical);
          setChartcategory(window.location.pathname.split("/").slice(-1)[0]);
        })
        .catch((err) => {
          setloading(false);
          console.log("error");
        });
      axios
        .get(`https://pgrdemo.herokuapp.com/users/data/${name}`, {
          headers,
        })
        .then((res) => {
          setdata(res.data.data[id]);
          setwholedata(res.data);
          setwhole("too");
          let parr = [];
          Object.values(res.data.objdata).map((item, index) => parr.push(item));
          setPrediction(parr);
          setloading(false);
          setColor(
            res.data.color[window.location.pathname.split("/").slice(-1)[0]]
          );

          setChartdate(res.data.chart.psar.date);
          setChartPSAR(res.data.chart.psar.psar);
          setChartcategory(window.location.pathname.split("/").slice(-1)[0]);

          setChartADX(res.data.chart.adx.Adx);
          setChartplusDI(res.data.chart.adx.plusDi);
          setChartminusDI(res.data.chart.adx.minusDi);

          setChartRSI(res.data.chart.rsi.rsi);

          setChartMACD(res.data.chart.macd.macd);
          setChartExp9Macd(res.data.chart.macd.macdexp9);
          setChartMacdHisto(res.data.chart.macd.macdhi);

          setChartMFI(res.data.chart.mfi.mfi);
          setChartCCI(res.data.chart.cci.cci);

          setChartWR(res.data.chart.wr.wr);

          setBBUB(res.data.chart.bb.ub);
          setBBMB(res.data.chart.bb.mb);
          setBBLB(res.data.chart.bb.lb);

          setChartSK(res.data.chart.stoch.sk);
          setChartSD(res.data.chart.stoch.sd);

          setHistoric(res.data.historical);
        })
        .catch((err) => {
          setloading(false);
          console.log("error");
        });
    },
    [name]
  );

  let arrayCount = [];
  var ci = 0;
  var cn = 0;
  var cd = 0;
  for (let i = 0; i < prediction.length; i++) {
    if (prediction[i] === "I") ci++;
    if (prediction[i] === "D") cd++;
    if (prediction[i] === "N") cn++;
  }
  arrayCount.push(ci);
  arrayCount.push(cd);
  arrayCount.push(cn);

  // countind for final prediction

  const showPrediction = (props) => {
    if (name) {
      if (props === "I") {
        //ci=ci+1  // counting positive results

        return (
          <td style={{ backgroundColor: "#4cd137", color: "white" }}>
            Increment
          </td>
        );
      } else if (props === "D") {
        //cd=cd+1
        return (
          <td style={{ backgroundColor: "#e84118", color: "white" }}>
            Decrement
          </td>
        );
      } else {
        //cn=cn+1
        return (
          <td style={{ backgroundColor: "#00a8ff", color: "white" }}>
            Neutral
          </td>
        );
      }
    } else {
      return <p></p>;
    }
  };

  //console.log(arrayCount)

  const showFinalPredict = () => {
    let x = Math.max(...arrayCount);
    if (name) {
      if (x >= 3) {
        if (cd === ci) {
          //neutral
          return (
            <p
              style={{
                backgroundColor: "#2D74E7",
                padding: "7px 20px ",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Neutral
            </p>
          );
        }
      }
      if (x === cd) {
        if (x === 3) {
          //sell
          return (
            <div>
              <p
                color={{
                  backgroundColor: "#2ecc71",
                  padding: "7px 20px ",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Sell
              </p>
            </div>
          );
        }
        if (x > 3) {
          //strong sell
          return (
            <p
              style={{
                backgroundColor: "#DC0000",
                padding: "7px 20px ",
                color: "white",
                borderRadius: "5px",
              }}
            >
              {" "}
              Strong SELL
            </p>
          );
        }
      }
      if (x === ci) {
        if (x >= 7) {
          //strongest buy
          return (
            <p
              style={{
                backgroundColor: "#4E8109",
                padding: "7px 20px ",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Strongest BUY
            </p>
          );
        }
        if (x === 6) {
          //strong buy
          return (
            <p
              style={{
                backgroundColor: "#67A90E",
                padding: "7px 20px ",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Strong BUY
            </p>
          );
        }
        if (x >= 3) {
          //buy
          return (
            <p
              style={{
                backgroundColor: "#90EA14",
                padding: "7px 20px ",
                color: "white",
                borderRadius: "5px",
              }}
            >
              {" "}
              BUY
            </p>
          );
        }
      }
      if (x === cn) {
        return (
          //neutral
          <p
            style={{
              backgroundColor: "#2D74E7",
              padding: "7px 20px ",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Neutral
          </p>
        );
      }
    }
  };

  function replace(object) {
    let newobj = {};
    Object.values(object).map((item, index) => (newobj[header[index]] = item));
    return newobj;
  }

  const finalans = [];
  const rows =
    header.length > 0 ? data.slice(1).map((item) => replace(item)) : [];
  return loading ? (
    <div
      style={{
        height: "30vh",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ width: "60px", height: "60px" }} />
    </div>
  ) : (
    <>
      <NotificationContainer />
      {user ? (
        <div className="prediction-table" style={{ paddingTop: "30px" }}>
          <center>
            <div>
              <h2>Praedico Predictions</h2>
              <table>
                <tr>
                  <th>PSAR Trend</th>
                  <th>ADX Indicators</th>
                  <th>RSI Indicators</th>
                  <th>MACD Indicators</th>
                  <th>MFI Oscillators</th>
                  <th>CCI Oscillators</th>
                  <th>William %R Indicators</th>
                </tr>
                {/* Calling Predictions */}
                <tr>
                  {user && user?.result.payment ? (
                    <>
                      {prediction.map((item, index) => (
                        <>{showPrediction(item)}</>
                      ))}
                    </>
                  ) : (
                    <>
                      <td>{showPrediction(prediction[0])}</td>
                      <td>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleClickOpen}
                        >
                          <VisibilityIcon />
                          <span
                            style={{ marginLeft: "3px", fontWeight: "bolder" }}
                          >
                            Show
                          </span>
                        </Button>
                      </td>
                    </>
                  )}
                </tr>
              </table>
            </div>
            <br />
            {user && user?.result.payment ? (
              <>
                <h3>{showFinalPredict()}</h3>

                {Historic.length === 0 ? null : <Historical data={Historic} />}
              </>
            ) : (
              <></>
            )}
          </center>
        </div>
      ) : (
        <></>
      )}
      {user ? (
        <div className="Chartwalidiv">
          <Chart
            style={{ overflowX: "auto" }}
            category={Chartcategory}
            date={Chartdate}
            data={ChartPSAR}
            adx={ChartADX}
            plusDi={ChartplusDI}
            minusDi={ChartminusDI}
            rsi={ChartRSI}
            macd={ChartMACD}
            macdexp9={ChartExp9Macd}
            macdhi={ChartMacdHisto}
            mfi={ChartMFI}
            cci={ChartCCI}
            wr={ChartWR}
            ub={BBUB}
            mb={BBMB}
            lb={BBLB}
            sk={ChartSK}
            sd={ChartSD}
          />
        </div>
      ) : (
        <></>
      )}
      {user ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {header.length > 0 ? (
                  <>
                    {header.map((item, index) => (
                      <StyledTableCell id={index}>{item}</StyledTableCell>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={index}>
                    {header.map((i, subindex) => (
                      <StyledTableCell
                        style={{
                          backgroundColor: `${Color[10 * page + index]}`,
                        }}
                      >
                        {row[i]}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {header.length > 0 ? (
                  <>
                    {header.map((item, index) => (
                      <StyledTableCell id={index}>{item}</StyledTableCell>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={index}>
                    {header.map((i, subindex) => (
                      <StyledTableCell>{row[i]}</StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div className="form" style={{ overflowY: "hidden" }}>
            <Container
              component="main"
              maxWidth="xs"
              style={{ overflowY: "hidden", padding: "0" }}
            >
              <Paper
                className={classes.paper}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflowY: "hidden",
                }}
              >
                {/* <Avatar className={classes.avatar} >
          <AccountCircleIcon/>
        </Avatar>
        <Typography variant="h5"  >{isSignup?'Sign Up':'Sign In'}  </Typography> */}

                {/* Plans.js */}

                <Plans />

                {/* <form className={classes.form} onSubmit={handleSubmit} style={{padding:"15px"}}>
            <Grid container spacing={2}>
              {
                isSignup&&(
                  <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              { isSignup &&  <Input name="mobileno" label="Contact Number" handleChange={handleChange} type="text"/>}
              
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Grid container spacing={3}>
              
            <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {isSignup?'Sign Up':'Sign In'}
            </Button>
            </Grid>
  
            <Grid item xs={12}>
            <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                <span style={{fontWeight:"bolder",color:"darkgreen"}}>{isSignup ? 'Already have an account? Sign In':'If not have account, Sign Up' }</span>
                            </Button>
                        </Grid>
            </Grid>
            </Grid>
            </Grid>
        </form> */}
              </Paper>
            </Container>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <strong style={{ color: "red" }}>Cancel</strong>
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openn} onClose={handleClosee}>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClosee} color="primary">
            <strong style={{ color: "red" }}>Cancel</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
