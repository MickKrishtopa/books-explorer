import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import CardLlist from "../CardList/CardList";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className='app'>
            <Header />
            <SearchForm />
            <CardLlist />
            <Footer />
        </div>
    );
}

export default App;
