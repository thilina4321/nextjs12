import React from "react";
import path from 'path'
import fs from 'fs/promises'

type Product = {
  id: string;
  name: string;
};

const Home = (props) => {

  const products = props.products || [];
  return (
    <div>
      Home
      {products.map((product) => (
        <li key={product.id}> {product.name} </li>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {

  const dataPath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(dataPath) as any
  const data = JSON.parse(jsonData)
  

  return {
    props: data,
    revalidate:20
  };
};
