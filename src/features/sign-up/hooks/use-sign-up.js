import { useState } from 'react'
import { signUp } from '../../../api/user'

export const useSignUp = () => {
    console.log("useSignUp")
    const [state, setState] = useState({
      isLoading: false,
      error: null,
    })
    const handleSignUp = async (values) => {
      setState({ isLoading: true, error: null })
      try {
        console.log("signUp()")
        await signUp(values)
        setState({ isLoading: false, error: null })
      } catch (error) {
        console.log(error)
        setState({ isLoading: false, error })
      }
    }
    return [handleSignUp, { ...state }]
  }