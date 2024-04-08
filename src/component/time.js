
function Time() {

    const date = new Date().getHours();
    if(date < 8 && date > 18) {
        return 'The registration is closed'
    } else if(date >= 8 && date <= 18) {
        return 'The registration is opened'
    } else {
        return 'ayayayayaya'
    }
    return   <h2>{date}</h2>;

    
}

export default Time;