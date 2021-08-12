import React,{useState} from 'react'
import {getUserListforPayment2,upData} from './Nodeservices'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from './UseTable'
import { Search } from "@material-ui/icons";
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
]

const PaymentUserTable=()=>{

    
	  

    const classes = useStyles();
    const [getList1,setList1]=React.useState([])
   

    const fetchData=async()=>{

      var result=await getUserListforPayment2('userlistforpayment2')


      setList1(result)
      console.log(result)
    }
    React.useEffect(function(){
      fetchData()

    },[])

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
        var result=await upData('updatepaymentstatus',id)
        fetchData()

    }

    

    console.log(getList1)

    return(<>
    
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
                                <TableCell><b><Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<CreditCardIcon/>}
                                        onClick={()=>updateStatus(item.email)}
                                    >
                                        Paid
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
    

    </>)
    
}

export default PaymentUserTable