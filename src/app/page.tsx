import LayoutHome from "@/components/layouts/LayoutHome";
import { Typography } from "@mui/material";
import { initialData } from "@/database/products";
import ProductList from "@/components/products/ProductList";

export default function Home() {
  return (
    <LayoutHome  title={"Tienda Ropa"} pageDescription={"la mejor ropa del mundo"}>
      <Typography variant="h1" component={'h1'}>Tienda</Typography>
    
    <ProductList products={initialData.products as any}/>
    </LayoutHome>
  )
}
