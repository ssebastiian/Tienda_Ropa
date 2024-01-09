'use client'

import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

interface Props {
    images: string[],
}
  
const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundPosition:'center',
  alignItems: 'center',
  backgroundSize: 'contain',
  height: '700px'
}

export const ProductSliderShow:FC<Props> = ({ images }) => {
  return (
    <Slide
        easing='ease'
        indicators
    >
        {
            images.map( image => {
                const url = `/products/${ image }`
                return (
                    <div key={ image }>
                        <div style={{
                            ...divStyle,
                            backgroundImage: `url(${url})`,
                            backgroundSize:'cover'
                        }}>

                        </div>
                    </div>
                )
            })
        }
      
    </Slide>
  )
}
