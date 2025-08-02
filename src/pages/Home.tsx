import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Palette, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-art-studio.jpg";
import butterflyShirt from "@/assets/product-butterfly-shirt.jpg";
import unicornDress from "@/assets/product-unicorn-dress.jpg";
import animalLeggings from "@/assets/product-animal-leggings.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Butterfly Dreams Tee",
      image: butterflyShirt,
      price: 28,
    },
    {
      id: "2", 
      name: "Unicorn Magic Dress",
      image: unicornDress,
      price: 45,
    },
    {
      id: "3",
      name: "Animal Friends Leggings", 
      image: animalLeggings,
      price: 32,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-accent animate-bounce-gentle" />
                  <span>Custom Art by a 6-Year-Old Designer</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Where Art Meets
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Fashion
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every piece is hand-designed by our little artist, turning childhood imagination 
                  into wearable masterpieces that celebrate creativity and joy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/shop">
                    <Palette className="h-5 w-5" />
                    Shop Collection
                  </Link>
                </Button>
                <Button asChild variant="creative" size="lg">
                  <Link to="/blog">
                    <Heart className="h-5 w-5" />
                    Our Story
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Young artist's creative studio"
                className="rounded-2xl shadow-creative w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-full p-6 shadow-soft animate-bounce-gentle">
                <Star className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Creations</h2>
            <p className="text-xl text-muted-foreground">
              Discover our most loved pieces, each one a unique work of art
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-creative transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="secondary" size="lg">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Meet Our Little Designer</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At just 6 years old, our founder has already discovered her passion for creating beautiful, 
            unique clothing through her artwork. Each design starts with her imagination and colored pencils, 
            then transforms into wearable art that brings joy to children everywhere.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hand-Drawn Art</h3>
              <p className="text-muted-foreground">Every design begins with original artwork</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-muted-foreground">Each piece is carefully crafted with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique & Special</h3>
              <p className="text-muted-foreground">No two pieces are exactly alike</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;