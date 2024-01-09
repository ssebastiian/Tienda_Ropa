import React from 'react'
import { Metadata } from 'next';
import { CartContent } from './components/CartContent';

export const metadata: Metadata = {
  title: 'Tienda Ropa - Carrito',
  description: 'Tienda Ropa - Carrito',
};

export default function Products () {
  return (
    <CartContent/>
  )
}