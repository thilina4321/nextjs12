import { useRouter } from "next/router";

const Me = () => {
  const router = useRouter();
  const proNavigation = () => {
    router.push("game");
  };
  return (
    <div>
      This is me
      <button onClick={proNavigation}> CLick This </button>
    </div>
  );
};

export default Me;
