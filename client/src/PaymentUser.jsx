import React,{useState} from 'react'
import {getUserListforPayment,upData} from './Nodeservices'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from './UseTable'
import { Search } from "@material-ui/icons";
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PaymentUserTable from './paymentusertable';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))


const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'mobile', label: 'Mobile No.' },
    { id: 'payment', label: 'Payment Status'},
    {id:'change',label:'Change Status'},
]

const PaymentUserList=()=>{
    const fetchData=async()=>{

        var result=await getUserListforPayment('userlistforpayment')
  
  
        setList1(result)
        console.log(result)
      }
      React.useEffect(function(){
        fetchData()
  
      },[])

    const [state, setState] = React.useState({
		checkedA: false,
		checkedB: true,
	  });

	  const [flag,setFlag]=React.useState(true)

	  const handleChange2 = (event) => {
         fetchData()
		  if(flag==false){
			setFlag(true)
		  }
		  else{
			setFlag(false)
		  }
	  };
	  console.log(flag)

    const classes = useStyles();
    const [getList1,setList1]=React.useState([])
   

    

    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })


    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(getList1, headCells, filterFn);


    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
            }
        })
        
    }

    const updateStatus=async(event)=>{
        console.log(event)
        const id=event
        var result=await upData('updatepaymentstatus2',id)
        fetchData()

    }


    console.log(getList1)

    return(<>
    <div>
        <center>
            <h1>User Payment List</h1>
        </center>
    </div>
    
    <center>
				<Typography component="div">
					<center>
					<Grid component="label" container alignItems="center" spacing={1}>
					<Grid item><b>Subscribed Users</b></Grid>
						<Grid item>
							<Switch checked={flag?state.checkedA:state.checkedB} value={flag} onChange={handleChange2}/>
						</Grid>
					<Grid item><b>Non Subscriber Users</b></Grid>
					</Grid>
					</center>
				</Typography>
	</center>

        {flag?
        <>
        <div>
        
        <Paper className={classes.pageContent}>
            
            <Toolbar>
                <TextField
                    label="Search Users"
                    className={classes.searchInput}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                            <Search />
                        </InputAdornment>)
                    }}
                    onChange={handleSearch}
                />
            </Toolbar>
            <TblContainer>
                <TblHead />
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell><b>{item.name}</b></TableCell>
                                <TableCell><b>{item.email}</b></TableCell>
                                <TableCell><b>{item.mobile}</b></TableCell>
                                <TableCell><b><CheckCircleIcon style={{color:'#2ecc71'}}/>{item.adminpayment ?<>Done by Admin</> :<>Done by User</>}</b></TableCell>
                                <TableCell><b><Button
                                        variant="contained"
                                        color="secondary"
                                        endIcon={<CreditCardIcon/>}
                                        onClick={()=>updateStatus(item.email)}
                                    >
                                        Unpay
                                    </Button></b>
                                    </TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </TblContainer>
            <TblPagination />
        </Paper>
        
    
    </div>
    </>
        :
    <>
        <PaymentUserTable/>
    </>
        }

    
    </>)
    
}

export default PaymentUserList