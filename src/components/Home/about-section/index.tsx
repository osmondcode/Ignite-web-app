

export default function About_Section() {
  return (
    <section className="w-full flex flex-col items-center justify-start xs:pt-[50px] pt-[30px] pb-[100px] relative px-[20px]">
      <h1 className="md:text-[3.4rem] sm:text-[3.2rem] xs:text-[2.9rem] text-[2rem] font-black text-[var(--light)] opacity-30 font-(family-name:--font-press-start) absolute top-5 z-20">
        ABOUT US
      </h1>
      <h1 className="text-[var(--light)] md:text-[40px] xs:text-[35px] text-[30px] mt-1 font-bold">
        ABOUT{" "}
        <span className="text-white">
          IGNITE
          <span className="text-[var(--light)] text-[40px] ml-1">.</span>
        </span>
      </h1>
      <p className="text-[var(--light)] text-[18px] max-w-[600px] font-light text-center">
        Ignite Pack Services Limited – Where Innovation Meets Finance
      </p>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center mt-[50px] gap-x-[30px] gap-y-[60px]">
        <span className="xl:w-[450px] lg:min-w-[400px] sm:min-w-[70%] w-full sm:h-[500px] h-[400px] rounded-[10px] bg-[var(--light)]/30 hidden xs:flex"></span>
        <span className="lg:w-fit sm:w-[90%] w-full lg:max-w-[550px] min-h-[450px] rounded-[10px] flex flex-col gap-5">
          <p className="text-[18px] font-light text-white text-justify">
            Ignite Pack is a technology-first financial services company
            dedicated to solving complex financial challenges across emerging
            markets. We help businesses and institutions deliver faster,
            smarter, and more inclusive financial services through innovative
            technology.
          </p>
          <span className="w-full flex flex-col gap-1">
            <h3 className="text-[22px] font-bold text-[var(--light)] font-(family-name:--font-nunito-sans)">
              Our Mission:
            </h3>
            <p className="text-[18px] font-light text-gray-200">
              To power Africa’s financial future by delivering secure,
              user-friendly, and scalable FinTech infrastructure.
            </p>
          </span>
          <span className="w-full flex flex-col gap-1">
            <h3 className="text-[22px] font-bold text-[var(--light)] font-(family-name:--font-nunito-sans)">
              Our Vision:
            </h3>
            <p className="text-[18px] font-light text-gray-200">
              To become a leading enabler of digital finance in emerging
              markets, driving access, innovation, and trust.
            </p>
          </span>
          <span className="w-full flex flex-col gap-1">
            <h3 className="text-[22px] font-bold text-[var(--light)] font-(family-name:--font-nunito-sans)">
              Core Values:
            </h3>
            <ul className="text-[18px] flex xs:justify-start justify-between gap-[30px] flex-wrap list-disc font-light text-gray-200 pl-4.5">
              <li className="marker:text-[var(--light)] pr-3">Innovation</li>
              <li className="marker:text-[var(--light)] pr-3">Trust</li>
              <li className="marker:text-[var(--light)] pr-3">Integrity</li>
              <li className="marker:text-[var(--light)] pr-3">
                Customer-Centricity
              </li>
              <li className="marker:text-[var(--light)] pr-3">Inclusion</li>
            </ul>
          </span>
        </span>
      </div>
     
    </section>
  );
}