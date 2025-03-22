"use client";

import { ThreeDMarquee } from "../ui/3dMarquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://www.netscaler.com/blog/wp-content/uploads/2024/03/high-performance-secure-kubernetes-ingress-netscaler-red-hat-openshift-scaled.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/670fced7a52f475411d6f06f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://media.gettyimages.com/id/1419462882/video/lock-sign.jpg?s=640x640&k=20&c=94tsmRFY6tERWr7fsw3c3U13JpeUjUBOMC3zND8eZaE=",
    "https://cdn.prod.website-files.com/6531852c4ec912c7e9372962/677f20a761ef6347b363f800_cybersecurity-2025_-lessons-learned-%26-expected-trends-thumbnail-01.jpg",
    "https://www.sonypencoed.co.uk/app/uploads/2024/05/In-Article-Image.png",
    "https://www.tetratech.com/wp-content/uploads/2023/09/Cybersecurity-Federal-IT-5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysEEXrDz5Z614qAqXbWId-lf6YzqlWTj9vS-HXEJn1Y9oPhUpaVm8VrY0S_nc3G948hs&usqp=CAU",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="mx-auto my-10 max-w-full px-4 sm:px-6 md:px-8">
  <ThreeDMarquee images={images} />
</div>

  );
}
