import { VariantType } from 'notistack'

export interface ISnackbar {
  id: string | number
  kind: VariantType
  message: string
  isDismissed?: boolean
}

export interface IThemeState {
  theme: string
}

export interface IPostsState {
  postId: string
  limit: number
}
