import Link from "next/link";

type User = {
  users: [];
};

const Users: React.FC<User> = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <Link key={user["id"]} href={`/users/${user["id"]}`}>
            <div> {user["name"]} </div>
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
