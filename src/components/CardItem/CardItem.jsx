import { Link } from "react-router-dom";
import "./CardItem.css";

export default function CardItem({ setDetailsCard, book }) {
    const { title, imageLinks, categories, authors } = book.volumeInfo;

    return (
        <Link
            className="card-item"
            to={`/book/${book.id}`}
            onClick={() => setDetailsCard(book)}
        >
            <li>
                <img
                    className="card-item__img"
                    src={imageLinks?.thumbnail}
                    alt={title}
                />

                <p className="card-item__category">
                    {categories ? categories[0] : "no category information"}
                </p>
                <h2 className="card-item__title">{title}</h2>
                <p className="card-item__author">
                    {authors
                        ? authors.join(", ")
                        : "no information about the author"}
                </p>
            </li>
        </Link>
    );
}
