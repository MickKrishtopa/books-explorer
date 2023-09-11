import "./CardList.css";

import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";

export default function CardList({
    isLoading,
    data,
    cardList,
    onAddMoreBtnClick,
    setDetailsCard,
}) {
    // const cardList = data?.items;
    return (
        <section className="card-list">
            {data?.totalItems && (
                <h2 className="card-list__counter">{`Found ${data.totalItems} books`}</h2>
            )}
            <ul className="card-list__list">
                {cardList &&
                    cardList.map((book) => {
                        return (
                            <CardItem
                                book={book}
                                setDetailsCard={setDetailsCard}
                                key={book.etag}
                            />
                        );
                    })}
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
