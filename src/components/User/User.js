import React, {useState} from 'react';
import './User.css'

const User = (props) => {
    const { name, email, picture, website, phone } = props.userInfo;
    const [phoneNum, setPhoneNum] = useState('');
    const fullName = name.first + '' + name.last
    const addMember = props.addMember;

    const showPhone = () => setPhoneNum(phone);

    return (
        <div className="cart">
            <div className="user-cart">

                <div className="user-image">
                    <img src={picture.large} alt="" />
                </div>

                <div className="user-details">
                    <h3 className="name">{fullName}</h3>
                    <p className="email">{email}</p>
                    <a target="_blank" href={website} >Website</a>
                    <p className="phone">Phone: {phoneNum}</p>
                    <button onClick={showPhone} className="btn-phone">Show Number </button>
                    <button onClick={()=>addMember(fullName)} className="btn">Add me</button>
                </div>

            </div>
        </div>
    );
};

export default User;