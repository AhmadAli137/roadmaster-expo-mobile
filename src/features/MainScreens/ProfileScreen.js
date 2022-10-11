import React from 'react'
import { Center, Heading, View, VStack, Button} from 'native-base'
import { useUserContext } from '../../context/UserContext'
import { useSignOut } from '../../hooks/use-sign-out'
import PropTypes from 'prop-types'

export const ProfileScreen = ({navigation}) => {
  const { user } = useUserContext()
  const [signOut, { isLoading }] = useSignOut()

  const handlePressOnUpdatePassword = () => {
    navigation.navigate('Reauthenticate')
  }

  return (
      <Center flex={1}>
        <VStack space={4} alignItems="center" w="90%">
          <Heading>User: {user.email}.</Heading>
          <Button onPress={handlePressOnUpdatePassword}>Update password</Button>
          <Button onPress={signOut} isLoading={isLoading}>
            Sign out
          </Button>
        </VStack>
      </Center>
  )
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}