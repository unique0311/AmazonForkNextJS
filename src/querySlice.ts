import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

export interface QueryState {
  queryState: string
}

const initialState: QueryState = {
  queryState: '',
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.queryState = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    },
  },
})

export const { setQuery } = querySlice.actions

export const selectQueryState = (state: AppState) => state.query.queryState

export default querySlice.reducer
