import { Link } from "react-router-dom";
import "./CardItem.css";
import placeholder from "../../images/notfound.jpg";
import { useDispatch } from "react-redux";
import { setDetailsCard } from "../../store/cardsSlice";

export default function CardItem({ book }) {
    const { title, imageLinks, categories, authors } = book.volumeInfo;
    const cardImage = imageLinks?.thumbnail
        ? imageLinks?.thumbnail
        : placeholder;

    const dispatch = useDispatch();
    return (
        <Link
            className="card-item"
            to={`/book/${book.id}`}
            onClick={() => {
                dispatch(setDetailsCard({ book }));
            }}
        >
            <li>
                <img className="card-item__img" src={cardImage} alt={title} />

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
