import BasicLayout from '../components/BasicLayout'
import ProductList from '../components/ProductList'

export const getStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()

  return {
    props: { products }
  }
}

export default function Home({ products }) {
  return (
    <BasicLayout>
      <ProductList products={products} />
    </BasicLayout>
  );
}
