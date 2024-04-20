import { useState } from "react";
const Contact = () => {

    const [file, setFile] = useState('');

    const handleChange = (e) => {
        
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return ( 
        <div> 
    <h3>Contact Us:</h3>
    <input type="file" onChange={handleChange}  />
    <img src={file} alt="" />
    </div>
    );
}

export default Contact;