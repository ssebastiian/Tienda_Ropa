'use client'

import { ISize } from '@/interfaces';
import { Box, Button } from '@mui/material';
import React, { FC } from 'react'

interface Props {
    selectSize: ISize;
    sizes: ISize[];
}

export const SizeSelector:FC<Props> = ({ selectSize, sizes}) => {
  return (
   <Box>
        {
            sizes.map( size => (
                <Button
                    key={ size }
                    size='small'
                    color={selectSize === size ? 'primary' : 'info'}
                >
                    { size }
                </Button>
            ))
        }
   </Box>
  )
}
