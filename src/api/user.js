import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, EmailAuthProvider, sendPasswordResetEmail, sendEmailVerification, reload, reauthenticateWithCredential, updatePassword} from "firebase/auth";
import { firebaseApp } from "./index";

const auth = getAuth(firebaseApp)
console.log(auth)

export const getUser = () => auth.currentUser

// Notice Firebase automatically signsr user in when their account is created
export const signUp = async ({ email = '', password = '' }) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Sign In Successful: " + user)
        sendVerification()
    })
  }

export const signIn = ({ email = '', password = '' }) =>
  signInWithEmailAndPassword(auth, email, password)

export const onAuthStateChanged = (args) =>
    auth.onAuthStateChanged(args)

export const sendVerification = () => sendEmailVerification(getUser())

export const signUserOut = () => signOut(auth)

export const reloadUser = () => reload(getUser())

export const reauthenticate = ({ email = '', password = '' }) =>
  reauthenticateWithCredential(getUser(),
    EmailAuthProvider.credential(email, password)
  )

export const updateUserPassword = ({ password = '' }) =>
  updatePassword(getUser(), password)

export const sendPasswordReset = ({ email = '' }) =>
  sendPasswordResetEmail(auth, email)