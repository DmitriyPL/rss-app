import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from "../../http/index.js";
import { delRss, setDocsList } from '../rssSlice.js';


export const axiosGetAllRss = createAsyncThunk(

    'rss/axiosGetAllRss',

    async function( _ , { rejectWithValue }) {
      try {
  
        const response = await $api.get('/rsslinks');
        return response.data;   
  
      } catch (e) {
        return rejectWithValue(e.message);
      }
  
    }
)

export const axiosAddRss = createAsyncThunk(

    'rss/axiosAddRss',

    async function( { url, title } , { rejectWithValue }) {
      try {
  
        const response = await $api.post('/addrss', { url, title });
        return response.data;   
  
      } catch (e) {
        return rejectWithValue(e.message);
      }
  
    }
)

export const axiosDelRss = createAsyncThunk(

    'rss/axiosDelRss',

    async function( id , { rejectWithValue, dispatch }) {
      try {
  
        const response = await $api.post('/deleteRss', { id });
        const linkId = response.data;

        if (response.statusText === 'OK'){
            dispatch(delRss(linkId));
            dispatch( setDocsList([]) )
        }

      } catch (e) {
        return rejectWithValue(e.message);
      }
  
    }
)

export const axiosGetDocs = createAsyncThunk(

  'rss/axiosGetDocs',

  async function( id , { rejectWithValue, dispatch }) {
    try {

      const response = await $api.post('/getdocsbyid', { id });
      const docs = response.data;

      if (response.statusText === 'OK'){
          dispatch(setDocsList(docs));
      }

    } catch (e) {
      return rejectWithValue(e.message);
    }

  }
)

export const axiosUdateRss = createAsyncThunk(

  'rss/axiosUdateRss',

  async function( id , { rejectWithValue, dispatch }) {
    try {

      await $api.post('/updaterss', { id });
      const response = await $api.post('/getdocsbyid', { id });
      const docs = response.data;

      if (response.statusText === 'OK'){
          dispatch(setDocsList(docs));
      }

    } catch (e) {
      return rejectWithValue(e.message);
    }

  }
)

export const axiosInitUser = createAsyncThunk(

  'rss/axiosInitUser',

  async function( _ , { rejectWithValue, dispatch }) {
    try {

      await $api.get('/initUser');

    } catch (e) {
      return rejectWithValue(e.message);
    }

  }
)