import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../utils/firebase'

const App = () => {

  const googleSignIn = async () => {
    // Implement Google Sign-In logic here
    const dataResponse = await signInWithPopup(auth, googleProvider);
    console.log(dataResponse); 
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="w-50 h-24 bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={googleSignIn}>
        Continue with google
      </button>
    </div>
  )
}

export default App