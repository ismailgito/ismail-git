function leap(Year) {

    if (Year%4===0){
    if (Year%100==0){
    if (Year%400===0){
    return "leap year"
    }else{
        return "not leap year";
    }
    }else{
        return "leap year"
    }
    }else{
        return "not leap year"
    };
}
const Year=2028
console.log(leap(Year))