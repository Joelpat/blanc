
import {useState} from 'react';

function FormList() {

    const [addName, setAddName] = useState('');
    
    const [myList, setMyList] = useState([]);

    const newList = () => {
        let student = myList;
        student.push(addName);
        setMyList(student);
        setAddName('');
    };
return (
    <>
    
    <input type='text' name='student'  value={addName} onChange={(e) => setAddName(e.target.value)} />
    <button onClick={newList}>Add student</button>

<h2>Student List</h2>
<ul>{myList.length > 0 &&
myList.map((item) => <li>{item}</li>)
}</ul>
    </>
);
}
export default FormList;