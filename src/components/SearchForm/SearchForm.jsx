import "./SearchForm.css";

import InputField from "../InputField/InputField";
import SelectForm from "../SelectForm/SelectForm";

export default function SearchForm() {
    return (
        <section className="search-form">
            <InputField />
            <div className="search-form__filter-area">
                <SelectForm
                    title={"Categoris"}
                    name="category"
                    options={[
                        "all",
                        "art",
                        "biography",
                        "computers",
                        "history",
                        "medical",
                        "poetry",
                    ]}
                ></SelectForm>
                <SelectForm
                    name="sort"
                    title={"Sorting by"}
                    options={["relevance", "newest"]}
                ></SelectForm>
            </div>
        </section>
    );
}
