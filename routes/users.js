const express = require("express");
const router = express.Router();
const Main = require("../models/main");
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());



router.get("/data/:name",(req, res,next)=>{
    let getname=req.params.name;
    console.log("===>",getname)
    Main.findOne({symbol:getname
    }).then((user) => {
            if (!user) {
            return res.status(400).json({
            	success: false
            });
        }
        else{

            // PSAR

            var obj1=user.data.psar[1]
            var obj2=user.data.psar[2]
            var PSAR='N'
            if((parseFloat(obj1._doc["1"])-parseFloat(obj2._doc["1"]))>0){
                PSAR='I'
            }
            else{
                PSAR='D'
            }
            console.log("PSAR:",PSAR)

            var PSARCOL={}
            
            dateforchart=[]
            psardataforchart=[]
            for (let i = 1; i < user.data.psar.length-1; i++) {
                if(user.data.psar[i]._doc["1"]>user.data.psar[i+1]._doc["1"]){
                    PSARCOL[i-1]="#4cd137"
                }
                else{
                    PSARCOL[i-1]="#e84118"
                }
                
              }

              for (let i=1;i<50;i++){
                dateforchart.push(user.data.psar[i]._doc["0"])
                psardataforchart.push(user.data.psar[i]._doc["1"])
              }
              var PSARchart={'date':dateforchart,'psar':psardataforchart}
              console.log("PSAR k SAARE COLORS yahan h",PSARCOL)

            // ADX

            var obj1=user.data.adx[1]
            var obj2=user.data.adx[2]
            
            var ADXCOL={}

            var ADX='N'
            if((parseFloat(obj1._doc["2"])>parseFloat(obj2._doc["2"])) && (parseFloat(obj1._doc["3"])>parseFloat(obj2._doc["3"])) && (parseFloat(obj1._doc["4"])<parseFloat(obj2._doc["4"]))){
                ADX='I'
            }
            else{
                ADX='D'
            }

            for (let i = 1; i < user.data.adx.length-1; i++) {
                if(
                    (parseFloat(user.data.adx[i]._doc["2"])>parseFloat(user.data.adx[i+1]._doc["2"])) && (parseFloat(user.data.adx[i]._doc["3"])>parseFloat(user.data.adx[i+1]._doc["3"])) && (parseFloat(user.data.adx[i]._doc["4"])<parseFloat(user.data.adx[i+1]._doc["4"]))
                    ){
                    ADXCOL[i-1]="#4cd137"
                }
                else{
                    ADXCOL[i-1]="#e84118"
                }
              }

              ChartADX=[]
              ChartPlusDI=[]
              ChartMinusDI=[]
              for (let i=1;i<50;i++){
                ChartADX.push(user.data.adx[i]._doc["2"])
                ChartPlusDI.push(user.data.adx[i]._doc["3"])
                ChartMinusDI.push(user.data.adx[i]._doc["4"])
              }
              var ADXchart={'Adx':ChartADX,'plusDi':ChartPlusDI,'minusDi':ChartMinusDI}

            console.log("ADX:",ADX)

            // RSI

            var obj1=user.data.rsi[1]
            var RSI='N'

            var RSICOL={}

            if(parseFloat(obj1._doc["2"])>70){
                RSI='I'
            }
            else if(parseFloat(obj1._doc["2"])<30){
                RSI='D'
            }

            for (let i = 1; i < user.data.rsi.length-1; i++) {
                if(user.data.rsi[i]._doc["2"]>70){
                    RSICOL[i-1]="#4cd137"
                }
                else if(user.data.rsi[i]._doc["2"]<30){
                    RSICOL[i-1]="#e84118"
                }
                else{
                    RSICOL[i-1]="#00a8ff"
                }
              }

              ChartRSI=[]
              for (let i=1;i<50;i++){
                ChartRSI.push(user.data.rsi[i]._doc["2"])
              }
              var RSIchart={'rsi':ChartRSI}

            console.log("RSI:",RSI)

            // MACD

            var obj1=user.data.macd[1]
            
            var MACD='N'
            var MACDCOL={}

            if(parseFloat(obj1._doc['3'])>0){
                MACD='I'
            }
            else{
                MACD='D'
            }

            for (let i = 1; i < user.data.macd.length-1; i++) {
                if(user.data.macd[i]._doc["3"]>0){
                    MACDCOL[i-1]="#4cd137"
                }
                else{
                    MACDCOL[i-1]="#e84118"
                }
              }

              ChartMACD=[]
              ChartExp9=[]
              ChartMacdHistogram=[]
              for (let i=1;i<50;i++){
                ChartMACD.push(user.data.macd[i]._doc["1"])
                ChartExp9.push(user.data.macd[i]._doc["2"])
                ChartMacdHistogram.push(user.data.macd[i]._doc["3"])
              }
              var MACDchart={'macd':ChartMACD,'macdexp9':ChartExp9,'macdhi':ChartMacdHistogram}

            

            console.log('MACD:',MACD)

            // MFI 

            var obj1=user.data.mfi[1]
            var MFI='N'
            var MFICOL={}

            if(parseFloat(obj1._doc['2'])>80){
                MFI='I'
            }
            else if(parseFloat(obj1._doc['2'])<30){
                MFI='D'
            }

            for (let i = 1; i < user.data.mfi.length-1; i++) {
                if(user.data.mfi[i]._doc["2"]>80){
                    MFICOL[i-1]="#4cd137"
                }
                else if(user.data.mfi[i]._doc["2"]<30){
                    MFICOL[i-1]="#e84118"
                }
                else{
                    MFICOL[i-1]="#00a8ff"
                }
              }
            
              ChartMFI=[]
              for (let i=1;i<50;i++){
                ChartMFI.push(user.data.mfi[i]._doc["2"])
              }
              var MFIchart={'mfi':ChartMFI}

            console.log("MFI:",MFI)

            // CCI

            var obj1=user.data.cci[1]
            var CCI='N'
            var CCICOL={}
            if(parseFloat(obj1._doc['2'])>100){
                CCI='I'
            }
            else if(parseFloat(obj1._doc['2'])<-100){
                CCI='D'
            }

            for (let i = 1; i < user.data.cci.length-1; i++) {
                if(parseFloat(user.data.cci[i]._doc["2"])>100){
                    CCICOL[i-1]="#4cd137"
                }
                else if(parseFloat(user.data.cci[i]._doc["2"])<-100){
                    CCICOL[i-1]="#e84118"
                }
                else{
                    CCICOL[i-1]="#00a8ff"
                }
              }

              ChartCCI=[]
              for (let i=1;i<50;i++){
                ChartCCI.push(user.data.cci[i]._doc["2"])
              }
              var CCIchart={'cci':ChartCCI}

            console.log("CCI:",CCI)
            
            // William %R

            var obj1=user.data.wr[1]
            var WR='N'
            var WRCOL={}
            if(parseFloat(obj1._doc['2'])>-20){
                WR='I'
            }
            else if(parseFloat(obj1._doc['2'])<-80){
                WR='D'
            }

            for (let i = 1; i < user.data.wr.length-1; i++) {
                if(parseFloat(user.data.wr[i]._doc["2"])>-20){
                    WRCOL[i-1]="#4cd137"
                }
                else if(parseFloat(user.data.wr[i]._doc["2"])<-80){
                    WRCOL[i-1]="#e84118"
                }
                else{
                    WRCOL[i-1]="#00a8ff"
                }
              }

              ChartWR=[]
              for (let i=1;i<50;i++){
                ChartWR.push(user.data.wr[i]._doc["2"])
              }
              var WRchart={'wr':ChartWR}

            console.log('WR ',WR)

            // Bollinger Band
            var BBCOL={}
            for (let i = 1; i < user.data.bb.length-1; i++) {
                if(i%2==0){
                    BBCOL[i-1]="#ecf0f1"
                }
                else{
                    BBCOL[i-1]="#bdc3c7"
                }
              }

              ChartBBUB=[]
              ChartBBMB=[]
              ChartBBLB=[]
              for (let i=1;i<50;i++){
                ChartBBUB.push(user.data.bb[i]._doc["2"])
                ChartBBMB.push(user.data.bb[i]._doc["3"])
                ChartBBLB.push(user.data.bb[i]._doc["4"])
              }
              var BBchart={'ub':ChartBBUB,'mb':ChartBBMB,'lb':ChartBBLB}

            // STOCH
            var STOCHCOL={}
            for (let i = 1; i < user.data.stoch.length-1; i++) {
                if(i%2==0){
                    STOCHCOL[i-1]="#ecf0f1"
                }
                else{
                    STOCHCOL[i-1]="#bdc3c7"
                }
              }

              ChartSslowK=[]
              ChartSslowD=[]
              for (let i=1;i<50;i++){
                ChartSslowK.push(user.data.stoch[i]._doc["1"])
                ChartSslowD.push(user.data.stoch[i]._doc["2"])
              }
              var STOCHchart={'sk':ChartSslowK,'sd':ChartSslowD}

            // ICHIMOKU
            var ICHIMOKUCOL={}
            for (let i = 1; i < user.data.ichimoku.length-1; i++) {
                if(i%2==0){
                    ICHIMOKUCOL[i-1]="#ecf0f1"
                }
                else{
                    ICHIMOKUCOL[i-1]="#bdc3c7"
                }
              }

            var OBJDATA={'PSAR':PSAR,'ADX':ADX,'RSI':RSI,'MACD':MACD,'MFI':MFI,'CCI':CCI,'WR':WR}

            console.log(OBJDATA)

            var Color={'psar':PSARCOL,'adx':ADXCOL,'rsi':RSICOL,'macd':MACDCOL,'mfi':MFICOL,'cci':CCICOL,'wr':WRCOL,'bb':BBCOL,'stoch':STOCHCOL,'ichimoku':ICHIMOKUCOL}
            var Chart={'psar':PSARchart,'adx':ADXchart,'rsi':RSIchart,'macd':MACDchart,'mfi':MFIchart,'cci':CCIchart,'wr':WRchart,'bb':BBchart,'stoch':STOCHchart}

            return res.status(200).json({
            	data:user.data, objdata:OBJDATA,color:Color,chart:Chart

            });
        }
})
});


// router.post("/data",(req, res,next)=>{
//     Main.create({
//         name:"aaaaa",
//     }).then((user) => {
//         console.log(user);
//         if (!user) {
//             return res.status(400).json({
//                 success: false
//             });
//         }
//         else{
//             return res.status(200).json({
//                 success: true,
//             });
//         }
// })
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
