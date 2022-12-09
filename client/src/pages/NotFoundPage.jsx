import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <section>
            This is Not found page!
            <Link to="/">Home</Link>
        </section>
    )
}