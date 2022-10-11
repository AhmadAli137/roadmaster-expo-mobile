import React from 'react'
import { Center, Heading, View } from 'native-base'
import { getOpenJobRequests } from '../../api/hypertrack'

export const OrdersScreen = () => {
  
  getOpenJobRequests()

  return (
    <View>
        <Heading>Orders</Heading>
    </View>
  )
}