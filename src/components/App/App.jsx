import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import CardLlist from "../CardList/CardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import api from "../../utils/api";
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [cardList, setCardList] = useState(null);
    const [filters, setFilters] = useState({
        category: "all",
        sort: "relevance",
    });

    const checkFilters = (filters) => {
        let filtersUrl = "";
        if (filters.category !== "all") {
            filtersUrl += `subject:${filters.category}`;
        }
        if (filters.sort !== "relevance") {
            filtersUrl += `&orderBy=${filters.sort}`;
        }

        return filtersUrl;
    };

    const onAddMoreBtnClick = async () => {
        const filtersUrl = checkFilters(filters);
        const pageUrl = `&startIndex=${30 * page}`;
        setIsLoading(true);
        try {
            const additionData = await api.getData(
                searchValue,
                filtersUrl,
                pageUrl
            );

            setCardList([...cardList, ...additionData.items]);
            setPage(page + 1);
            // console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitForm = async (request) => {
        setPage(1);
        const filtersUrl = checkFilters(filters);
        setIsLoading(true);
        try {
            const data = await api.getData(request, filtersUrl);

            setData(data);
            setCardList(data.items);

            // console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app">
            <Header />
            <SearchForm
                filters={filters}
                setFilters={setFilters}
                onSubmitForm={onSubmitForm}
                onChange={setSearchValue}
                value={searchValue}
            />

            <CardLlist
                isLoading={isLoading}
                data={data}
                cardList={cardList}
                onAddMoreBtnClick={onAddMoreBtnClick}
            />

            <Footer />
        </div>
    );
}

export default App;
