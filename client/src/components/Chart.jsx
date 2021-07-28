import React from 'react'
import {Line} from 'react-chartjs-2'
const Chart=(props)=>{
    const label=props.date
    const category=props.category
    console.log("CHART WALI DATE",props.date)
    console.log("CHART WALI Category",category)

    const [maindate,setmaindate]=React.useState([])
    let datearr=[]
    const data=props.data
    console.log("CHART WALA DATA",data)
    const ADX=props.adx
    const PlusDi=props.plusDi
    const MinusDi=props.minusDi
    console.log("ADX wala data",ADX)
    console.log("Plus DI wala",PlusDi)
    console.log("Minus wala",MinusDi)
    const Rsi=props.rsi
    console.log("RSI wala",Rsi)
    const MACD=props.macd
    const macdexp9=props.macdexp9
    const macdhi=props.macdhi
    console.log("MACD data",MACD)
    console.log("MACDEXP9 wala",macdexp9)
    console.log("Histogram wala",macdhi)

    const MFI=props.mfi 
    const CCI=props.cci

    console.log("MFI DATA",MFI)
    console.log("CCI data",CCI)

    const WR=props.wr 
    const UB=props.ub 
    const MB=props.mb
    const LB=props.lb
    const SK=props.sk
    const SD=props.sd

    if(category=='psar')
    {

        return(
            
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'PSAR value (LAST 50 days)',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='adx')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'ADX value (LAST 50 days)',
                    data: ADX,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Plus DI value (LAST 50 days)',
                    data: PlusDi,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Minus Di value (LAST 50 days)',
                    data: MinusDi,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='rsi')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'RSI value (LAST 50 days)',
                    data: Rsi,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='macd')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'MACD value (LAST 50 days)',
                    data: MACD,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'EXP(9) value (LAST 50 days)',
                    data: macdexp9,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    type:'bar',
                    label: 'MACD histogram value (LAST 50 days)',
                    data: macdhi,
                    backgroundColor: [
                        '#273c75'
                    ],
                    borderColor: [
                        '#192a56'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='mfi')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'MFI value (LAST 50 days)',
                    data: MFI,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='cci')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'CCI value (LAST 50 days)',
                    data: CCI,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )


    }
    else if(category=='wr')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'WR value (LAST 50 days)',
                    data: WR,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )


    }
    else if(category=='bb')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'Upper Bond value  (LAST 50 days)',
                    data: UB,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Middle Bond value  (LAST 50 days)',
                    data: MB,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Lower Bond value  (LAST 50 days)',
                    data: LB,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='stoch')
    {

        return(
            <>
            <Line
            data={{
                labels: label,
                datasets: [{
                    label: 'Slow K value (LAST 50 days)',
                    data: SK,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Slow D value (LAST 50 days)',
                    data: SD,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                
            ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
            </>
        )

    }
    else if(category=='ichimoku')
    {

        return(
            <>
            <h3>No Chart to display</h3>
            </>
        )

    }
    else{
        <h4>No chart to display</h4>
    }

    return(
        <>
        <Line
        data={{
            labels: label,
            datasets: [{
                label: 'PSAR value (LAST 50 days)',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            
        ]
        }}
        height={400}
        width={600}
        options={{
            maintainAspectRatio:false
        }}
        />
        </>
        
    )

    
}

export default Chart