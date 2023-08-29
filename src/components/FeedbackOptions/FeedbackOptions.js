import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { StyledDiv } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <StyledDiv onClick={onLeaveFeedback}>
        {options.map(option => {
            return <button key={nanoid()} type="button">{option}</button>
        }) }
    </StyledDiv>
}
FeedbackOptions.propTypes = {
options: PropTypes.array,
onLeaveFeedback: PropTypes.func
}