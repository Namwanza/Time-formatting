function timeConversion(s) {
    // Write your code here
    if(s.endsWith("PM")) s=s.substring(0, s.indexOf("PM"))+ " PM";
    if(s.endsWith("AM")) s=s.substring(0, s.indexOf("AM"))+ " AM";

    const d=new Date("2000-01-01 " + s);

    if(s.endsWith("PM") && d.getHours()<12) d.setHours(12); 
    if(s.endsWith("AM") && d.getHours()===12) d.setHours(d.getHours()-12); 

    let result= (d.getHours() < 10 ?  "0" + d.getHours(): d.getHours())+ ":"+   
    (d.getMinutes() <10 ? "0"+ d.getMinutes(): d.getMinutes()) + ":" +     
    (d.getSeconds() <10 ? "0"+ d.getSeconds(): d.getSeconds());

    return result;
}