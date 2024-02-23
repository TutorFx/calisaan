import products from "../../data/products";

export default defineEventHandler(async (event) => {
  const allProducts = products.map(({ id, name, slug, imageSrc, imageAlt, price }) => ({
    id,
    name,
    slug,
    imageSrc[0],
    imageAlt,
    price,
  }));
  
  return allProducts;
})
