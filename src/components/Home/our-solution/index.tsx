import { BankNote, Chart, CPU, Wallet, WebHook } from "@/assets/SVG/SVG";

export default function Our_Solution() {
    const solutions = [
      {
        id: 1,
            name: "Digital Payments Infrastructure",
        icon: <BankNote />,
        text: "Power secure and seamless transactions via cards, wallets, bank transfers, and more.",
    },
    {
        id: 2,
        name: "Core FinTech APIs",
        icon: <WebHook />,
        text: "Plug-and-play APIs for identity verification, payments, wallet services, and lending.",
    },
    {
        id: 3,
        name: "Custom Financial Platforms",
        icon: <Wallet />,
        text: "From micro-lending apps to mobile banking platforms — built for your use case.",
    },
    {
        id: 4,
        name: "KYC & Compliance Tech",
        icon: <CPU />,
        text: "Automated customer onboarding, AML monitoring, and regulatory reporting.",
    },
    {
        id: 5,
        name: "Smart Data Analytics",
        icon: <Chart />,
        text: "Transform transaction data into insights that fuel customer engagement and growth.",
      },
    ];
    return (
      <section className="w-full flex flex-col items-center justify-start xs:pt-[50px] pt-[30px] pb-[100px] relative px-[20px]">
        <h1 className="md:text-[3.2rem] sm:text-[2.8rem] xs:text-[2.3rem] text-[2rem] font-black text-[var(--light)] opacity-30 font-(family-name:--font-press-start) absolute top-5 z-20 uppercase text-center">
          our solutions
        </h1>
        <h1 className="text-[var(--light)] md:text-[40px] xs:text-[35px] text-[30px] xs:mt-1 font-bold uppercase mt-12">
          our{" "}
          <span className="text-white">
            solutions
            <span className="text-[var(--light)] text-[40px] ml-1">.</span>
          </span>
        </h1>
        <p className="text-[var(--light)] text-[18px] max-w-[600px] font-light text-center">
          Modern FinTech Solutions, Built for Growth.
        </p>

        <div className="w-full max-w-[1000px] flex items-start justify-evenly gap-8 flex-wrap mt-[80px]">
          {solutions.map((solution) => (
            <span
              key={solution.id}
              className="w-[300px] h-[350px] border border-[var(--light)] p-2 flex flex-col items-start justify-start rounded-md hover:scale-[1.01] duration-300"
            >
                  <span className="w-full h-[250px] bg-[var(--light)]/20 relative flex items-center justify-center">
                      {solution.icon}
                <h1 className="text-[20px] font-(family-name:--font-press-start) absolute bottom-0 right-2 text-[var(--light)]">
                  0{solution.id}
                </h1>
                  </span>
                  <h1 className="text-[18px] mt-3 font-semibold text-[var(--light)]">{solution.name}</h1>
                  <p className="font-light text-[14px] line-clamp-2">{solution.text}</p>
            </span>
          ))}
        </div>
      </section>
    );
}