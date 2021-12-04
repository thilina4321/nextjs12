const SpecificUser = (props) => {
  console.log(props.username);
  
  return <h1>{props.username}</h1>;
};

export default SpecificUser;

export const getServerSideProps = (context) => {
  console.log(context, "context");

  return {
    props: {
      username:'thilina'
    },
  };
};
