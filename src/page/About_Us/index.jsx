import React from "react";
import Navbar from "../../component/molecules/Navbar";



const About_Us =()=>{
  const showAlert =()=>{
    alert("Submit Successfully");
};

return(
        
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h5>About Us</h5>
                    <p> Flowers & Fancies by Floral Fancies is committed to
                         offering only the finest floral arrangements and gifts, 
                         backed by service that is friendly and prompt.
                         Because all of our customers are important,
                         our professional staff is dedicated to making your experience a pleasant one. </p>
                         <p>Hotline:<a href="Hotline">0112906583</a></p>  
                         <p>Facebook:<a href="Facebook">https://www.floralfancies.com</a></p>   
                </div>
            </div>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="button" className="btn btn-primary" onClick={showAlert}>Submit</button>
</form>
        </div>  
         
        
        )
}
export default About_Us ;