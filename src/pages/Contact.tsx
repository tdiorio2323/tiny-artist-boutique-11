import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Palette, Heart, Star } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Magical Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a custom design in mind? Questions about our process? 
            We'd love to hear from you and bring your artistic vision to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-creative">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Palette className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">What can we help you with?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom Design Request</SelectItem>
                      <SelectItem value="order">Order Question</SelectItem>
                      <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your idea, question, or how we can help you..."
                    className="min-h-32"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Heart className="h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Links */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@littleartist.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Studio Location</p>
                    <p className="text-sm text-muted-foreground">
                      123 Creative Street<br />
                      Art District, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Within 24 hours<br />
                      (Usually much faster!)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Order Info */}
            <Card className="bg-gradient-secondary text-primary-foreground shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Custom Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-primary-foreground/90">
                  Our little artist loves creating one-of-a-kind pieces! Custom orders typically include:
                </p>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Personalized artwork design</li>
                  <li>• Choice of clothing item & colors</li>
                  <li>• Size customization</li>
                  <li>• 2-3 week creation time</li>
                </ul>
                <Button variant="hero" size="sm" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-sm">How long does shipping take?</p>
                  <p className="text-sm text-muted-foreground">3-5 business days within the US</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Can I request specific colors?</p>
                  <p className="text-sm text-muted-foreground">Absolutely! Just mention it in your message</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Do you offer wholesale?</p>
                  <p className="text-sm text-muted-foreground">Yes! Contact us for bulk pricing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-8">What Parents Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "My daughter absolutely loves her butterfly dress! The quality is amazing and you can tell it's made with love."
              </p>
              <p className="font-medium">- Sarah M.</p>
            </Card>
            <Card className="p-6 shadow-soft">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Such a unique concept! My son's custom dinosaur shirt is his absolute favorite piece of clothing."
              </p>
              <p className="font-medium">- Mike D.</p>
            </Card>
            <Card className="p-6 shadow-soft">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "The communication was excellent and the final product exceeded our expectations. Highly recommend!"
              </p>
              <p className="font-medium">- Jessica L.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;