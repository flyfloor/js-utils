function formatNumber(str) {  
    if(str.length <= 3){  
        return str;  
    } else {  
        return formatNumber(str.substr(0,str.length-3))+','+str.substr(str.length-3);  
    }  
}
