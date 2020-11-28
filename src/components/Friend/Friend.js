import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus} from '@fortawesome/free-solid-svg-icons'


const Friend = (props) => {
    const {name, img, email, salary, phone,institute} = props.user;
    const handleOnClick = props.handleOnClick;
    const friendStyle = {
        display: 'flex', 
        width: '100%',
        borderBottom: '1px solid gray',
        margin: '10px 20px'
    }
    const imgStyle = {
        height:'150px', 
        marginTop: '15px',
        marginLeft: '20px'
    }
    return (
        <div style ={friendStyle}>
           <img style={imgStyle} src={img} alt=""/>
           <div style = {{marginLeft: '20px'}}>
               <h3>Name: {name}</h3>
                <p><small>Phone: </small> {phone}</p>
                <p><small>Email: </small> {email}</p>
                <p>Yearly Salary: {salary * 12}</p>
                <p>institute: {institute}</p>
           </div>
           <div style ={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
           <button style={{height:'30px',backgroundColor:'#0080ff',border: '1px solid gray',borderRadius:'5px'}} onClick={() => handleOnClick(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
           </div>
        </div>
    );
};

export default Friend;