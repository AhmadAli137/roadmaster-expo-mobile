
import React from 'react'
import PropTypes from 'prop-types'
import { Alert, VStack, HStack, IconButton, CloseIcon, Box, Text, Collapse } from 'native-base'

export const ErrorMessage = ({ error }) => {
  
  if (!error) return null
  console.log("ErrorObject: " + error)
  console.log("ErrorCode: " + error.code)
  console.log("ErrorMessage: " + error.message)
  const [show, setShow] = React.useState(true);
  return (
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  {error.code}
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              {error.message}
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
}