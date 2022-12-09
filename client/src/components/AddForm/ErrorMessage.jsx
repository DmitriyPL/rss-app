import "./ErrorMessage.scss";

export const ErrorMessage = ({ error }) => {
    return (
        <div className="message-error">
            { error }
        </div>
        
    )
}