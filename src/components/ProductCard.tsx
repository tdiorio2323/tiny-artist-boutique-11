import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-creative transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <p className="text-2xl font-bold text-primary">${price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="hero" className="w-full">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;