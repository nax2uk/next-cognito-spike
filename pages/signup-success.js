const SignUpSuccess = () => {
 
    return (
    <>
        <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">

            <h1 className="govuk-heading-xl">You have successfully signed up</h1>
            </div>
        </div>
    </>
    
    )
}

export default SignUpSuccess;

export const getServerSideProps = (ctxt) => {
    // console.log(ctxt.req);
    return {
        props: {
            message: "hello"
        }
    }
}