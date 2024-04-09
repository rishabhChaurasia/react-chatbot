import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { firestore, storage } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { authUserSuccess } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const useRemovePic = () => {
  const [removePicLoading, setRemovePicLoading] = useState(false);
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const removePic = async () => {
    setRemovePicLoading(true);
    const storageRef = ref(storage, `profilePics/${authUser?.uid}`);
    const userDocRef = doc(firestore, "users", authUser?.uid);
    try {
      await deleteObject(storageRef);

      const updatedUser = { ...authUser, photoURL: "" };
      await updateDoc(userDocRef, updatedUser);
      dispatch(authUserSuccess(updatedUser));
      toast("Profile pic removed successfully");
      setRemovePicLoading(false);
    } catch (error) {
      console.log(error.message);
      setRemovePicLoading(false);
      toast(error.message);
    }
  };

  return { removePicLoading, removePic };
};

export default useRemovePic;
