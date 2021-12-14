import { FC, useEffect, useState } from "react";
import { Products } from "../../models/restaurants/types";
import { useDispatch } from "react-redux";
import "./styles.css";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { fetchProducts } from "../../services/products/services";

const ProductsView: FC = () => {
  const [products, setProducts] = useState<Products[] | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(pushLoading());
        const receivedProducts = await fetchProducts();
        setProducts(receivedProducts);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        dispatch(popLoading());
      }
    };
    if (products === null) {
      getProducts();
    }
  }, [dispatch, products]);

  return (
    <div className="products-container">
      <h2 className="products-toplabel">Our Burgers</h2>
      <div className="products-listaItems">
          {products?.map((products) => (
            <div className="products-listofProducts">
              <p className="products-listofProductsP">
                <img className="products-image" src={products.image_url} />
                <br />
                {products.name}
                <br />
                 {products.description}
                 <br />
                 ${products.price}
                <br />
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProductsView;
