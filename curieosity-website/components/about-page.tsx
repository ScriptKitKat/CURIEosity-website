'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"
import prisc from './images/priscilla.png';
import vomini from './images/vomini.png';
import aniya from './images/aniya.png';
import shiv from './images/shivani.png';
import learning from './images/girls-coding.jpg';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const missionSlides = [
    {
      title: "1. Inspiring Innovation",
      description: "We believe in fostering creativity and innovative thinking in computer science education. Our programs are designed to inspire the next generation of tech leaders.",
      icon: "🚀"
    },
    {
      title: "2. Building Community",
      description: "Creating a supportive community where students can learn, collaborate, and grow together. We emphasize peer learning and mentorship.",
      icon: "🤝"
    },
    {
      title: "3. Transforming Lives",
      description: "We are dedicated to empowering individuals to reach their full potential in the field of computer science. Our team works tirelessly to create a world where everyone has the opportunity to learn, love, and excel in tech.",
      icon: "⭐"
    }
  ]

  const directors = [
    {
      name: "Priscilla Ye",
      role: "EXECUTIVE DIRECTOR",
      description: "Sparking curiosity. On a mission to empower girls in tech.",
      image: prisc
    },
    {
      name: "Vomini Gupta",
      role: "DIRECTOR OF OPERATIONS",
      description: "Elite building everything from chess coding to a mission to the moon.",
      image: vomini
    },
    {
      name: "Aniya Jain",
      role: "DIRECTOR OF OUTREACH",
      description: "She's crunching numbers and closing deals—a future business mogul in the making.",
      image: aniya
    },
    {
      name: "Shivani Kulandaivel",
      role: "MARKETING",
      description: "She codes, she sketches, she gardens—and still has time to smash it on the badminton court.",
      image: shiv
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + missionSlides.length) % missionSlides.length)
  }

  return (
    <div className="min-h-screen bg-[#2D1E2F] text-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="fade-in-rise title-font max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The mission behind{" "}
            <span className="text-pink-400">CURIEosity</span>.
          </h1>
        </div>
      </section>

      {/* Meet our Directors Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Meet our Staff</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <Card key={index} className="bg-[#3D2E3F] border-0 text-white">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={director.image ? director.image.src : "/"} />
                      <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">{director.name}</h3>
                    <Badge className="bg-pink-600 hover:bg-pink-700 mb-2">{director.role}</Badge>
                    <p className="text-gray-300">{director.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-[#251B27]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2 text-pink-400">400+</div>
            <div className="text-gray-300">students impacted</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2 text-pink-400">$30k+</div>
            <div className="text-gray-300">raised</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2 text-pink-400">10+</div>
            <div className="text-gray-300">partners</div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">What we do</h2>
            <p className="text-gray-300 text-lg">
              We&apos;re a Non-profit organization instilling a love of computer science in students, especially girls, from all walks of life. Founded in early 2022, we are a group of software engineers, designers, and students striving to make computer science education accessible to everyone. From live workshops to hackathons, CURIEosity has a way for you to learn computer science. We offer workshops and hackathons relating to web development, UI design, game development, and more.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={learning}
              alt="Students learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-[#251B27]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="relative bg-[#3D2E3F] rounded-xl p-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-5xl mb-6">{missionSlides[currentSlide].icon}</div>
              <h3 className="text-2xl font-bold mb-4">{missionSlides[currentSlide].title}</h3>
              <p className="text-gray-300 mb-8">{missionSlides[currentSlide].description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}