import React from 'react'
import { ProductContent } from './components/ProductContent'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tienda Ropa - Producto',
  description: 'Tienda Ropa - Producto',
};

export default function Products () {
  return (
    <ProductContent/>
  )
}

