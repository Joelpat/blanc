
const Home = () => {
    const date = new Date();
    const ourTime =  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const regisTime = date.getHours;
    return (
        <>
        <h3>{ourTime}</h3>;
        <h3>{(regisTime < 8 || regisTime > 17) ? 'The registration is closed!' : 'The registration is opened'}</h3>;
        </>
    )
}

export default Home;