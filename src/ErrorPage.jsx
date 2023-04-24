import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Oops!</h1>
            <h1 className="mb-5 text-5xl font-bold">Error</h1>
            <p className="mb-5">Sorry, an unexpected error has occurred.</p>
            <button className="btn-error btn">
              <Link to="/">Back to the Homepage</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
