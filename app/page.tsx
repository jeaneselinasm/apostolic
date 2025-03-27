import Image from "next/image";

export default function Home() {
  return (
  <div className="justify-items-center">
 <h1 className="bg-red-200 mt-8 p-2 text-lg font-bold text-[#705936] ">GBI APOSTOLIC CENTER</h1>
 {/* Logo */}

 <section>
 <Image 
src='/logo-gbi.png'
width={75}
height={75}
alt="logo-gbi"
/>
 </section>


 <section>
  Yearly Theme
 </section>


 {/* CTA */}
 <section>TENTANG KAMI</section>


 
 {/* Footer Section */}
 <section>FOOTER SECTION</section>


  </div>

  
  );
}
