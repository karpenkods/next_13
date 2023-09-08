'use client'
import React, { useRef, useEffect, FC } from 'react'
import { useSnackbar } from 'notistack'
import type { SnackbarKey } from 'notistack'

import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { useAppDispatch, useAppSelector } from '@/common'
import { removeSnackbar } from '@/store'

export const Snackbar: FC = () => {
  const displayedNotifications = useRef<SnackbarKey[]>([])
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const dispatch = useAppDispatch()
  const notifications = useAppSelector((store) => store.snackbar)

  const storeDisplayed = (id: SnackbarKey) => {
    displayedNotifications.current = [...displayedNotifications.current, id]
  }

  const removeDisplayed = (id: SnackbarKey) => {
    displayedNotifications.current = [
      ...displayedNotifications.current.filter((key) => id !== key)
    ]
  }

  useEffect(() => {
    notifications.forEach(({ id, message, kind, isDismissed = false }) => {
      if (isDismissed) {
        closeSnackbar(id)
        return
      }

      if (displayedNotifications.current.includes(id)) return

      enqueueSnackbar(message, {
        key: id,
        variant: kind,
        onExited: (_, myKey: SnackbarKey) => {
          dispatch(removeSnackbar(myKey))
          removeDisplayed(myKey)
        },
        style: { borderRadius: '5px' },
        action: (key) => (
          <IconButton
            onClick={() => {
              closeSnackbar(key)
            }}
          >
            <CloseIcon sx={{ color: '#fff' }} />
          </IconButton>
        )
      })

      storeDisplayed(id)
    })
  }, [closeSnackbar, dispatch, enqueueSnackbar, notifications])

  return null
}
