import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { useForm } from "react-hook-form";

export const Iphone = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight - 100;
      if (show !== isScrolled) setIsScrolled(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          const navHeight = 60; // Height of the navigation bar
          const offset = element.offsetTop - navHeight;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  useEffect(() => {
    const weddingDate = new Date('2025-09-21T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      
      setTimeLeft({
        days: differenceInDays(weddingDate, now),
        hours: differenceInHours(weddingDate, now) % 24,
        minutes: differenceInMinutes(weddingDate, now) % 60,
        seconds: differenceInSeconds(weddingDate, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    {
      id: 1,
      src: "/frame-14.svg",
      alt: "Frame",
      className: "relative w-[199px] h-[228px] object-contain",
      containerClassName: "flex w-[199px] h-[228px] items-center justify-center absolute top-0 left-[3px]",
    },
    {
      id: 2,
      src: "/frame-15.svg",
      alt: "Frame",
      className: "absolute w-[183px] h-[210px] top-3.5 left-[206px] object-contain",
    },
    {
      id: 3,
      src: "/screen-shot-2025-05-09-at-12-48-57-am-removebg-preview-1.png",
      alt: "Screen shot",
      className: "w-full h-[72px] object-contain",
      containerClassName: "flex w-[403px] items-center justify-center p-2.5 absolute top-[216px] left-0",
    },
    {
      id: 4,
      src: "/screen-shot-2025-05-04-at-4-59-14-pm-removebg-preview-2.png",
      alt: "Screen shot",
      className: "w-[145px] h-[164px] object-contain",
      containerClassName: "flex w-[155px] h-[173px] items-center justify-center absolute top-[57px] left-[228px]",
    },
    {
      id: 5,
      src: "/screen-shot-2025-05-04-at-4-56-53-pm-removebg-preview-2.png",
      alt: "Screen shot",
      className: "w-[152px] h-[173px] object-contain",
      containerClassName: "flex w-40 h-[182px] items-center justify-center absolute top-[49px] left-[11px]",
    },
  ];

  const timelineEvents = [
    {
      date: "January 2023",
      title: "First Meeting",
      description: "We met at a local coffee shop, both reaching for the same pastry..."
    },
    {
      date: "March 2023",
      title: "First Date",
      description: "A magical evening at the art gallery followed by dinner under the stars..."
    },
    {
      date: "December 2024",
      title: "The Proposal",
      description: "At sunset on the beach, with our closest friends and family hiding nearby..."
    }
  ];

  return (
    <div className="relative">
      {/* Fixed homepage section */}
      <div id="home" className="fixed inset-0 bg-[#F8F3EB] flex flex-col justify-center items-center">
        <Card className="overflow-hidden w-full max-w-[421px] h-[703px] border-0 shadow-none mx-4">
          <CardContent className="p-0">
            <div className="relative w-full max-w-[403px] h-[308px] top-[198px] mx-auto">
              {images.map((image, index) =>
                image.containerClassName ? (
                  <div key={image.id} className={image.containerClassName}>
                    <img
                      className={image.className}
                      alt={image.alt}
                      src={image.src}
                    />
                  </div>
                ) : (
                  <img
                    key={image.id}
                    className={image.className}
                    alt={image.alt}
                    src={image.src}
                  />
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scrollable content */}
      <div className="relative">
        <div className="h-screen"></div>

        <nav className={`fixed z-50 left-0 right-0 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white shadow-md' 
            : 'bottom-0 bg-white/20 backdrop-blur-sm'
        }`}>
          <div className="container mx-auto px-4">
            <ul className="flex justify-center items-center space-x-4 py-4 text-black overflow-x-auto whitespace-nowrap">
              <li>
                <a href="#home" className="font-medium hover:opacity-80 transition-opacity text-sm px-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#timeline" className="font-medium hover:opacity-80 transition-opacity text-sm px-2">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#details" className="font-medium hover:opacity-80 transition-opacity text-sm px-2">
                  Wedding Details
                </a>
              </li>
              <li>
                <a href="#rsvp" className="font-medium hover:opacity-80 transition-opacity text-sm px-2">
                  RSVP
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="bg-white relative z-10">
          <section className="relative bg-white w-full py-8 md:py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-script mb-6 md:mb-8">The Big Day Is Coming</h2>
              <div className="flex items-center justify-center space-x-2 text-2xl md:text-4xl font-bold">
                <span>{timeLeft.days}</span>
                <span className="text-gray-600">:</span>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-gray-600">:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-gray-600">:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <div className="flex items-center justify-center space-x-[30px] mt-2 text-sm text-gray-600">
                <span>Days</span>
                <span>Hrs</span>
                <span>Min</span>
                <span>Sec</span>
              </div>
            </div>
          </section>

          <section id="timeline" className="relative bg-[#F8F3EB] w-full py-12 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="font-script text-4xl md:text-6xl mb-8 md:mb-12 text-center text-[#8B4513]">Our Story</h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8B4513]/20 transform md:-translate-x-1/2"></div>
                  
                  <div className="space-y-8 md:space-y-16">
                    {timelineEvents.map((event, index) => (
                      <div key={index} className="relative flex flex-col md:flex-row md:items-center group">
                        <div className="flex-1 md:pr-8 pl-8 md:pl-0 mb-4 md:mb-0">
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-md transform transition-all duration-300 hover:scale-105 relative">
                            <div className="absolute -left-2 top-1/2 w-4 h-4 bg-[#8B4513] rounded-full transform -translate-y-1/2"></div>
                            <h3 className="font-script text-xl md:text-2xl mb-2 text-[#8B4513]">{event.title}</h3>
                            <p className="font-serif text-base md:text-lg">{event.description}</p>
                            <p className="font-serif text-sm md:text-base text-[#8B4513] mt-2 md:hidden">{event.date}</p>
                          </div>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8B4513] rounded-full"></div>
                        <div className="hidden md:block md:flex-1 md:pl-8">
                          <p className="font-serif text-xl text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full h-[40vh] md:h-[60vh] bg-cover bg-center bg-fixed" style={{
            backgroundImage: 'url("/photo1.jpg")', 
            backgroundPosition: 'center'
          }}>
            <div className="absolute inset-0 bg-black/60"></div>
          </section>

          <section id="details" className="relative bg-[#F8F3EB] w-full py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-script text-6xl mb-4 text-[#8B4513]">Ceremony & Reception</h2>
                
                <div className="mt-12 space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-12 shadow-lg">
                    <h3 className="font-display text-5xl mb-4">SUNDAY, SEPTEMBER 21, 2025</h3>
                    <h3 className="font-display text-4xl mb-4">NEWMARKET, ON</h3>
                    <h3 className="font-display text-5xl mb-6">HOLLAND MARSH WINERY</h3>
                    <p className="font-serif text-2xl text-[#8B4513] mb-2">18270 KEELE STREET</p>
                    
                    <div className="mt-16 space-y-6 text-center">
                      <div>
                        <p className="font-display text-2xl">4:00 PM ceremony</p>
                        <p className="font-serif text-xl text-[#8B4513]">reception to follow</p>
                      </div>
                      
                      <div className="pt-8">
                        <p className="font-display text-xl mb-2">Parking: available on-site</p>
                        <p className="font-display text-xl">Dress: Formal / Black Tie Optional</p>
                        <p className="font-serif text-lg text-[#8B4513] mt-2">We kindly request you RSVP</p>
                      </div>
                      
                      <div className="pt-8">
                        <a 
                          href="https://maps.google.com/?q=Holland+Marsh+Winery" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-display text-xl text-[#8B4513] hover:text-[#6d3610] transition-colors duration-200 underline"
                        >
                          Visit Holland Marsh Winery
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full h-[40vh] md:h-[60vh] bg-cover bg-center bg-fixed" style={{
            backgroundImage: 'url("/photo2.jpg")',
            backgroundPosition: 'center 30%'
          }}>
            <div className="absolute inset-0 bg-black/60"></div>
          </section>

          <section id="rsvp" className="relative bg-[#F8F3EB] w-full py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg">
                  <h2 className="font-script text-3xl md:text-4xl mb-6 md:mb-8 text-center text-[#8B4513]">RSVP</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <h3 className="font-script text-2xl text-[#8B4513] mb-4">Thank You!</h3>
                      <p className="font-serif text-gray-600">Your RSVP has been submitted. We look forward to celebrating with you!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">First Name</label>
                          <input
                            {...register("firstName", { required: true })}
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                          />
                          {errors.firstName && <span className="text-red-500 text-sm">Required</span>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Last Name</label>
                          <input
                            {...register("lastName", { required: true })}
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                          />
                          {errors.lastName && <span className="text-red-500 text-sm">Required</span>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Email</label>
                        <input
                          type="email"
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                        />
                        {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Number of Guests</label>
                        <select
                          {...register("guests", { required: true })}
                          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                        >
                          <option value="">Select...</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        {errors.guests && <span className="text-red-500 text-sm">Required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Dietary Restrictions</label>
                        <textarea
                          {...register("dietary")}
                          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                          rows={3}
                          placeholder="Please list any dietary restrictions or allergies..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#8B4513] text-white py-2 md:py-3 rounded-md hover:bg-[#6d3610] transition-colors duration-200 text-lg"
                      >
                        Submit RSVP
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#2A1810] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-script text-4xl mb-6">Daniel & Bluky</h2>
                <p className="font-serif text-lg mb-8">September 21, 2025 • Newmarket, Ontario</p>
                <div className="border-t border-white/20 pt-8">
                  <p className="font-serif text-sm text-white/60">
                    "We cannot wait to see all who attend"
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};







