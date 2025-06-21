export default function We_Serve() {
  return (
    <section className="w-full flex flex-col items-center justify-start xs:pt-[50px] pt-[30px] pb-[100px] relative px-[20px]">
      <h1 className="md:text-[3.2rem] sm:text-[2.8rem] xs:text-[2.3rem] text-[2rem] font-black text-[var(--light)] opacity-60 font-(family-name:--font-press-start) uppercase text-center">
        What We Offer
      </h1>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center mt-[50px] gap-x-[30px] gap-y-[60px] ">
        <span className="xl:w-[400px] lg:min-w-[350px] sm:min-w-[70%] w-full sm:h-[350px] h-[300px] rounded-[10px] bg-[var(--light)]/30 hidden xs:flex"></span>

        <span className="lg:w-fit sm:w-[90%] w-full lg:max-w-[400px] sm:h-[350px] h-[300px]  rounded-[10px] flex flex-col justify-center gap-2">
          <h1 className="text-[var(--light)] md:text-[30px] xs:text-[35px] text-[30px] mt-1 font-bold capitalize">
            what
            <span className="text-white"> we </span>
            offer
            <span className="text-ehite text-[40px] ml-1">.</span>
          </h1>

          <span className="w-full flex flex-col gap-5">
            <p className="text-[18px] font-light text-gray-200">
              We provide secure, scalable, and intelligent financial technology
              infrastructure to businesses, startups, and governments — powering
              seamless payments, digital wallets, lending platforms, and more.
            </p>
            <button className="bg-transparent md:px-[2rem] px-[1.5rem] md:py-[0.6rem] py-[0.4rem] rounded-[30px] font-bold cursor-pointer text-[var(--light)] overflow-hidden border border-[var(--light)] btn liquid w-full xs:w-fit">
              Contact Us
            </button>
          </span>
        </span>
      </div>
    </section>
  );
}
