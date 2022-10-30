import "./cotact.scss"
import { useState } from "react";
const Contact = () => {
  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  
  // const handlefileChange = async(e) => {
  //   let reader = new FileReader();
  //   const files = e.target.files;

  //   if (files.length) {
  //     const file = files[0];
  //     console.log(e.target.files[0])
  //   }
   
//   const [pdfFile, setPdfFile]=useState(null);
//   const [pdfFileError, setPdfFileError]=useState('');
//   const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
   
  }

   
  // };
  const [data,setData]=useState({name:"",phone:"",email:"",reason:"",comment:""})
  const handleDetails = ()=> {
    fetch("http://localhost:3004/details",{
      method:"post",
     body:JSON.stringify({
      data
     }),
     headers:{"Content-type":"application/json; charset=UTF-8"
    }

    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
    })

}
  return(
    <div>
      <div className="contact" style={{backgroundImage:`url("assets/contact.jpg")`}}>
        <h1>CONTACT US | VISIT OUR INTERIOR DESIGNER IN RANCHI</h1>
    </div>
    <div className="contactUs">
      <div className="contactContainer">
        <div className="mainBox">
          <div className="leftSide">
            <div className="add_box">
              <h5>
                Archinnovatio
                <br/>
                Studio
              </h5>
              <div className="clearfix"></div>
              <h4 className="heading">Jain Adishwar Hosiery Works</h4>
              <p className="contactP">
              Kunjlal Street
              <br/>
              Upper Bazar,Opp. Ranchi University
              <br/>
              Ranchi - 834001
              </p>
              <p className="contactP">
               +91-651-2203068
              </p>
              <br/>
              <p className="contactP">+91-651-2219171</p>
              <br/>
              <p className="contactP">+91-82926-9744</p>
              <br/>
            </div>
          
          </div>  <div className="rightSide">
              <div className="name_head">Contact Us</div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" id="name" onChange={(e)=>{(setData({...data,name:e.target.value}))}}></input>
              </div>
              <div className="form-group">
                <input type="text" className="form-control"  placeholder="Phone no*" name="phone" id="phone" onChange={(e)=>{(setData({...data,phone:e.target.value}))}}></input>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" name="email" id="email" onChange={(e)=>{(setData({...data,email:e.target.value}))}}></input>
              </div>
              <div className="form-group">
                <div className="custom_select">
                  <select className="form-control" name="reason" id="reason" onChange={(e)=>{(setData({...data,reason:e.target.value}))}}>
                    <option value>Reason for Enquiry</option>
                    <option value="New project enquiry">New project enquiry</option>
                    <option value="Product enquiry">Product enquiry</option>
                    <option value="Collaboration / Social media enquiry">Collaboration /Social media enquiry</option>
                    <option value="Career enquiry">Career enquiry</option>
                    <option value="Supplier enquiry">Supplier enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea name="comment" id="comment" className="form-control" placeholder="Comments" onChange={(e)=>{(setData({...data,comment:e.target.value}))}}></textarea>
              </div>
              <div className="file_attach">
                <span type="button" className="btn_upload">
                  <span className="file_info">Attach File</span>
                <input type="file" accept=".pdf" id="file_attachment" name="attachment" onChange={handlePdfFileChange}></input>
                </span>
              </div>
              {/* <div className="button_outer">
                <input type="text" name="fsubmit" style={{display:"none"}}></input>
                <input type="submit" className="butn" name="submit" value="submit"></input>
              </div> */}
              <button className="bt" onClick={handleDetails}>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Contact
