import "./SelectForm.css";

import { useDispatch } from "react-redux";
import { setFilters } from "../../store/cardsSlice";

export default function SelectForm({ name, title, options }) {
    const dispatch = useDispatch();
    return (
        <label className="select-form">
            {title}
            <select
                className="select-form__select-area"
                onChange={(e) => {
                    dispatch(
                        setFilters({
                            name: e.target.name,
                            value: e.target.value,
                        })
                    );
                }}
                name={name}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {" "}
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}
