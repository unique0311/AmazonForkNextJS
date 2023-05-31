import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

export interface QueryState {
  queryState: string
  minpriceState: number
  maxpriceState: number
  mostRecentState: string
  priceHLState: string
  priceLHState: string
}

const initialState: QueryState = {
  queryState: '',
  minpriceState: 0,
  maxpriceState: 999999,
  mostRecentState: '',
  priceHLState: '',
  priceLHState: '',
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.queryState = action.payload
    },
    setMinPrice(state, action) {
      state.minpriceState = action.payload
    },
    setMaxPrice(state, action) {
      state.maxpriceState = action.payload
    },
    setMostRecent(state, action) {
      state.mostRecentState = action.payload
    },
    setPriceHL(state, action) {
      state.priceHLState = action.payload
    },
    setPriceLH(state, action) {
      state.priceLHState = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.query,
      }
    },
  },
})

export const { setQuery, setMinPrice, setMaxPrice, setMostRecent, setPriceHL, setPriceLH } = querySlice.actions

export const selectQueryState = (state: AppState) => state.query.queryState
export const selectMinPriceState = (state: AppState) => state.query.minpriceState
export const selectMaxPriceState = (state: AppState) => state.query.maxpriceState
export const selectMostRecentState = (state: AppState) => state.query.mostRecentState
export const selectPriceHLState = (state: AppState) => state.query.priceHLState
export const selectPriceLHState = (state: AppState) => state.query.priceLHState

export default querySlice.reducer
