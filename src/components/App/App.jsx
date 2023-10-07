import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import CardLlist from "../CardList/CardList";
import Footer from "../Footer/Footer";
import CardDetails from "../CardDetails/CardDetails";
import NotFound from "../NotFound/NotFound";

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
    const detailsCard = useSelector((state) => state.cardList?.detailsCard);

    return (
        <div className="app">
            <Header />

            <main>
                <SearchForm />
                <Routes>
                    <Route path="/" element={<CardLlist />} />

                    {!!detailsCard && (
                        <Route
                            path="/book/:id"
                            element={<CardDetails data={detailsCard} />}
                        />
                    )}

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
