"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Music, ShoppingBag, TrendingUp, Globe, Star, Ticket } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Merchandise", id: "merchandise" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Kaleo Concert"
          button={{
            text: "Get Tickets",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Kaleo Live in Concert"
          description="Experience the raw power and emotion of Iceland's finest rock export. Join us for an unforgettable night of music."
          tag="Live Performance"
          tagIcon={Music}
          buttons={[
            { text: "Get Tickets", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Kaleo performing live on stage with dramatic lighting"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="From the volcanic landscapes of Iceland comes Kaleo, a band that has captivated audiences worldwide with their powerful blend of rock, blues, and folk. Known for their raw energy and emotional depth, they create unforgettable live experiences."
          buttons={[
            { text: "View Schedule", href: "contact" },
            { text: "Band Story", href: "https://kaleomusic.com" }
          ]}
        />
      </div>

      <div id="merchandise" data-section="merchandise">
        <ProductCardTwo
          title="Official Merchandise"
          description="Take home a piece of the concert experience with our exclusive Kaleo merchandise collection"
          tag="Limited Edition"
          tagIcon={ShoppingBag}
          products={[
            {
              id: "1",
              brand: "Kaleo Official",
              name: "Concert Tour T-Shirt",
              price: "$35.00",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Black Kaleo concert t-shirt with tour dates"
            },
            {
              id: "2",
              brand: "Kaleo Official",
              name: "Limited Edition Poster",
              price: "$25.00",
              rating: 5,
              reviewCount: "856",
              imageSrc: "https://images.pexels.com/photos/376452/pexels-photo-376452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Vintage-style Kaleo concert poster"
            },
            {
              id: "3",
              brand: "Kaleo Official",
              name: "Surface Sounds Vinyl",
              price: "$45.00",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Kaleo Surface Sounds album vinyl record"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Fan Engagement"
          description="Numbers that showcase Kaleo's global impact and devoted fanbase"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "2M+",
              title: "Monthly Listeners",
              description: "Spotify streams worldwide",
              icon: Music
            },
            {
              id: "2",
              value: "50+",
              title: "Countries Toured",
              description: "Global concert venues",
              icon: Globe
            },
            {
              id: "3",
              value: "500K+",
              title: "Sold Out Shows",
              description: "Tickets sold this tour",
              icon: Ticket
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Fans Are Saying"
          description="Real experiences from concertgoers who've witnessed Kaleo's incredible live performances"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Music Blogger",
              company: "Rock Scene Magazine",
              rating: 5,
              content: "Absolutely mesmerizing performance! Kaleo's energy on stage is unmatched and their connection with the audience is incredible.",
              imageSrc: "https://images.pexels.com/photos/341858/pexels-photo-341858.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell at concert venue"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Concert Enthusiast",
              company: "Live Music Weekly",
              rating: 5,
              content: "I've been to hundreds of concerts, and Kaleo's show stands out as one of the most powerful experiences I've ever had.",
              imageSrc: "https://images.pexels.com/photos/7715505/pexels-photo-7715505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen enjoying live show"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Music Fan",
              company: "Local Music Scene",
              rating: 5,
              content: "The venue was electric with energy. Kaleo delivered every song with such passion and authenticity. Can't wait for the next show!",
              imageSrc: "https://images.pexels.com/photos/28096535/pexels-photo-28096535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez at concert"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Band Photographer",
              company: "Concert Captures",
              rating: 5,
              content: "As a photographer, I've captured many artists, but Kaleo's stage presence and raw emotion make for the most compelling shots.",
              imageSrc: "https://images.pexels.com/photos/3563170/pexels-photo-3563170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim with camera at show"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Tickets"
          title="Don't Miss This Epic Performance"
          description="Secure your tickets now and be part of an unforgettable night with Kaleo. Limited availability for this exclusive concert experience."
          tagIcon={Ticket}
          inputPlaceholder="Enter your email"
          buttonText="Get Updates"
          termsText="By signing up, you'll receive updates about ticket sales and concert information. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/14364624/pexels-photo-14364624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Concert venue with dramatic stage lighting"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Event",
              items: [
                { label: "Tickets", href: "contact" },
                { label: "Venue Info", href: "about" },
                { label: "Schedule", href: "contact" }
              ]
            },
            {
              title: "Kaleo",
              items: [
                { label: "Official Site", href: "https://kaleomusic.com" },
                { label: "Spotify", href: "https://spotify.com" },
                { label: "YouTube", href: "https://youtube.com" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "contact" },
                { label: "Accessibility", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Kaleo Concert Event"
        />
      </div>
    </ThemeProvider>
  );
}