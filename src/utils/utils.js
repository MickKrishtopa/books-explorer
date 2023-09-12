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

export { checkFilters };
