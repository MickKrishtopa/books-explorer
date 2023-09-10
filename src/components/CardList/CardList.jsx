import "./CardList.css";

import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";

export default function CardList({
    isLoading,
    data,
    cardList,
    onAddMoreBtnClick,
}) {
    // const cardList = data?.items;
    return (
        <section className="card-list">
            {data?.totalItems && (
                <h2 className="card-list__counter">{`Found ${data.totalItems} books`}</h2>
            )}
            <ul className="card-list__list">
                {cardList &&
                    cardList.map((book) => (
                        <CardItem
                            key={book.etag}
                            title={book.volumeInfo.title}
                            img={book.volumeInfo.imageLinks?.thumbnail}
                            category={
                                book.volumeInfo.categories ||
                                "no category information"
                            }
                            author={
                                book.volumeInfo.authors?.join(", ") ||
                                "no information about the author"
                            }
                        />
                    ))}
            </ul>
            {isLoading ? <Preloader /> : null}
            {data && (
                <button
                    onClick={() => onAddMoreBtnClick()}
                    className="card-list__more-btn"
                >
                    Show more
                </button>
            )}
        </section>
    );
}
