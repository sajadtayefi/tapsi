import Navbar from "../section's/Navbar";
import Section1 from "../section's/Section1";
import Section2 from "../section's/Section2";
import Section3 from "../section's/Section3";
import Section5 from "../section's/Section5";
import Section6 from "../section's/Section6";
import Section7 from "../section's/Section7";
import Section4 from "../section's/Section4";
import Section8 from "../section's/Section8";
import Section9 from "../section's/Section9";

export default function Home() {
  return (
    <div dir="rtl" className=" h-screen bg-backgroundcolor font-iranyekan  mx-auto w-full   ">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}
