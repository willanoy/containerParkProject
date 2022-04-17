import { Flex } from '@chakra-ui/core'
import { CircularProgress } from '@material-ui/core'
import React from 'react'

export function Loader() {
  return (
    <Flex align="center" justify="center"> <CircularProgress color="primary"  size={30}/> </Flex>
  )
}

export default Loader