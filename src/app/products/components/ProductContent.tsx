'use client'
import React from 'react'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { initialData } from '@/database/products'
import LayoutHome from '@/components/layouts/LayoutHome';
import { ProductSliderShow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui';

const product = initialData.products[0];

export const ProductContent = () => {
  return (
    <LayoutHome title={product.title} pageDescription={product.description}>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSliderShow images={ product.images } />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='h1' component='h1'>${product.price}</Typography>

            <Box my={2}>
              <Typography variant='subtitle2'>Candida</Typography>
              <ItemCounter/>
              <SizeSelector selectSize={product.sizes[0]} sizes={product.sizes}/>
            </Box>

            <Button color="secondary">Agregar al carrito</Button>

            {/* <Chip label="No hay disponibles" color='error'  variant='outlined'/> */}

            <Box mt={3}>
              <Typography  variant='subtitle2'>Descripcion</Typography>
              <Typography  variant='body2'>{product.description}</Typography>
            </Box>
          </Box>

        </Grid>
        
      </Grid>

    </LayoutHome>
  )
}
