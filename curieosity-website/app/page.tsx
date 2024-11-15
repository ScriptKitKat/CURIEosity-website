import { HomePage } from "@/components/home-page"

export const metadata = {
  openGraph: {
    title: "CURIEosity",
    description: "Hosting hackathons, Computer Science workshops empowering the next generation of students, especially girls. Through interactive events, CURIEosity is committed to bridge the gap in tech education and inspire young minds to launch their start-up ideas.",
    images: [
      {
        url: "./components/images/CURE_logo.svg",
        width: 1200,
        height: 630,
        alt: "CURIEosity Logo",
      },
    ],
    url: "https://curieosity.org/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CURIEosity",
    description: "Hosting hackathons, Computer Science workshops empowering the next generation of students, especially girls. Through interactive events, CURIEosity is committed to bridge the gap in tech education and inspire young minds to launch their start-up ideas.",
    images: ["./components/images/CURE_logo.svg"],
  },
};

export default function Page() {
  return <HomePage />
}