import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signOutUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
} from "../redux/user/userSlice";
import PageNextIcon from "@rsuite/icons/PageNext";
import { useToast } from "@chakra-ui/react";
import { IconButton } from "rsuite";

const Profile = () => {
  const toast = useToast();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:4000/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      toast({
        title: "Log out.",
        description: "you are logged out",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `http://localhost:4000/api/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      toast({
        title: "Account deleted.",
        description: "Sorry to see you go😣",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 profile-txt">PROFILE</h1>
      <div className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser?.avatar}
          alt="profile"
        />
        <h1 className="text-2xl font-semibold text-center username-txt">@{currentUser?.username}</h1>
        <ul className="list-none p-0 m-0 flex flex-col gap-4">
          <li className="menu-item flex justify-between">
            My Classes
            <IconButton
              className="profileNextBtn"
              icon={<PageNextIcon />}
              // onClick={}
            />
          </li>
          <li className="menu-item flex justify-between">
            My Posts
            <IconButton
              className="profileNextBtn"
              icon={<PageNextIcon />}
              // onClick={}
            />
          </li>
          <li className="menu-item flex justify-between">
            My collections
            <IconButton
              className="profileNextBtn"
              icon={<PageNextIcon />}
              // onClick={}
            />
          </li>
          <li className="menu-item flex justify-between">
            Create Class
            <IconButton
              className="profileNextBtn"
              icon={<PageNextIcon />}
              // onClick={}
            />
          </li>
          <li className="menu-item flex justify-between">
            Edit Profile
            <IconButton
              className="profileNextBtn"
              icon={<PageNextIcon />}
              // onClick={}
            />
          </li>
        </ul>
      </div>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer font-semibold"
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer font-semibold">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
