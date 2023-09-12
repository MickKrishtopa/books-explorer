import "./CardList.css";

import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchBooks, setPage } from "../../store/cardsSlice";
import { checkFilters } from "../../utils/utils";

export default function CardList({ setDetailsCard }) {
    const data = useSelector((state) => state.cardList.data);
    const status = useSelector((state) => state.cardList.status);
    const value = useSelector((state) => state.cardList.searchValue);
    const filters = useSelector((state) => state.cardList.filters);
    const page = useSelector((state) => state.cardList.page);

    const cardList = data?.items;
    const dispatch = useDispatch();

    const onAddMoreBtnClick = () => {
        dispatch(setPage({ page: page + 1 }));
        const pageUrl = `&startIndex=${30 * page}`;
        const filtersUrl = checkFilters(filters);

        dispatch(fetchBooks({ request: value, filtersUrl, pageUrl }));
    };

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
            {status === "loading" ? <Preloader /> : null}
            {data && (
                <button
                    onClick={onAddMoreBtnClick}
                    className="card-list__more-btn"
                >
                    Show more
                </button>
            )}
        </section>
    );
}
