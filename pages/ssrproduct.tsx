//Server-Side Rendering (SSR)
//Slower (renders on each request)

import MyButton from "@/components/MyButton";
import { GetServerSideProps } from "next";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface SSRProductProps {
  products: Product[];
}

const SSRProduct: React.FC<SSRProductProps> = ({ products }) => {
  return (
    <div>
      <h1>Server-Side Rendered (SSR) InstaShop-Dumy Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-4 mb-4 rounded shadow mt-5">
            <p>
              <img
                src={product.image}
                //quality={100}
                width={100}
                height={100}
                alt="Product Image"
              />
            </p>
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-[#8A226F] font-semibold py-4">
              Price: ${product.price}
            </p>

            <MyButton>Add to Cart</MyButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Get the API URL from environment variables
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com"; // Use fallback URL if not defined

    const res = await fetch(`${apiUrl}/products`);
    const products: Product[] = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
};

export default SSRProduct;
