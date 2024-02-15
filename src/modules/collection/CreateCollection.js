import { styled } from "styled-components";
import { GradientButton } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { FormInput } from "../../components/Inputs";
import { Label, Text } from "../../components/Text";
import { useRef } from "react";
import { useMetaMask } from "../../hooks/metamask";

const CreateCollectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: var(--dark-gray);
    padding: 100px;

`

const FormLabel = styled(Label)`
    display: flex;
    flex-direction: column;
`

const CreateCollectionForm = styled(Form)`
    gap:0.5em;

    div {
        flex-direction: column;
        gap: 0.1em;
    }

    input {
        width: 500px;
        font-family: var(--font2);
        height: 10px;
        margin-top: 5px;
    }

    input::placeholder {
        font-size: 1.1em;
        color: var(--light-gray);
    }

    button {
        width:200px;
    }
`

const LogoContainer = styled.div`
    input[type="file"] {
        display: none;
    }
    input[type="button"] {
        background: linear-gradient(rgb(27, 27, 27), rgb(27, 27, 27)) padding-box,
              linear-gradient(92.92deg, #EB6335 4.46%, #E95730 100%) border-box;
        border-radius: 20px;
        border: 1px solid transparent;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        cursor: pointer;
        font-size: 2em;
        color: var(--accent);
    }
`

function CreateCollection() {
    const fileInputRef = useRef(null);
    const { wallet } = useMetaMask();

    function submitForm(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append("walletAddress", wallet.accounts[0]);
        formData.append("originalName", formData.get("name"));
        formData.append("externalLink", formData.get("name").split(" ").join("-"));
        formData.set("name", formData.get("name").toLowerCase());
        fetch(`${process.env.REACT_APP_API_URL}/nft/collection/create`, {
            method: "POST",
            body: formData,
            credentials: "include",
        })
    }

   return (
   <CreateCollectionContainer>
        <CreateCollectionForm onSubmit={submitForm}>
            <div>
                <FormLabel $color = "white">
                    Name
                    <FormInput name = "name" placeholder = "Project name"/>
                </FormLabel>
            </div>
            <div>
                <FormLabel $color = "white">
                    Symbol
                    <FormInput name = "symbol" placeholder = "Symbol" />
                </FormLabel>
            </div>
            <div>
                <FormLabel $color = "white">
                    Description
                    <FormInput name = "description" placeholder = "Description" />
                </FormLabel>
            </div>
            <div>
                <FormLabel $color = "white">
                    Preset Royalty
                    <FormInput name = "royalty" type = "number" placeholder="e.g 10%" />
                </FormLabel>
            </div>
            <div>
                <Text as = "p" $color = "white">Logo</Text>
                <LogoContainer> 
                    <input name = "logo" type = "file" ref = { fileInputRef }/>
                    <input type="button" value="+" onClick={() => fileInputRef.current.click()}/>
                </LogoContainer>
            </div>
            <GradientButton><b>NEXT</b></GradientButton>
        </CreateCollectionForm>
    </CreateCollectionContainer>);
}

export default CreateCollection;