import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import butterflyShirt from "@/assets/product-butterfly-shirt.jpg";
import unicornDress from "@/assets/product-unicorn-dress.jpg";
import animalLeggings from "@/assets/product-animal-leggings.jpg";

const Shop = () => {
  const products = [
    {
      id: "1",
      name: "Butterfly Dreams Tee",
      price: 28,
      image: butterflyShirt,
      description: "Hand-painted butterflies and flowers dance across this magical tee",
    },
    {
      id: "2",
      name: "Unicorn Magic Dress",
      price: 45,
      image: unicornDress,
      description: "A whimsical dress featuring sparkly unicorns and rainbow stars",
    },
    {
      id: "3",
      name: "Animal Friends Leggings",
      price: 32,
      image: animalLeggings,
      description: "Colorful cartoon animals create fun patterns on cozy leggings",
    },
    {
      id: "4",
      name: "Rainbow Cat Hoodie",
      price: 42,
      image: butterflyShirt, // Using placeholder for now
      description: "A cozy hoodie with rainbow cats and puffy clouds",
    },
    {
      id: "5",
      name: "Flower Power Skirt",
      price: 35,
      image: unicornDress, // Using placeholder for now
      description: "Twirly skirt covered in hand-drawn daisies and sunflowers",
    },
    {
      id: "6",
      name: "Dragon Adventure Tee",
      price: 30,
      image: animalLeggings, // Using placeholder for now
      description: "Friendly dragons soar across this adventure-ready shirt",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Art Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover unique, hand-designed clothing pieces created with love and imagination
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 p-6 bg-muted/30 rounded-xl">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for magical creations..." 
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="tops">Tops & Tees</SelectItem>
              <SelectItem value="dresses">Dresses</SelectItem>
              <SelectItem value="bottoms">Bottoms</SelectItem>
              <SelectItem value="hoodies">Hoodies</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="secondary" size="lg">
            Load More Creations
          </Button>
        </div>

        {/* Custom Order CTA */}
        <div className="mt-20 p-8 bg-gradient-secondary rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Want Something Custom?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Our little artist loves creating unique pieces just for you! 
            Contact us to discuss a custom design.
          </p>
          <Button variant="hero" size="lg">
            Request Custom Design
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;