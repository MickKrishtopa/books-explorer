import { useNavigate } from "react-router";
import "./InputField.css";

import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setPage, setData } from "../../store/cardsSlice";

import { fetchBooks, resetData } from "../../store/cardsSlice";
import { checkFilters } from "../../utils/utils";

export default function InputField({}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const value = useSelector((state) => state.cardList.searchValue);
    const filters = useSelector((state) => state.cardList.filters);
    const page = useSelector((state) => state.cardList.page);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(resetData());

        const pageUrl = `&startIndex=${30 * page}`;
        const filtersUrl = checkFilters(filters);

        dispatch(setPage({ page: 0 }));
        dispatch(fetchBooks({ request: value, filtersUrl, pageUrl }));

        navigate("/");
    };
    return (
        <form onSubmit={(e) => onSubmit(e)} className="input-field">
            <input
                value={value}
                onChange={(e) =>
                    dispatch(setSearchValue({ value: e.target.value }))
                }
                className="input-field__input"
            />
            <button type="submit" className="input-field__submit-btn" />
        </form>
    );
}
