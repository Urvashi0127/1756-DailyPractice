import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 style={{color:"#CDFCF6"}}>Contact Page</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="map">
        <iframe
        title="gmap" 
        className="rounded shadow-lg"  allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.174971551687!2d76.65758911437463!3d30.51609110309381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665605730366!5m2!1sen!2sin"  width="500" height="505" ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
