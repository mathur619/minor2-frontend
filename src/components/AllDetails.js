import React from 'react'

function AllDetails(props){
    const {firstname,lastname,email,
        houseNo,street,city,
        cardName,cardNo,cvv}= props.allDetails

return(
    <div>
        <div> First Name : {firstname} </div>
        <div> Last Name : {lastname} </div>
        <div> Email : {email} </div>
        <div> House No. : {houseNo} </div>
        <div> Street : {street} </div>
        <div> City : {city} </div>
        <div> Card Holder Name : {cardName} </div>
        <div> Card Number : {cardNo} </div>
        <div> CVV : {cvv} </div>
    </div>
)
}

export default AllDetails