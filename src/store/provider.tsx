'use client'
import React, { ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import NextNProgress from 'nextjs-progressbar'

import { Zoom } from '@mui/material'

import { persistor, store } from './store'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider hideIconVariant TransitionComponent={Zoom}>
          <NextNProgress color="#d50000" height={2} showOnShallow={true} />
          {children}
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  )
}
