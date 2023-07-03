//your JS code here. If required.

let d=document.createElement("div");
document.body.appendChild(d);
document.getElementsByTagName("div")[0].id="browser-info";
d.innerHTML="You are using " + navigator.appName + " version " + navigator.appVersion;

// 
// document.write(document.getElemntsByTagName("div")[0].id);

// let text=document.createTextNode("You are using " + navigator.appName + " version " + navigator.appVersion);
// d.appendChild(text);
