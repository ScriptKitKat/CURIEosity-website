import AboutPage from '@/components/about-page';

export const metadata = {
    title: "About Us - CURIEosity",
    description: "Meet our team. Our mission is to empower the next generation of girls in computer science by fostering a passion for coding and innovation. Through engaging hackathons, inspiring workshops, and creative lesson plans, we aim to bridge the gender gap in tech and inspire young women to pursue their dreams in STEM fields.",
    openGraph: {
      title: "About Us - CURIEosity",
      description: "Meet our team. Our mission is to empower the next generation of girls in computer science by fostering a passion for coding and innovation. Through engaging hackathons, inspiring workshops, and creative lesson plans, we aim to bridge the gender gap in tech and inspire young women to pursue their dreams in STEM fields.",
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
      title: "About Us - CURIEosity",
      description: "Meet our team. Our mission is to empower the next generation of girls in computer science by fostering a passion for coding and innovation. Through engaging hackathons, inspiring workshops, and creative lesson plans, we aim to bridge the gender gap in tech and inspire young women to pursue their dreams in STEM fields.",
      images: ["./components/images/CURE_logo.svg"],
    },
    keywords: ["CURIEosity", "Priscilla Ye", "Vomini Gupta", "Shivani Kulandaivel", "computer science", "hackathons", "workshops"],
  };


export default function About() {
    return <AboutPage />;
}
