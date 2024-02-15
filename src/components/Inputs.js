import styled from "styled-components";

const FormInput = styled.input`
    background-color: rgb(31, 31, 31);
    height: 56px;
    border: none;
    border-radius: 1em;
    padding: 25px 19px;
    margin-top: 12px;
    color: #ffb33b;
    font-weight: 400;

    &:focus {
        box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px black;
        outline: none;
    }

`

export { FormInput };