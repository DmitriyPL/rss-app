import { configureStore } from "@reduxjs/toolkit";

import { rssReducer } from "./rssSlice.js";

export const store = configureStore({
    reducer: {
        rss: rssReducer
    }
});