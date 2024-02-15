import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/reducers/persist.reducer';
import { FormInput } from "../../components/Inputs";
import { AuthButton, GradientButton } from "../../components/Buttons";
import { StrikethroughText, Text } from "../../components/Text";
import { styled } from "styled-components";
import { Form } from "../../components/Form";

const StyledSignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SignInForm = styled(Form)`
    margin-top: 1.9em;
    input {
        width: 562px;
        font-family: var(--font2);
    }
    input::placeholder {
        font-size: 1.1em;
        color: var(--light-gray);
    }
`

const RememberMeContainer = styled.div`
    justify-content: space-between;
`

const RememberMe = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    color: #ffffff;
    font-family: var(--font2);

    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        background-color: #000000;
        border-radius: 0;
        border: 1px solid #808080;
        outline: none;
        cursor: pointer;
        position: relative;
        padding: 12px;
        margin-top: 0;
    }
`

const Checkbox = styled(FormInput)`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;    
    width: 20px;
    height: 20px;
    background-color: #000000;
    border-radius: 0;
    border: 1px solid #808080;
    outline: none;
    cursor: pointer;
    position: relative;
    padding: 12px;
    margin-top: 0;

    :checked:before {
        content: "\2714";
        display: block;
        text-align: center;
        font-size: 1.2rem;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 2px;
    }
`

const SignInAnchor = styled.a`
    color: #ffffff;
    text-decoration: none;
    margin-top: 20px;
    font-size: 1.2rem;
`

const AuthContainer = styled.div`
    color: #ffffff;
    width: 100%;
    margin-top: 1em;
`

const AuthButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    margin-top: 1.9em;
`
function SignIn(){
    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const payload = {}

        for(const [key, value] of formData.entries()){
           payload[key] = value;
        }

        fetch(`${process.env.REACT_APP_API_URL}/users/user/login`, {
            headers: {'Content-Type': "application/json"},
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "include"
        })
        dispatch(saveUser({ info: {}, token: "" }));
    }

    return (
        <div>
            <StyledSignIn>
                <Text $font1 $accent>SIGN IN</Text>
                <Text as = "h3" $font2 $color = "white">Welcome back! Please enter your details</Text>
                <SignInForm onSubmit = {login}>
                    <FormInput name = "email" type = "text" placeholder = "Username or Email" />
                    <FormInput name = "password" type = "password" placeholder = "Password" />
                    <RememberMeContainer>
                        <RememberMe>
                            <Checkbox type = "checkbox" />
                            <span style={{fontSize: "0.9em", color: "#fff"}}>Remember me</span>
                        </RememberMe>
                        <Text as = "p" $accent>Forgot your password?</Text>
                    </RememberMeContainer>
                    <GradientButton type = "submit">SIGN IN</GradientButton>
                </SignInForm>
                <SignInAnchor href='/signup'>Do you have account? Sign up for free</SignInAnchor>
                <AuthContainer>
                    <StrikethroughText as = "h3"><span>or</span></StrikethroughText>
                    <AuthButtonContainer>
                        <AuthButton>Google</AuthButton>
                        <AuthButton>Facebook</AuthButton>
                    </AuthButtonContainer>
                </AuthContainer>
            </StyledSignIn>
        </div>
    )
}


export default SignIn;