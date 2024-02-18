import React from "react";

function Application() {
  return (
    <section className="application">
      <h2>Leave an application</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="application-text">
          Please use the form below to contact us. Enter your name, email, and
          message and we'll get back to you shortly.
        </p>
      </div>
      <div className="form-container">
        <img
          src="https://sofiaprotsiv.github.io/english-excellence/assets/student-abd09ad0.webp"
          alt=""
        />
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Comment"></textarea>
          <h5>Choose a teacher</h5>
          <form className="radio-form">
            <label>
              <input type="radio" name="option" checked value="option1" />
              Maria
            </label>
            <label>
              <input type="radio" name="option" value="option2" />
              Maria
            </label>
            <label>
              <input type="radio" name="option" value="option3" />
              Maria
            </label>
          </form>
        </form>
      </div>
    </section>
  );
}

export default Application;
