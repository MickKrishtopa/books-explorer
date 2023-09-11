import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found">
            <div className="not-found__message-area">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__description">Страница не найдена</p>
            </div>

            <button
                type="button"
                onClick={() => navigate(-1)}
                className="not-found__button-back"
            >
                Назад
            </button>
        </section>
    );
}
