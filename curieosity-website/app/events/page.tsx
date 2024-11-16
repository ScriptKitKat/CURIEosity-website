import EventsPage from '@/components/events-page';

export const metadata = {
    title: "Events - CURIEosity",
    description: "Join us for our dynamic hackathons, where guest speakers from diverse industry backgrounds—ranging from esteemed professors to cutting-edge innovators—share their expertise. Our events offer the perfect opportunity to network, develop new skills, and apply your knowledge to kickstart your future career. Best of all, every event is completely free, making it accessible to everyone passionate about tech and innovation!",
    openGraph: {
      title: "Events - CURIEosity",
      description: "Join us for our dynamic hackathons, where guest speakers from diverse industry backgrounds—ranging from esteemed professors to cutting-edge innovators—share their expertise. Our events offer the perfect opportunity to network, develop new skills, and apply your knowledge to kickstart your future career. Best of all, every event is completely free, making it accessible to everyone passionate about tech and innovation!",
      images: [
        {
          url: "./components/images/CURE_logo.svg",
          width: 1200,
          height: 630,
          alt: "CURIEosity Logo",
        },
      ],
      url: "https://curieosity.org/about",
    },
    twitter: {
      card: "summary_large_image",
      title: "Events - CURIEosity",
      description: "Join us for our dynamic hackathons, where guest speakers from diverse industry backgrounds—ranging from esteemed professors to cutting-edge innovators—share their expertise. Our events offer the perfect opportunity to network, develop new skills, and apply your knowledge to kickstart your future career. Best of all, every event is completely free, making it accessible to everyone passionate about tech and innovation!",
      images: ["./components/images/CURE_logo.svg"],
    },
    keywords: ["Curieosity", "events", "computer science", "hackathons", "workshops", "inspire", "empower"],
  };

export default function Events() {
    return <EventsPage />;
}