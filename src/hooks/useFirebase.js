import { useState,useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const auth = getAuth();
    
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
            })
    }
    const logOut=()=>{
        signOut(auth).then(() => {
            setuser({})
          })
          
    }
      
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } 
          });
        
    }, [])
    return {
        user,
        googleSignIn,
        logOut

    }

}
export default useFirebase