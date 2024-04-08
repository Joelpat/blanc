
function Time() {

const date = new Date().getHours();

return <h2>{(date < 8 || date > 18) ? 'Registration is closed!' : 'Registration is Opened'}</h2>
}

export default Time;