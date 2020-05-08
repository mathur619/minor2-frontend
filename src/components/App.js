import React,{useState} from 'react'
import AllDetails from './AllDetails'

function App(){

    const [index,setIndex]= useState(1)
    const [formData,setFormData]= useState({firstname:"",lastname:"",email:"",
                                            houseNo:"",street:"",city:"",
                                            cardName:"",cardNo:"",cvv:""})
    
    function handleChange(event){
        const {name,value}= event.target
        setFormData(prevData => ({...prevData,[name]:value}))
    }
    function handleClick(event){
        event.preventDefault()
        const {name}= event.target
        if(name === 'next')
            setIndex(prevIndex => prevIndex+1)
        else if(name === 'back')
            setIndex(prevIndex => prevIndex-1)
    }
  

    function handleSwitch(index){
        switch(index){
            case 1:
                return(
                    <div className="form">
                        <label for="firstname"> First Name </label>
                        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}/>
                        <label for="lastname"> Last Name </label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>
                        <label for="email"> Email </label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
                        <button onClick={handleClick} name="next"> Next </button>
                    </div>
                )

            case 2:
                return(
                    <div className="form">
                        <label for="houseNo"> House Number </label>
                        <input type="text" id="houseNo" name="houseNo" value={formData.houseNo} onChange={handleChange}/>
                        <label for="street"> Street </label>
                        <input type="text" id="street" name="street" value={formData.street} onChange={handleChange}/>
                        <label for="city"> City </label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/>
                        <div className="form__button__container">
                            <button onClick={handleClick} name="next"> Next </button>
                            <button onClick={handleClick} name="back" className="backButton"> Back </button>
                        </div>
                    </div>
                  
                )

            case 3:
                return(
                    <div className="form">
                        <label for="cardNo"> Card Number </label>
                        <input type="text" id="cardNo" name="cardNo" value={formData.cardNo} onChange={handleChange}/>
                        <label for="cardName"> Card Name </label>
                        <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange}/>
                        <label for="cvv"> CVV </label>
                        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange}/>
                        <div className="form__button__container">
                            <button> Submit </button>
                            <button onClick={handleClick} name="back" className="backButton"> Back </button>
                        </div>
                    </div>
                   
                )
            case 4:
                return(
                    <div className="allDetails">
                        <AllDetails allDetails={formData} />
                        <button onClick={handleClick} name="back" className="backButton"> Back </button>
                    </div>
                )   
        }
    }

  
    return(
        <div>
        <div className="navbar"> Pipesort Technology </div>
        <form onSubmit={handleClick} name="next" >
            {handleSwitch(index)}
        </form>
        </div>
    )
    
}
export default App