import { ThunkAction, configureStore, Action } from '@reduxjs/toolkit'
import { querySlice } from './querySlice'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () =>
  configureStore({
    reducer: {
      [querySlice.name]: querySlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
