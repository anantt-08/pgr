var axios = require("axios");
var ServerUrl = "https://pgrdemo.herokuapp.com/";

const getLoginList = async (url) => {
  try {
    var k = ServerUrl + url;
    console.log(k);
    const response = await fetch(k);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log("No data return...Devansh");
    return null;
  }
};

const getLoginList2 = async (url) => {
  try {
    var k = ServerUrl + url;
    console.log(k);
    const response = await fetch(k);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log("No data return...Devansh");
    return null;
  }
};

export { ServerUrl, getLoginList, getLoginList2 };
