import LayoutHome from '@/components/layouts/LayoutHome'
import { Box, Typography } from '@mui/material'

const NotFoundCatchAll = () => {
  return (
    <LayoutHome title='Page Not fount' pageDescription='no hay nada que mostrar'>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100hv - 200px)' >
          <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
          <Typography marginLeft={2}>No se encontro ninguna pagina</Typography>
        </Box>
    </LayoutHome>
  )
}

export default NotFoundCatchAll
