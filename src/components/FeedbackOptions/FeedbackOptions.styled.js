import { styled } from "styled-components";
export const StyledDiv = styled.div`
display: flex;
gap: 25px;
button {
    display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}
button:hover, button:focus {
    background-color: #0056b3;
  color: #fff;
  transform: scale(1.05);
}
`