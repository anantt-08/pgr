import React,{useState} from 'react'
import {getLoginList2} from './Nodeservices'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from './UseTable'
import { Search } from "@material-ui/icons";
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
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
    { id: 'last_scene', label: 'Last Login' },
    { id: 'count', label: 'Count'},
]

const LoginUserList2=()=>{

    

    const classes = useStyles();
    const [getList,setList]=React.useState([])
    const fetchData=async()=>{

      var result=await getLoginList2('userloginlist2')
      setList(result)
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
    } = useTable(getList, headCells, filterFn);

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

    console.log(getList)

    return(<>
    <div>
        <center>
            <h1>User Login List (By Count)</h1>
        </center>
    </div>
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
                                <TableCell><b>{item.emailid}</b></TableCell>
                                <TableCell><b>{item.Last_Seen}</b></TableCell>
                                <TableCell><b>{item.count}</b></TableCell>
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

export default LoginUserList2