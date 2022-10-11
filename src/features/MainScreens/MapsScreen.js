import React, { useState } from 'react';
import { VStack, Center, Heading, HStack, Text} from 'native-base'
import { useUserContext } from '../../context/UserContext'
import { Switch } from 'react-native';

export const MapsScreen = () => {
  const { user } = useUserContext()

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (!isEnabled) {
      alert("Your are being tracked")
    } else{
      alert("Your are no longer being tracked")
    }
  }

  return (
        <VStack space={4} alignItems="center">
          <Heading>Hello, {user.email}.</Heading>
          <HStack alignItems="center">
            <Text>Tracking: </Text>
            <Switch 
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#3385ff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </HStack>
        </VStack>


  )
}

