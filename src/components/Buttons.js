import { styled } from "styled-components";

const Button = styled.button`
    height: 60px;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 20px;
`

const GradientButton = styled(Button) `
  background: var(--orange-gradient);
`

const AuthButton = styled.button `
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    height: 60px;
    background-color: rgb(31, 31, 31);
    border: none;
    padding: 10px;
    color: rgb(152, 152, 152);
    border-radius: 1em;
    font-family: var(--font2);
`

export { Button, GradientButton, AuthButton }