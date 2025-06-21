"use client";

import { Hammer, PenTool, Rocket, Star, StarHalf, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function Hero_Section() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (review) => {
    setSelected(review);
    setOpen(true);
  };

  const reviews = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      location: "New York, USA",
      review:
        "Ignite Pack Services transformed our payment processes, making them faster and more secure. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      location: "London, UK",
      review:
        "Their solutions are innovative and user-friendly. Our team loves the new tools!",
      rating: 4,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      location: "Sydney, Australia",
      review:
        "Exceptional service and support. Ignite Pack Services is a game-changer in the FinTech space.",
      rating: 5,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Kalista Walls",
      location: "Toronto, Canada",
      review:
        "Exceptional service and support. Ignite Pack Services is a game-changer in the FinTech space.",
      rating: 5,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Jude Michael",
      location: "Berlin, Germany",
      review:
        "Exceptional service and support. Ignite Pack Services is a game-changer in the FinTech space.",
      rating: 4,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Beckham Wilson",
      location: "Tokyo, Japan",
      review:
        "Exceptional service and support. Ignite Pack Services is a game-changer in the FinTech space.",
      rating: 5,
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col xs:items-center items-start xs:justify-center justify-start bg-[#1d1c21] text-white pt-[160px] pb-[100px] px-[20px]">
      {/* GLOW BALLS */}
      <div className="w-[150px] h-[70px] flex items-center justify-center relative sm:mb-[20px] md-[10px]">
        <span className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center absolute left-2 rounded-full bg-[#94ece5] glow-ball-one bounce-one">
          <PenTool className="text-black" />
        </span>
        <span className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center absolute left-[48px] rounded-full bg-[#d0ecb4] glow-ball-two bounce-two">
          <Hammer className="text-black" />
        </span>
        <span className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center absolute left-[90px] rounded-full bg-[#e5f699] glow-ball-three bounce-thr">
          <Rocket className="text-black" />
        </span>
      </div>
      {/* GLOW BALLS */}

      {/* TEXTS */}
      <h4 className="text-[18px] font-medium bg-gradient-to-r from-[var(--light)] via-[#fafafa] to-[var(--light)] bg-clip-text text-transparent">
        Trusted by Leading Businesses Across Africa
      </h4>
      <h1 className="lg:text-[3.3rem] md:text-[3rem] xs:text-[2.7rem] text-[2.2rem] font-black xs:text-center text-left md:leading-[55px] xs:leading-[45px] leading-[35px] mb-[15px] bg-gradient-to-r from-[#7d7d7b] via-[#fafafa] to-[#7d7d7b] bg-clip-text text-transparent">
        Revolutionizing Finance, <br /> Empowering Growth
      </h1>

      <p className="lg:text-[1.2rem] text-[1rem] font-light text-justify xs:text-center max-w-[800px] font-(family-name:--font-nunito-sans)">
        At Ignite Pack Services Limited, we build cutting-edge FinTech solutions
        that simplify payments, streamline operations, and drive financial
        inclusion.
      </p>
      {/* TEXTS */}

      {/* CALL TO ACTION */}
      <div className="mt-[30px] flex items-center gap-6 flex-wrap-reverse">
        <button className="bg-[var(--light)] md:px-[2.3rem] px-[1.8rem] md:py-[0.9rem] py-[0.6rem] rounded-[30px] font-bold cursor-pointer text-black overflow-hidden border border-[var(--light)] shadow-broad w-full xs:w-fit">
          Explore Solutions
        </button>
        <button className="bg-transparent md:px-[2.3rem] px-[1.8rem] md:py-[0.9rem] py-[0.6rem] rounded-[30px] font-bold cursor-pointer text-[var(--light)] overflow-hidden border border-[var(--light)] btn liquid w-full xs:w-fit">
          Get in Touch
        </button>
      </div>
      {/* CALL TO ACTION */}

      {/* SLIDES */}
      <div className="w-full flex items-center justify-center flex-wrap">
        <Dialog open={open} onOpenChange={setOpen}>
          <span className="w-full flex items-center justify-center gap-4 mt-[80px] flex-wrap">
            {reviews.map((review) => (
              <DialogTrigger asChild key={review.id}>
                <span
                  onClick={() => handleOpen(review)}
                  className="w-[200px] h-[200px] mx-auto bg-[#252429] rounded-[10px] flex flex-col items-center justify-start p-4 cursor-pointer hover:scale-[1.02] duration-300"
                >
                  <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[var(--light)]/50 mt-4">
                    <User className="w-[30px] h-[30px]" />
                  </span>
                  <span className="text-[16px] font-semibold text-center">
                    {review.name}
                  </span>
                  <span className="text-[14px] text-center font-extralight text-gray-300 line-clamp-2">
                    {review.review}
                  </span>
                  <span className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[var(--light)] w-[20px] h-[20px]"
                      />
                    ))}
                    {review.rating <= 4 ? (
                      <StarHalf className="text-[var(--light)] w-[20px] h-[20px]" />
                    ) : (
                      <Star className="text-[var(--light)] w-[20px] h-[20px]" />
                    )}
                  </span>
                </span>
              </DialogTrigger>
            ))}
          </span>

          {selected && (
            <DialogContent className="sm:w-full w-[90%] max-w-[600px] bg-[#1d1c21] text-white">
              <DialogHeader>
                <DialogTitle className="flex items-start gap-4">
                  <span className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px] rounded-[8px] bg-[var(--light)]/20 flex items-center justify-center mb-4">
                    <User className="text-gray-300 lg:w-[80px] w-[60px] lg:h-[80px] h-[60px]" />
                  </span>
                  <span className="flex flex-col gap-1 mt-3">
                    <span className="lg:text-[18px] text-[16px]">
                      {selected.name}
                    </span>
                    <span className="lg:text-[16px] text-[14px] text-gray-300">
                      {selected.location || "Unknown location"}
                    </span>
                    <span className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-[var(--light)] w-[20px] h-[20px]"
                        />
                      ))}
                      {selected.rating <= 4 ? (
                        <StarHalf className="text-[var(--light)] w-[20px] h-[20px]" />
                      ) : (
                        <Star className="text-[var(--light)] w-[20px] h-[20px]" />
                      )}
                    </span>
                  </span>
                </DialogTitle>
                <DialogDescription>
                  <span className="w-full flex lg:text-[18px] text-[16px] text-justify font-light text-white">
                    {selected.review}
                  </span>
                  <span className="w-full mt-8 flex items-end justify-end">
                    <button
                      onClick={() => setOpen(false)}
                      className="lg:px-[2rem] px-[1.8rem] py-[0.5rem] text-[16px] border rounded-[6px] border-[var(--light)] bg-[var(--light)]"
                    >
                      Close
                    </button>
                  </span>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
      {/* SLIDES */}
    </div>
  );
}
