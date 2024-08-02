"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0">
          <Image
            src="/images/carousel/Default_vape_cloud_0.jpg"
            alt="Carousel image 1"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image
            src="/images/carousel/Default_vape_cloud_1.jpg"
            alt="Carousel image 2"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image
            src="/images/carousel/Default_vape_cloud_2.jpg"
            alt="Carousel image 3"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
