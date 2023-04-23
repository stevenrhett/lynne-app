import { Link, useRouteError } from "react-router-dom"

export default function PageError() {
    const error = useRouteError()

    return (
        <div className="root-layout">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the Homepage</Link>
        </div>
    )
}
