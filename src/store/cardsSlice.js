import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

export const fetchBooks = createAsyncThunk(
    "cardList/fetchBooks",
    async function (
        { request, filtersUrl, pageUrl },
        { rejectWithValue, dispatch }
    ) {
        try {
            const data = await api.getData(request, filtersUrl, pageUrl);

            if (!data) {
                throw new Error("Server error");
            }
            return { data };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

const cardsSlice = createSlice({
    name: "cardList",
    initialState: {
        page: 0,
        status: null,
        searchValue: "",
        data: null,
        filters: {
            category: "all",
            sort: "relevance",
        },
        detailsCard: null,
        error: null,
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload.value;
        },
        resetData(state) {
            state.data = null;
        },
        setPage(state, action) {
            state.page = action.payload.page;
        },
        setFilters(state, action) {
            state.filters[action.payload.name] = action.payload.value;
        },
        setDetailsCard(state, action) {
            state.detailsCard = action.payload.book;
        },
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.status = "resolved";

            state.data
                ? (state.data = {
                      ...state.data,
                      items: [
                          ...state.data.items,
                          ...action.payload.data.items,
                      ],
                  })
                : (state.data = action.payload.data);
        },
        [fetchBooks.rejected]: setError,
    },
});
export const {
    setSearchValue,
    setDetailsCard,
    setData,
    resetData,
    setPage,
    setFilters,
} = cardsSlice.actions;
export default cardsSlice.reducer;
