import { useState } from "react";
const Service = () => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');

    const deletItem = (index) => {
        let temp = list.filter((item, i) => i !== index);
        setList(temp);
    };
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
    list.map((item, i) => <li>{item} <span><button onClick={() => deletItem(i)}>X</button></span></li>)}
    </ol>
    </>
    );
}

export default Service;