import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import forest from './images/forest.jpg';

export default function NatureHacks() {
return (
    <div className="min-h-screen bg-[#2D1E2F] text-white">
    {/* Hero Section */}
    <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
        src={forest.src}
        alt="Nature background"
        className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Naturehacks</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join us for an exciting hackathon focused on innovative solutions for environmental challenges.
        </p>
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://naturehacks.devpost.com/" target="_blank" rel="noopener noreferrer">
            Join Naturehacks
            </a>
        </Button>
        </div>
    </section>

    {/* Speakers Section */}
    <section className="py-16 px-4">
        <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            { name: "Dr. Jane Smith", role: "Environmental Scientist", image: "/placeholder.svg?height=200&width=200" },
            { name: "John Doe", role: "Sustainability Expert", image: "/placeholder.svg?height=200&width=200" },
            { name: "Emily Johnson", role: "Green Tech Innovator", image: "/placeholder.svg?height=200&width=200" },
            ].map((speaker, index) => (
            <Card key={index} className="bg-[#3D2E3F]">
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
    <section className="py-16 px-4 bg-[#3D2E3F]">
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
    <section className="py-16 px-4">
        <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
            <AccordionTrigger>What is Naturehacks?</AccordionTrigger>
            <AccordionContent>
                Naturehacks is a hackathon focused on developing innovative solutions for environmental challenges. Participants work in teams to create projects that address issues related to sustainability, conservation, and eco-friendly technologies.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>Who can participate?</AccordionTrigger>
            <AccordionContent>
                Naturehacks is open to students, professionals, and anyone passionate about environmental issues and technology. We welcome participants from diverse backgrounds and skill levels.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger>Are there prizes?</AccordionTrigger>
            <AccordionContent>
                Yes! We have exciting prizes for the top projects, including cash awards, mentorship opportunities, and eco-friendly gadgets. Specific prize details will be announced closer to the event date.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </section>
    </div>
)
}