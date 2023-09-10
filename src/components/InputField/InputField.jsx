import "./InputField.css";

export default function InputField({ onSubmitForm, value, onChange }) {
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(value);
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
