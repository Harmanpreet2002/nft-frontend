import { styled } from "styled-components"

function changeFontFamily(props) {
    return (props.$font1 && "Bakbak One, cursive") || (props.$font2 && "Poppins, sans-serif");
}

// Change the font family by writing $font1 (Bakbak One) or $font2 (Poppins)
// Example: <Text $font1>Lorem ipsum</Text>

// Change the color by writing `$color = "<enter_color_here>"` or $accent (orange color)
// Examples: <Text $color = "white">Lorem ipsum</Text>
//           <Text $accent>Lorem ipsum</Text>

// Change the element being rendered by using the "as" prop
// Example: <Text as = "h3">Lorem ipsum</Text>
const Text = styled.h1`
    font-family: ${(props) => changeFontFamily(props)};
    color: ${(props) => (props.$accent && "var(--accent)") || props.$color};
`

const StrikethroughText = styled.h3`
    display: flex;
    flex-direction: row;
    color: ${(props) => (props.$accent && "var(--accent)") || props.$color};
    &:before, &:after{
        content: "";
        flex: 1 1;
        border-bottom: 2px solid #808080;
        margin: auto;
    }

    &:before {
        margin-right: 10px;
    }

    &:after {
        margin-left: 10px;
    }
`
const Label = styled.label`
    font-family: ${(props) => changeFontFamily(props)};
    color: ${(props) => (props.$accent && "var(--accent)") || props.$color};
`
export { Text, StrikethroughText, Label }