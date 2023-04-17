import { Link, useRouteError } from "react-router-dom"

export default function projectsError() {
    const error = useRouteError()

    return (
        <div className="projects-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the Homepage</Link>
        </div>
    )
}
