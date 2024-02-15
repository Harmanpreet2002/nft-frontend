import { StrikethroughText, Text } from "../../components/Text";
import { FormInput } from "../../components/Inputs";
import { AuthButton, GradientButton } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { styled } from "styled-components";

const StyledSignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SignUpForm = styled(Form)`
    gap:0.5em;

    input {
        width: 250px;
        font-family: var(--font2);
    }
    input::placeholder {
        font-size: 1.1em;
        color: var(--light-gray);
    }
`

const AuthButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    margin-top: 1.9em;
`

function SignUp() {

    function signUp(event){
        event.preventDefault();

        const form = event.target;
        const form_data = new FormData(form);
        const payload = {}

        for(const [key, value] of form_data.entries()){
           payload[key] = value;
        }

        fetch(`${process.env.REACT_APP_API_URL}/signup`, 
        {
            method: "post",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(payload)
        })
    }


    return (
        <div>
            <StyledSignUp>
                <Text as="h1" $font1 $accent>SIGN UP</Text>
                <Text as = "h4" $color = "white" $font2>Welcome back! Please enter your details</Text>
                <SignUpForm style={{marginTop: "1.5em"}} method="post" onSubmit={signUp}>
                    <div>
                        <FormInput placeholder="First name" type='text' name = "firstName" />
                        <FormInput placeholder="Last name" type='text' name = "lastName" />
                    </div>
                    <FormInput placeholder="Email" type='email' name = "email" style={{width: '100%'}} />
                    <div>
                        <FormInput placeholder="Password" type="password" name = "password" />
                        <FormInput placeholder="Confirm password" type="password" name = "confirmPassword" />
                    </div>
                    <GradientButton type="submit" $gradient>SIGN UP</GradientButton>
                </SignUpForm>
                <div style={{marginTop: "1em", width: "100%"}}>
                    <StrikethroughText as = "h3" $color = "white">Login with</StrikethroughText>
                    <AuthButtonContainer style={{marginTop: "1.9em"}}>
                        <AuthButton>Google</AuthButton>
                        <AuthButton>Facebook</AuthButton>
                    </AuthButtonContainer>
                </div>
            </StyledSignUp>
        </div>
    )

}

export default SignUp;