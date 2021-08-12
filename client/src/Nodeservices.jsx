var axios=require('axios')
var ServerUrl="http://localhost:9000/"

const getLoginList=async(url)=>{
    try{
    var k=ServerUrl+url
    console.log(k)
    const response=await fetch(k)
    const result=await response.json()
    console.log(result)
    return result
    }
    catch(e)
    {
        console.log("No data return...Devansh")
        return(null)
    }
}

const getLoginList2=async(url)=>{
    try{
    var k=ServerUrl+url
    console.log(k)
    const response=await fetch(k)
    const result=await response.json()
    console.log(result)
    return result
    }
    catch(e)
    {
        console.log("No data return...Devansh")
        return(null)
    }
}

const getUserList=async(url)=>{
    try{
    var k=ServerUrl+url
    console.log(k)
    const response=await fetch(k)
    const result=await response.json()
    console.log(result)
    return result
    }
    catch(e)
    {
        console.log("No data return...Devansh")
        return(null)
    }
}

const getUserListforPayment=async(url)=>{
    try{
        var k=ServerUrl+url
        console.log(k)
        const response=await fetch(k)
        const result=await response.json()
        console.log(result)
        return result
        }
        catch(e)
        {
            console.log("No data return...Devansh")
            return(null)
        }
}

const getUserListforPayment2=async(url)=>{
    try{
        var k=ServerUrl+url
        console.log(k)
        const response=await fetch(k)
        const result=await response.json()
        console.log(result)
        return result
        }
        catch(e)
        {
            console.log("No data return...Devansh")
            return(null)
        }
}

const upData=async(url,emailid)=>{
    try{
        var k=ServerUrl+url
        console.log(emailid)
        var response=await axios.post(k,{'id':emailid})
        const result=response.data.RESULT
        console.log(`Node Ser wala ${result}`)
        return(result)
    }
    catch(e)
    {
        return(null)
    }
}


export{ServerUrl,getLoginList,getLoginList2,getUserList,getUserListforPayment,getUserListforPayment2,upData}