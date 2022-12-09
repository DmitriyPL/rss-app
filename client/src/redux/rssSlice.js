import { createSlice } from '@reduxjs/toolkit'
import { 
  axiosGetAllRss,
  axiosAddRss, 
  axiosDelRss, 
  axiosGetDocs, 
  axiosUdateRss,
  axiosInitUser } from "./services/rss-services.js"

const rssSlice = createSlice({
  
  name: 'rss',
  
  initialState: {
    user: null,
    rssLinks: [],
    currentLink: "",
    docList:[],
    isLoading: false,
    docsIsLoading:false,
    listLoadingError: null,
    linkLoadingError: null,
    docListLoadingError:null 
  },

  reducers: {
    loadAllRss(state, action) {
      state.rssLinks = action.payload;
    },
    addRss(state, action) {
      state.rssLinks.push(action.payload);
    },
    delRss(state, action) {
      state.rssLinks = state.rssLinks.filter(el => el.id !== action.payload);
    },
    setCurrentLink(state, action) {
      state.currentLink = action.payload;
    },
    setDocsList(state, action) {
      state.docList = action.payload;
    }
  },

  extraReducers: (builder) => {

    builder.addCase(axiosGetAllRss.pending, (state, action) => {
      state.isLoading = true;
      state.listLoadingError = null;
    })
    builder.addCase(axiosGetAllRss.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rssLinks = action.payload;
    })
    builder.addCase(axiosGetAllRss.rejected, (state, action) => {
      state.isLoading = false;
      state.listLoadingError = action.payload;
    })
    
    builder.addCase(axiosAddRss.pending, (state, action) => {
      state.isLoading = true;
      state.linkLoadingError = null;
    })
    builder.addCase(axiosAddRss.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rssLinks.push(action.payload);
    })
    builder.addCase(axiosAddRss.rejected, (state, action) => {
      state.isLoading = false;
      state.linkLoadingError = action.payload;
    })

    builder.addCase(axiosDelRss.pending, (state, action) => {
      state.isLoading = true;
      state.linkLoadingError = null;
    })
    builder.addCase(axiosDelRss.fulfilled, (state, action) => {
      state.isLoading = false;
    })
    builder.addCase(axiosDelRss.rejected, (state, action) => {
      state.isLoading = false;
      state.linkLoadingError = action.payload;
    })   

    builder.addCase(axiosGetDocs.pending, (state, action) => {
      state.docsIsLoading = true;
      state.docListLoadingError = null;
    })
    builder.addCase(axiosGetDocs.fulfilled, (state, action) => {
      state.docsIsLoading = false;
    })
    builder.addCase(axiosGetDocs.rejected, (state, action) => {
      state.docsIsLoading = false;
      state.docListLoadingError = action.payload;
    })

    builder.addCase(axiosUdateRss.pending, (state, action) => {
      state.docsIsLoading = true;
      state.docListLoadingError = null;
    })
    builder.addCase(axiosUdateRss.fulfilled, (state, action) => {
      state.docsIsLoading = false;
    })
    builder.addCase(axiosUdateRss.rejected, (state, action) => {
      state.docsIsLoading = false;
      state.docListLoadingError = action.payload;
    })

    builder.addCase(axiosInitUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })  
  },

})

export const { loadAllRss, addRss, delRss, setCurrentLink, setDocsList } = rssSlice.actions;
export const rssReducer = rssSlice.reducer;