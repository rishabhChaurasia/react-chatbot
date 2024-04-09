import { useDispatch } from "react-redux";
import {
  authUserError,
  authUserStart,
  authUserSuccess,
} from "../redux/slices/authSlice";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);

  const handleGoogleAuth = async () => {
    dispatch(authUserStart());

    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        dispatch(authUserError(error.message));
        toast(error.message);
        return;
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userDoc = userSnap.data();
        dispatch(authUserSuccess(userDoc));
        toast("Sign in successfully!");
      } else {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          displayName: newUser.user.displayName,
          photoURL: newUser.user.photoURL,
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        dispatch(authUserSuccess(userDoc));
        toast("Sign up successfully!");
      }
    } catch (error) {
      dispatch(authUserError(error.message));
      toast(error.message);
    }
  };

  return { handleGoogleAuth };
};

export default useGoogleAuth;
