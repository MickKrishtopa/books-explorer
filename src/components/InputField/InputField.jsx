import { useNavigate } from "react-router";
import "./InputField.css";

export default function InputField({ onSubmitForm, value, onChange }) {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(value);
        navigate("/");
    };
    return (
        <form onSubmit={(e) => onSubmit(e)} className="input-field">
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-field__input"
            />
            <button type="submit" className="input-field__submit-btn" />
        </form>
    );
}
