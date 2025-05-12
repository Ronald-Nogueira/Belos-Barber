import styled from "styled-components";

const Label = styled.label`
    color: #949494;
    display: flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 400;
`

export default function Checkbox({ name, value }) {
    return(
        <Label>
            <input type="checkbox" name={name} value={value}/>
            {name}
        </Label>
    )
}