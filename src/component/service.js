import { useState } from "react";
const Service = () => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');

    const addToList = () => {
        let tempArr = list;
        tempArr.push(value);
        setList(tempArr);
        setValue('');
    };
    return (  
        <>   
    <h2>Our Services</h2>

    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={addToList}>Add student</button>
    <ol>{list.length > 0 &&
    list.map((item) => <li>{item}</li>)}
    </ol>
    </>
    );
}

export default Service;