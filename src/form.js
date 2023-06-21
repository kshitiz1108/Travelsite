import React from 'react';
export default function Form(){
    const [FormData, SetFormData] = React.useState({
        Email: "",
        Password:"",
        ConfirmPassword:"",
        Newsletter:true
    })
    
      
     function handlename(event){
        const {name ,value,type,checked} = event.target;
        SetFormData(prevformdata =>{
            return {
            ...prevformdata,
            [name] : type === "checkbox" ? checked : value
            }
        })
        

     }
    
      function handlesubmit(event){
             event.preventDefault();
             
             if(FormData.Password === FormData.ConfirmPassword){
                
                
                if(FormData.Newsletter){
                    console.log("Successfully signed up")
                    console.log("Thanks for signing up for our newsletter!")
                }
                else{
                    console.log("Successfully signed up")
                }

             }
             else{
                console.log("Passwords do not match")
             }
      }



    return(
        <form onSubmit={handlesubmit}>
          
           <input
            type="email"
            placeholder='E-mail'
            onChange={handlename}
            name = "Email"
          />
          <br/>
          <input
            type="password"
            placeholder='Password'
            onChange={handlename}
            name = "Password"
          />
          <br/>
          <input
            type="password"
            placeholder='Confirm Password'
            onChange={handlename}
            name = "ConfirmPassword"
          />
          <br/>
          <input
            type='checkbox'
            id='Newsletter'
            checked={FormData.Newsletter}
            onChange={handlename}
            name = "Newsletter"
          />
           <label htmlFor='Newsletter'>I want to join the Newsletter</label>
           <br/>
            <button> Sign Up</button>
        </form>
    )
}