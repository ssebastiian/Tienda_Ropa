'use client'
import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link'
import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography,Link   } from '@mui/material'


interface Props {
    product: IProduct;
}
const ProductCard:FC <Props> = ({product}) => {

  const [isMovered, setIsMoverd] = useState(false);

  const productImage = useMemo(() => {
    return isMovered ? 
    `products/${product.images[1]}` :
    `products/${product.images[0]}`
  }, [isMovered,product.images])
  
  return (
    <Grid 
      item 
      xs={6} 
      sm={4}
      onMouseEnter = {() => setIsMoverd(true)}
      onMouseLeave = {() => setIsMoverd(false)}
    >
        <Card>
          <NextLink href ="/products" passHref prefetch={false}>
            <Link>
             <CardActionArea>
              <CardMedia component='img' className='fadeIn' image={productImage} alt={product.title}/>
            </CardActionArea>
            </Link>
          </NextLink>
        
        </Card>

        <Box sx={{ mt:1 }} className='fadeIn'>
          <Typography fontWeight={700}>{ product.title}</Typography>
          <Typography fontWeight={500}>{ `$${product.price}`}</Typography>
        </Box>
    </Grid>
  )
}

export default ProductCard
