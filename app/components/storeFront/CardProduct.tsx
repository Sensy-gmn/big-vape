import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

export default function CardProduct({
  id,
  title,
  category,
  price,
  image,
}: CardProductProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <Image src={image} alt={title} width={200} height={200} />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <Badge>{category}</Badge>
          </CardDescription>
          <br />
          <CardDescription>{price} €</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/products/details/${id}`}>Aperçu</Link>
          </Button>
          <Button asChild className="w-auto">
            <Link href={`/cart/${id}`}>Ajouter au panier</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
