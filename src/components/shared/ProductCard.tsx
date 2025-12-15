import Image from "next/image";
import Link from "next/link";

import { PRODUCT_CARD_SIZES } from "@/constants/constants";

type Props = {
  id: number;
  image: string;
  title: string;
  priority?: boolean;
};

export const ProductCard = ({ id, image, title, priority = false }: Props) => {
  return (
    <Link href={`/product/${id}`} target="_blank" className="flex flex-col items-center gap-5">
      <div className="relative aspect-3/4 w-full">
        <Image
          src={image}
          fill
          sizes={PRODUCT_CARD_SIZES}
          alt={title}
          priority={priority}
          className="object-cover"
        />
      </div>
      <p className="text-center text-sm">{title}</p>
    </Link>
  );
};
