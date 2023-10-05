import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";

const AllUsers = () => {
  const { allUsers } = useTypedSelector((store) => store.UserReducer);

  useEffect(() => {
    // Action GetAllUsers()
  }, []);

  return (
    <>
      <h1>All users</h1>
    </>
  );
};

export default AllUsers;
