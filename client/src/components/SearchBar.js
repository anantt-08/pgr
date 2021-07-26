import React,{useState,useEffect} from 'react'
 
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import axios from 'axios';
import { useHistory} from "react-router-dom";
import './Style/SearchBar.css'
import Grid from '@material-ui/core/Grid';
//default base url
axios.defaults.baseURL = 'https://pgrdemo.herokuapp.com';




function Search({name,setName}) {
 
  const history = useHistory();
   
  const[val,setVal] = useState([])
 
const fetchData = async ()=>{
  
    //fetching all details tablse of company
    const result= await axios.get('/names/company');
    setVal(result.data)
 
   }
  

 const items =[]

  val.map((res,index)=>(
    items.push({name: res.symbol})
   ))
 
 //console.log("items",items)
  


 useEffect(() => {
  fetchData();
}, []);

 
   

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results)
    if(string==""){
      setName("");
    }
  }

  const handleOnHover = (result) => {
    // the item hovered
   // console.log(result)
  }

  const handleOnSelect = (item) => {
          //history.push(`/data/adx`,{params: item.name})
          //console.log(item.name)
        setName(item.name);
        history.push("/data/psar");

        }

  const handleOnFocus = () => {
   // console.log('Focused')
    
       
      
  }




 

 

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <form onSubmit={e=>handleOnSelect()} className="App">
    <br />
      <header className="App-header" >
        <div style={{ width: 400 }}>
          <h3 style={{marginBottom:"5px",marginLeft:"20px",color:'#2c3e50'}} > Enter stock/symbol</h3>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </form>
        </Grid>
    </Grid>
    
  )
}

export default Search