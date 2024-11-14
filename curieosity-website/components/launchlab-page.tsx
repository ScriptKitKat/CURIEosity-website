import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { Rocket, Users, Trophy, Calendar } from 'lucide-react'

export default function LaunchLab() {
    return (
        <div className="min-h-screen bg-[#2D1E2F] text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Business innovation background"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">LaunchLab</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Empowering high school students to launch their business ideas and become the entrepreneurs of tomorrow.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Register Now
            </Button>
            </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About LaunchLab</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                { icon: Rocket, title: "Innovate", description: "Develop groundbreaking business ideas" },
                { icon: Users, title: "Collaborate", description: "Work with like-minded peers" },
                { icon: Trophy, title: "Compete", description: "Win prizes and recognition" },
                { icon: Calendar, title: "48 Hours", description: "Turn your idea into reality" },
                ].map((item, index) => (
                <Card key={index} className="bg-[#3D2E3F]">
                    <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Speakers Section */}
        <section className="py-16 px-4 bg-[#3D2E3F]">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                { name: "Sarah Johnson", role: "Tech Entrepreneur", image: "/placeholder.svg?height=200&width=200" },
                { name: "Michael Chen", role: "Venture Capitalist", image: "/placeholder.svg?height=200&width=200" },
                { name: "Olivia Martinez", role: "Marketing Expert", image: "/placeholder.svg?height=200&width=200" },
                ].map((speaker, index) => (
                <Card key={index} className="bg-[#2D1E2F]">
                    <CardContent className="p-6 text-center">
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                    <p className="text-gray-400">{speaker.role}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16 px-4">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((sponsor) => (
                <div key={sponsor} className="flex items-center justify-center">
                    <img
                    src={`/placeholder.svg?height=100&width=200&text=Sponsor ${sponsor}`}
                    alt={`Sponsor ${sponsor}`}
                    className="max-w-full h-auto"
                    />
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-[#3D2E3F]">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
                <AccordionItem value="item-1">
                <AccordionTrigger>What is LaunchLab?</AccordionTrigger>
                <AccordionContent>
                    LaunchLab is a 48-hour hackathon for high school students focused on developing innovative business ideas. Participants work in teams to create and pitch their business concepts to a panel of judges.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent>
                    LaunchLab is open to all high school students, regardless of their prior experience in business or entrepreneurship. We welcome students from diverse backgrounds and skill sets.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger>What should I bring?</AccordionTrigger>
                <AccordionContent>
                    Participants should bring their own laptops, chargers, and any materials they might need for brainstorming and presenting their ideas. We&apos;ll provide food, drinks, and a collaborative workspace for the duration of the event.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger>Are there prizes?</AccordionTrigger>
                <AccordionContent>
                    Yes! We have exciting prizes for the top business ideas, including cash awards, mentorship opportunities, and resources to help bring your idea to life. Specific prize details will be announced closer to the event date.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </section>
        </div>
    )
}