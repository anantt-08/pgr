import React from "react"
import './about.css'
import logo from '../logo.jpg'
import Service from './service.png'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.jpg'
import ss from './sunnysir.jpg'
import ps from './priyanksir.png'
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Data,Data1,Data2,Data3} from './All'
import Avatar from '@material-ui/core/Avatar';
import Card2 from "./Card2";
import Card3 from "./Card3";

import Container from '@material-ui/core/Container';
function ncard(val){

	return(
  <Card2 className="cardsdd"
	  img={val.imgsrc}
	  tit={val.name}
	  txt={val.titl}
	  />
  
	)
  }

  function ncard2(val){

	return(
  <Card3 className="cardsdd"
	  img={val.imgsrc}
	  tit={val.name}
	  txt={val.titl}
	  />
  
	)
  } 

function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`full-width-tabpanel-${index}`}
		aria-labelledby={`full-width-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box p={3}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }
  
  TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
	return {
	  id: `full-width-tab-${index}`,
	  'aria-controls': `full-width-tabpanel-${index}`,
	};
  }
  
  const useStyles = makeStyles((theme) => ({
	root: {
	  backgroundColor: theme.palette.background.paper,
	  width: 1400,
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	  },
  }));

const Aboutcont = () =>{


	const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

	const [state, setState] = React.useState({
		checkedA: false,
		checkedB: true,
	  });

	  const [flag,setFlag]=React.useState(true)

	  const handleChange2 = (event) => {
		  if(flag==false){
			setFlag(true)
		  }
		  else{
			setFlag(false)
		  }
	  };
	  console.log(flag)
  return(
    <>
		<div className='Aboutcontent'>
			<div className="banner">
				<center>
				<h2 className='bannerh2'>About Us</h2>
				</center>
			</div>

			<div className='article'>

				<div className='articleup'>

					<div className='artlef'>
						<h2>Who we are?</h2>
						<hr/>
						<br/>
						<p>Praedico Global Research Private Limited is a private company which is founded on 09 April, 2018. We deals in Stock Market Training, Stock Marketing Predictive Softwares, Robotic Stock Trading, Global Equity Research, Portfolio Designing, Financial Literacy and Stock Market Research Using Deep Learning.</p>
						<br/>
						<p>Sunny Ralli and Priyank Gupta are the Chief Research Officer and Chief Technical Officer of the company respectively. The Registered Number of the company is 045496 and the Registered Address is 2nd Floor 204, Garima Arcade Shinde Ki Chawani, Gwalior, MP. The working office of the company is situated in Malviya Nagar, South Delhi. Its authorized capital is Rs. 1,000,000 and paid up capital is 1,00,000. Their industry code is 74999.</p>
						<br/>
						<p>Praedico Global Research Pvt. Ltd. is India's first "coordinated worldwide research cum preparing" company. They take a shot at the model of spreading financial literacy all over the globe and have their own exploration model for India and worldwide stock trades.</p>
						<br/>
						<p>Praedico Global Research focuses on the use of artificial intelligence to forecast the trends in the stock markets across the globe. The company has achieved many successes within the limited period of time it has been in existence.</p>
						<br/>
						<p>Forecasting of stock trend has been limited to how well a trader or broker can consider the market forces or the economic and company information available. The risk associated with the stock market, implies reasoning beyond human ability has to be employed. It is due to this reason that, Praedico Global Research has been able to use Neural Networks which is a form of artificial intelligence to predict the stock market with the success rate of over 80%</p>
				
					</div>

					<div className='artrig'>
						<center>
						<img src={logo}  height='50%'/>
						</center>
					</div>
				</div>

				<div className='artbott'>
					<p>
					With Praedico Global Research, robust softwares are built to be sensitive and identify trend on the stock market and make a high probable prediction with at least 80% confidence level.
					</p>
					<br/>
					<p>
					The Company also conducts financial related workshops all over the globe. They offer their services to clients trading on stock markets all around the world. They use Financial Research and Neural Network Programming to develop hybrid products which can be used by traders and investors for better prediction of their investments.
					</p>
					<br/>
				</div>
			</div>

			<div className='Ourservices'>
				<div className='lser'>
				<img src={Service}  />
				</div>
				<div className='rser'>
					<h2>Our Services</h2>
					<hr/>
					<div className='cardss'>
						<br/>
					<Grid container spacing={3}>
						<br/>
						<Grid item xs={6}>
						<Card img={img1} tit='ANALYSIS' txt="We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals." />
						</Grid>
						<Grid item xs={6}>
						<Card img={img2} tit='PERFORMANCES' txt="We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years."/>
						</Grid>
						<Grid item xs={6}>
						<Card img={img3} tit="PORTFOLIO" txt="We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs." />
						</Grid>
						<Grid item xs={6}>
						<Card img={img4} tit="SERVICING" txt="Classroom Special Workshop with Cash and Options Adventure." />
						</Grid>
					</Grid>
					</div>

					<div className='cardss2'>
						<br/>
					<Grid container spacing={3}>
						<br/>
						<Grid item xs={12}>
						<Card img={img1} tit='ANALYSIS' txt="We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals." />
						</Grid>
						<Grid item xs={12}>
						<Card img={img2} tit='PERFORMANCES' txt="We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years."/>
						</Grid>
						<Grid item xs={12}>
						<Card img={img3} tit="PORTFOLIO" txt="We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs." />
						</Grid>
						<Grid item xs={12}>
						<Card img={img4} tit="SERVICING" txt="Classroom Special Workshop with Cash and Options Adventure." />
						</Grid>
					</Grid>
					</div>
				</div>
			</div>

			<div className='team'>
			
			<center>
				<Typography component="div">
					<center>
					<Grid component="label" container alignItems="center" spacing={1}>
					<Grid item><b>Leadership Team</b></Grid>
						<Grid item>
							<Switch checked={flag?state.checkedA:state.checkedB} value={flag} onChange={handleChange2}/>
						</Grid>
					<Grid item><b>Team Members</b></Grid>
					</Grid>
					</center>
				</Typography>
				</center>

				{

					flag?
					<> 
					<br/>
					<center>
						<h1 color='#2f3542' >Leadership Team</h1>
						</center>
						<br/>
					<div className='upperled'>
						
						<br/>
						<div className='upperledl'>
						<img src={ss} width='350' height='350'/>
						</div>
						<div className='upperledl2'>
							<center>
						<Avatar alt="Remy Sharp" src={ss} className={classes.large} />
						</center>
						</div>
						<div className='upperledr'>
						<h2>MR. SUNNY RALLI, DIRECTOR, CHIEF RESEARCH OFFICER(CRO).</h2>
						<hr/>
						<br/>
						<p>
						Neural networks or neural nets were inspired by the Mr. Sunny Ralli is a B.Tech, M.B.A with more than 25000 hours of stock market trading experience .Being a seasoned Banker with over 7 years of experience with major brands like HDFC, CITI, AXIS & ICICI. He is a trading expert with over 10 years of trading experience in Indian & Global markets. He is a certified “Research Analyst” & “Investment advisor” from National Institute & Securities Markets.Apart from Indian stock exchanges experience he has worked closely on stocks of major global stock exchanges like NYSEC (New York Stock Exchange), EURONEXT(Brussels, Paris,Amsterdam) & Hong kong Stock Exchange Mr. Sunny is a National Stock Exchange Certified Market Professional Level 5(Highest Accolade)He is also awarded with NSE “Certified Investment Analyst Champion” & “Certified Derivative Pro”certification .He attained mastership in both Technical & Fundamental analysis and has special knack of picking profitable stocks with high accuracy . Mr. Sunny is a proud founder of “World’s first 51 exclusive stock market strategies”.Being Founder of 3 major trading firms like Millionaire Bull Securities,Stock Gurukul & Praedico Global Research ,Mr. Sunny has vision of demystifying the stock market myths around the globe and spread “Financial Freedom” .
						</p>
						</div>
					</div>

					<br/>
					<br/>
					<div className='lowerled'>

					<br/>
					<div className='lowerledl'>
					<div className='upperledl2'>
							<center>
						<Avatar alt="Remy Sharp" src={ps} className={classes.large} />
						</center>
						</div>
						<h2>MR. PRIYANK GUPTA,DIRECTOR,CHIEF TECHNICAL OFFICER(CTO).</h2>
						<hr/>
						<br/>
						<p>
						Mr. Priyank Gupta is a M.Sc, MPhil in Computer Science with more than 15 years of software programming experience .He has more than 8 years of Industrial Experience and has publish research papers in various National & International journals .Mr. Priyank is currently pursuing his PhD on the Neural Networks usage in stock trading . At Praeedico Global Research he is Head of Software Development & Operations.He is currently working on World’s first Research driven trading platform under Praedico's innovative vision approach.
						</p>
					</div>
						<div className='lowerledr'>
						<img src={ps} width='350' height='350'/>
						</div>
						
						
					</div>
					</>
					:
					<>
					<div className="TeamMembers">
									<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
						>
						<Tab label="All" {...a11yProps(0)} />
						<Tab label="Marketing" {...a11yProps(1)} />
						<Tab label="Technical" {...a11yProps(2)} />
						<Tab label="HR" {...a11yProps(3)} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={value} index={0} dir={theme.direction}>
						{Data.map(ncard)}
						</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
						{Data1.map(ncard)}
						</TabPanel>
						<TabPanel value={value} index={2} dir={theme.direction}>
						{Data2.map(ncard)}
						</TabPanel>
						<TabPanel value={value} index={3} dir={theme.direction}>
						{Data3.map(ncard)}
						</TabPanel>
					</SwipeableViews>
					</div>
					</div>
					
					<div className="TeamMembersres">
							<hr/>
							{Data.map(ncard2)}
							
					</div>
					</>

				}
			</div>

		</div>
    </>
  )
}

export default Aboutcont