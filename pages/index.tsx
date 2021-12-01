type Product = {
  id: string;
  name: string;
};

const Home: React.FC<{ products: Product[] }> = (props) => {
  const { products } = props;
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
  return {
    props: {
      products: [{ id: "1", name: "Product 1" }],
    },
    revalidation:20,
    reedirect:{
      destination:''
    }
  };
};
