import { createStyles, makeStyles } from '@mui/styles'

export const useHeaderStyles = makeStyles(() =>
  createStyles({
    headerLink: {
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '20px',
      cursor: 'pointer',
    },
  }),
)
