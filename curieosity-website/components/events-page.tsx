import React from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <div className="bg-[#2D1E2F] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl mb-8">
            We host conferences featuring experts from every corner of the industry, from professors to innovators. Along the way, you&apos;ll meet new people, pick up new skills, and apply what you have learned to your future careers. All events are free!
          </p>
        </div>
      </section>

      {/* Current Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Current Events</h2>
          <div className="grid gap-8">
            <Card className="bg-[#3D2E3F] border-0 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Badge className="bg-pink-600 hover:bg-pink-700 mb-4">Current</Badge>
                    <h3 className="text-2xl font-bold mb-2">NatureHacks 2024</h3>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <CalendarDays className="h-4 w-4" />
                      <span>October 1st - Novemeber 25th, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>Worldwide</span>
                    </div>
                    <p className="mb-6">
                      Join us for a 2-month long hackathon exploring the latest developments in artificial intelligence and machine learning. Network with industry leaders and participate in hands-on workshops.
                    </p>
                    <Button className="bg-pink-600 hover:bg-pink-700">Register Now</Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-pink-400" />
                      <span className="font-semibold">Featured Speakers</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="text-center">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                            <AvatarFallback>SP</AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">Speaker {i}</div>
                          <div className="text-xs text-pink-400">Company {i}</div>
                        </div>
                      ))}
                      <Button variant="link" className="text-pink-400 hover:text-pink-300">
                        View More Speakers
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#3D2E3F] border-0 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Badge className="bg-pink-600 hover:bg-pink-700 mb-4">Current</Badge>
                    <h3 className="text-2xl font-bold mb-2">LaunchLab 2024</h3>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <CalendarDays className="h-4 w-4" />
                      <span>Novemeber 25th, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>Worldwide</span>
                    </div>
                    <p className="mb-6">
                      Join us for a hackathon exploring the latest developments in artificial intelligence and machine learning. Network with industry leaders and participate in hands-on workshops.
                    </p>
                    <Button className="bg-pink-600 hover:bg-pink-700">Register Now</Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-pink-400" />
                      <span className="font-semibold">Featured Speakers</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="text-center">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                            <AvatarFallback>SP</AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">Speaker {i}</div>
                          <div className="text-xs text-pink-400">Company {i}</div>
                        </div>
                      ))}
                      <Button variant="link" className="text-pink-400 hover:text-pink-300">
                        View More Speakers
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 bg-[#251B27]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Past Events</h2>
          <div className="grid gap-8">
          <Card className="bg-[#3D2E3F] border-0 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Badge className="bg-pink-600 hover:bg-pink-700 mb-4">Current</Badge>
                    <h3 className="text-2xl font-bold mb-2">EastHacks</h3>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <CalendarDays className="h-4 w-4" />
                      <span>October 1st - Novemeber 25th, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>Worldwide</span>
                    </div>
                    <p className="mb-6">
                      Join us for a 2-month long hackathon exploring the latest developments in artificial intelligence and machine learning. Network with industry leaders and participate in hands-on workshops.
                    </p>
                    <Button className="bg-pink-600 hover:bg-pink-700">Register Now</Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-pink-400" />
                      <span className="font-semibold">Featured Speakers</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="text-center">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                            <AvatarFallback>SP</AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">Speaker {i}</div>
                          <div className="text-xs text-pink-400">Company {i}</div>
                        </div>
                      ))}
                      <Button variant="link" className="text-pink-400 hover:text-pink-300">
                        View More Speakers
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}