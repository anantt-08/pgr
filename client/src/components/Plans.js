import React,{useState,useEffect} from 'react';
import './Style/Plans.css';

const Plans = () => {

    const [plan,setPlan] =useState('1 Month Plan - $100');
 

    const handleSubmit=(e)=> {
        alert('Your plan  is :=> '+ plan );
        e.preventDefault();
        
         
      }
    const Change =(e)=>{
        
        setPlan(e);
    }


    return (
        <>
            <div className="card plans"  style={{width: '24rem',boxShadow:'0 2px 10px 4px gray'}}>
                <div className="card-img-top img"></div>
                    <div className="card-body">
                        <h5 className="card-title plans-title">Buy Our Plans</h5>
                        <p className="card-text plans-text">
                            <p>1 Month Plan - $100</p>
                            <p>3 Months Plan - $300</p>
                            <p>6 Months Plan - $600</p>
                            <p>12 Months Plan - $1000</p>
                        </p>
                        <label>Select Your Plan</label>
                        <form onSubmit={e=>handleSubmit(e)}>
                            <select className="select-plan"   value={plan} onChange={e=>Change(e.target.value)}>
                                <option value="1 Month Plan - $100"    >1 Month Plan - $100</option>
                                <option value="3 Months Plan - $300"   >3 Months Plan - $300</option>
                                <option value="6 Months Plan - $600"   >6 Months Plan - $600</option>
                                <option value="12 Months Plan - $1000"   >12 Months Plan - $1000</option>

                            </select>
                        
                            <button type='submit' className="btn btn-primary">Buy Plan</button>
                        </form>
                    </div>
            </div>
        </>
            )
}

            export default Plans;