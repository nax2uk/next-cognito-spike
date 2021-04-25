import { useRef } from "react";
import Router from "next/router"
const HomePage = () => {
    const emailRef = useRef()
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
   
    const submitSignUpDetails = async (event) =>{
        event.preventDefault();
        const body = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value,
            js_enabled: "1"

        });
        console.log(body);
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body,
          });
    
        console.log(res);
        if (res.status === 201) {
            console.log('*****using react****');
            Router.push("signup-success")

        } else {
            //const { error } = await res.json();
            //console.error(error);
        }
    }
    return (
    <>
        <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">

            <h1 className="govuk-heading-xl">Sign up Form</h1>
            <h2 className="govuk-heading-m">Please sign up</h2>
            </div>
        </div>
        <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
                <form onSubmit={submitSignUpDetails} action="/api/signup" method="POST">
                    <div className="govuk-form-group">
                        <input type='hidden' name="js_enabled" value="0"/>
                        <label className="govuk-label" htmlFor="email">
                            Email
                        </label>
                        <input className="govuk-input govuk-!-width-two-thirds" id="email" name="email" type="text" ref={emailRef} />
                    </div>
                    <div className="govuk-form-group">
                        <label className="govuk-label" htmlFor="password">
                            Password
                        </label>
                        <input className="govuk-input govuk-!-width-two-thirds" id="password" name="password" type="password" ref={passwordRef} />
                    </div>
                    <div className="govuk-form-group">
                        <label className="govuk-label" htmlFor="password">
                            Confirm Password
                        </label>
                        <input className="govuk-input govuk-!-width-two-thirds" id="confirm_password" name="confirm_password" type="password" ref={confirmPasswordRef} />
                    </div>
                    <button className="govuk-button" data-module="govuk-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </>)
}

export default HomePage;