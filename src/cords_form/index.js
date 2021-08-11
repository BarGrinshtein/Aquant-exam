import {React, useState} from 'react';


const CordsForm = (props) =>{

    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const onSubmit = () =>{
        props.handlePointSubmit({lat, lng});
    }

    return(
        <div className='cords_form'>
            <input type="text" 
            className="cords_input" 
            placeholder="Enter Latitiude"
            onChange={(e)=> setLat(e.target.value)} 
            value={lat}/>

            <input type="text" 
            className="cords_input" 
            placeholder="Enter Longitude" 
            onChange={(e)=> setLng(e.target.value)}
            value={lng}/>

            <button className="submitBtn" onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default CordsForm;