import "./SearchForm.css";

import InputField from "../InputField/InputField";
import SelectForm from "../SelectForm/SelectForm";

export default function SearchForm({
    filters,
    setFilters,
    onSubmitForm,
    value,
    onChange,
}) {
    const onSelectFilters = (e) => {
        console.log(e.target.name);
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };
    return (
        <section className="search-form">
            <InputField
                value={value}
                onChange={onChange}
                onSubmitForm={onSubmitForm}
            />
            <div className="search-form__filter-area">
                <SelectForm
                    onChange={onSelectFilters}
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
                    onChange={onSelectFilters}
                    title={"Sorting by"}
                    options={["relevance", "newest"]}
                ></SelectForm>
            </div>
        </section>
    );
}
