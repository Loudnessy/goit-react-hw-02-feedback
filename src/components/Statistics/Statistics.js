import { StyledUl } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positiveFeadback}) => {
return <StyledUl>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feadback: {positiveFeadback}%</li>
</StyledUl>
}