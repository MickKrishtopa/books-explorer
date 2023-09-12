import { useNavigate } from "react-router";
import "./CardDetails.css";
import placeholder from "../../images/notfound.jpg";

export default function CardDetails({ data }) {
    const { title, authors, description, categories, imageLinks } =
        data.volumeInfo;

    const cardImage = imageLinks?.thumbnail
        ? imageLinks?.thumbnail
        : placeholder;

    const navigate = useNavigate();
    return (
        <section>
            <button
                onClick={() => navigate("/")}
                className="card-details__back-btn"
            >
                Back
            </button>
            <div className="card-details">
                <img
                    src={cardImage}
                    alt={title}
                    className="card-details__image"
                />
                <div className="card-details__text-area">
                    <span className="card-details__category">
                        {categories
                            ? categories.join(" / ")
                            : "no category information"}
                    </span>
                    <h2 className="card-details__title">{title}</h2>
                    <p className="card-details__author">
                        {authors
                            ? authors.join(", ")
                            : "no information about the author"}
                    </p>
                    <p className="card-details__description">{description}</p>
                </div>
            </div>
        </section>
    );
}
