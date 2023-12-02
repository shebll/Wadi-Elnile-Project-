import { getProducts } from "@/sanity/sanity-utils";
import ProductMachineType from "@/types/Product";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const products: ProductMachineType[] = await getProducts();
    return NextResponse.json({ message: "successful", products });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
