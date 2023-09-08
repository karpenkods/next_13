'use client'
import React, { FC, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import NextNProgress from 'nextjs-progressbar'

import { Zoom } from '@mui/material'

import { persistor, store } from '@/store'
import { ProviderTheme } from './providerTheme'

interface ProviderStoreProps {
  children: ReactNode
}

export const ProviderStore: FC<ProviderStoreProps> = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProviderTheme>
            <SnackbarProvider hideIconVariant TransitionComponent={Zoom}>
              <NextNProgress color="#d50000" height={2} showOnShallow={true} />
              {children}
            </SnackbarProvider>
          </ProviderTheme>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}
