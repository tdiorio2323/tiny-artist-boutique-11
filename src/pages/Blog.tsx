import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-art-studio.jpg";
import butterflyShirt from "@/assets/product-butterfly-shirt.jpg";
import unicornDress from "@/assets/product-unicorn-dress.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "How a 6-Year-Old Started Her Own Clothing Line",
      excerpt: "The inspiring story of how our little designer discovered her passion for creating wearable art and turned it into a business.",
      image: heroImage,
      date: "March 15, 2024",
      author: "Mom & Business Partner",
      tags: ["Story", "Inspiration"],
      featured: true,
    },
    {
      id: "2", 
      title: "The Magic Behind the Butterfly Collection",
      excerpt: "Take a peek into the creative process behind our most popular butterfly-themed designs.",
      image: butterflyShirt,
      date: "March 10, 2024",
      author: "Little Artist",
      tags: ["Design Process", "Butterflies"],
      featured: false,
    },
    {
      id: "3",
      title: "Why Hand-Drawn Art Makes Every Piece Special",
      excerpt: "Discover what makes our clothing unique and why each piece tells its own story.",
      image: unicornDress,
      date: "March 5, 2024", 
      author: "Design Team",
      tags: ["Craftsmanship", "Art"],
      featured: false,
    },
    {
      id: "4",
      title: "Customer Spotlight: Wearing Art with Pride",
      excerpt: "See how our young customers style their favorite pieces and share their own creative stories.",
      image: heroImage,
      date: "February 28, 2024",
      author: "Customer Stories",
      tags: ["Customers", "Style"],
      featured: false,
    },
    {
      id: "5",
      title: "Behind the Scenes: A Day in Our Art Studio",
      excerpt: "Follow along as we create new designs, from initial sketches to finished clothing pieces.",
      image: butterflyShirt,
      date: "February 20, 2024", 
      author: "Studio Team",
      tags: ["Behind the Scenes", "Process"],
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Creative Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stories, inspiration, and behind-the-scenes looks at our artistic process
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-16 overflow-hidden hover:shadow-creative transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">{featuredPost.title}</h2>
                  <p className="text-muted-foreground text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <Button variant="hero">
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-creative transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 p-8 bg-gradient-hero rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to get the latest stories, new product launches, 
            and behind-the-scenes content from our little artist's studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;