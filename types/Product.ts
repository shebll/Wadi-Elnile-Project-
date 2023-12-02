import { PortableTextBlock } from "sanity";

type ProductMachineType = {
  map(
    arg0: (Product: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  mainImage: string;
  secImages: Image[];
  url: string;
  content: PortableTextBlock;
  features: PortableTextBlock;
  description: string;
  category: string;
};
type Image = {
  asset: object[];
};
export default ProductMachineType;
