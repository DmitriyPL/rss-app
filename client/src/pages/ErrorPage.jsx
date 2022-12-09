import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError()

    return (
        <section>
            <h1>{error.status}</h1>
            <h2>{error.statusText || "Something goes wrong!"}</h2>
        </section>
    )
}