import NavBarDetails from "../components/NavBar/NavBarDetails";
import ProductDetails from "../components/Texts/ProductDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/product.services";
import DetailButtons from "@/components/Buttons/detailButtons";
export default function ProductDetailPage() {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    const querybrand = router.query.querybrand;
    if (querybrand) {
      const id = querybrand.split("-")[0]; //separate SKU
      getData(id);
    }
  }, [router.query]);

  const getData = async (id) => {
    const { success, data } = await getProductById(id);
    if (success) {
      setData(data.value);
    } else {
      // alert("Error getting data");
    }
  };
  console.log(data);

  return (
    <div>
      {!data ? (
        <p>Loading ...</p>
      ) : (
        <>
          <NavBarDetails />
          <ProductDetails
            image={data.image}
            brand={data.brand}
            price={data.price}
            stock={data.stock}
            description={data.information}
            origin={data.origin}
            sizes={data.skus.name}
          />
          <DetailButtons />
        </>
      )}
    </div>
  );
}
