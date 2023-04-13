import NavBarDetails from "../components/NavBar/NavBarDetails";
import ProductDetails from "../components/Texts/ProductDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductById, getStockAndPriceByCode } from "@/services/product.services";
import DetailButtons from "@/components/Buttons/detailButtons";

export default function ProductDetailPage() {
  
  const router = useRouter();
  const [data, setData] = useState();
  const [stockAndPriceData, setstockAndPriceData] = useState();
 const [selectedSku, setselectedSku] = useState()


  useEffect(() => {
    const querybrand = router.query.querybrand;
    if (querybrand) {
      const id = querybrand.split("-")[0]; //separate SKU
      getData(id);
      setInterval(handleInterval,5000)
    }
  }, [router.query]);

  useEffect(() => {
    if(selectedSku){
      getDataStockAndPrice(selectedSku)
    }
  }, [selectedSku])


  const handleInterval  = ()=>{
    if(selectedSku){
      getDataStockAndPrice(selectedSku);
    }
   
  }

  const getData = async (id) => {
    const { success, data } = await getProductById(id);
    if (success) {
      setData(data.value);
      setselectedSku(data.value.skus[0].code)
    } else {
      // alert("Error getting data");
    }
  };
  
  const getDataStockAndPrice = async (code) => {
    const { success, data } = await getStockAndPriceByCode(code);
    if (success) {
      setstockAndPriceData(data.value);
    } else {
      // alert("Error getting data");
    }
  };

  const handleSku = (value)=>{
    setselectedSku(value)
  }

  return (
    <div>
      {!data || !stockAndPriceData ? (
        <p>Loading ...</p>
      ) : (
        <>
          <NavBarDetails />
          <ProductDetails
            image={data.image}
            brand={data.brand}
            price={stockAndPriceData.price}
            stock={stockAndPriceData.stock}
            description={data.information}
            origin={data.origin}
            sizes={data.skus}
            selectedSku={selectedSku}
            handleSku={handleSku}
          />
          <DetailButtons />
        </>
      )}
    </div>
  );
}
