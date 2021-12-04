import Specific from "./[id].";
import Link from "next/link";
import SpecificUser from "./[id].";
import { Fragment } from "react";

type User = {
  users: [];
};

const Users: React.FC<User> = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <Link href={`/users/${user["id"]}`}>
          <SpecificUser key={user["id"]} name={user["name"]} />
        </Link>
      ))}
    </div>
  );
};

export default Users;

export const getServerSideProps = (context) => {
  return {
    props: {
      users: [
        { id: "u1", name: "user 1" },
        { id: "u2", name: "user 2" },
      ],
    },
  };
};
