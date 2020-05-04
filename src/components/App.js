import React,{useState} from 'react'

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
        // console.log(name)
        if(name === 'next')
            setIndex(prevIndex => prevIndex+1)
        else if(name === 'back')
            setIndex(prevIndex => prevIndex-1)
   
        // console.log(index)
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    function handleSwitch(index){
        switch(index){
            case 1:
                return(
                    <div>
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
                    <div>
                        <label for="houseNo"> House Number </label>
                        <input type="text" id="houseNo" name="houseNo" value={formData.houseNo} onChange={handleChange}/>
                        <label for="street"> Street </label>
                        <input type="text" id="street" name="street" value={formData.street} onChange={handleChange}/>
                        <label for="city"> City </label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/>
                        <button onClick={handleClick} name="back"> Back </button>
                        <button onClick={handleClick} name="next"> Next </button>
                    </div>
                  
                )

            case 3:
                return(
                    <div>
                        <label for="cardNo"> Card Number </label>
                        <input type="text" id="cardNo" name="cardNo" value={formData.cardNo} onChange={handleChange}/>
                        <label for="cardName"> Card Name </label>
                        <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange}/>
                        <label for="cvv"> CVV </label>
                        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange}/>
                        <button onClick={handleClick} name="back"> Back </button>
                        <button> Submit </button>
                    </div>
                   
                )   
        }
    }

    // console.log(index)
    // console.log(formData)
    return(
        <form onSubmit={handleSubmit}>
            {handleSwitch(index)}
        </form>
    )
    
}
export default App