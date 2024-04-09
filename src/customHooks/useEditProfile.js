import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firestore, storage } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authUserSuccess } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const useEditProfile = () => {
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [editProfileLoading, setEditProfileLoading] = useState(false);
  const [editProfileError, setEditProfileError] = useState(null);

  const uploadProfileDetails = async (selectedFile) => {
    setEditProfileLoading(true);
    const storageRef = ref(storage, `profilePics/${authUser?.uid}`);
    const userDocRef = doc(firestore, "users", authUser?.uid);

    let updatedUrl = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        updatedUrl = await getDownloadURL(
          ref(storage, `profilePics/${authUser?.uid}`)
        );
      }

      const updatedUser = {
        ...authUser,
        photoURL: updatedUrl || authUser?.photoURL,
      };

      await updateDoc(userDocRef, updatedUser);
      dispatch(authUserSuccess(updatedUser));
      toast("Profile updated successfully");
      setEditProfileLoading(false);
    } catch (error) {
      setEditProfileError(error.message);
      setEditProfileLoading(false);
      toast(error.message);
    }
  };

  return { editProfileLoading, uploadProfileDetails, editProfileError };
};

export default useEditProfile;
