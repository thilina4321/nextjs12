import { useEffect, useState } from "react";

const DummyHttp = (props) => {
  const [emp, setemp] = useState([]);

  const { employees } = props;

  useEffect(() => {
    setemp(employees);
  }, [employees]);

  if (emp.length === 0) {
    return <p>Loading .....</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        margin: "10px auto",
        height: "300px",
        boxShadow: "0 0 3px rgb(0,0,0)",
      }}
    >
      <img src={emp[0]["imageUrl"]} height={"100px"} width="100%" />
      <p> Name : {emp[0]["lastName"]} </p>
      <p> Age : {emp[0]["age"]} </p>
    </div>
  );
};

export default DummyHttp;

export const getStaticProps = async (context) => {
  const getEmp = await fetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );
  const getJsonEmp = await getEmp.json();

  return {
    props: {
      employees: getJsonEmp,
    },
  };
};
