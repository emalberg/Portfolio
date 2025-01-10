export default function Home() {
  const data: any = "hello";
  return (
      <main className="pt-[64px]">
        <section id="Home" className="w-full h-[1000px] bg-green-300 scroll-mt-[64px]">
          Fisrt Section
        </section>
        <section id="About" className="w-full h-[1000px] bg-blue-300 scroll-mt-[64px]">
          Second Section
        </section>
        <section id="Projects" className="w-full h-[1000px] bg-orange-300 scroll-mt-[64px]">
          Thrid Section
        </section>
        <section id="Certs" className="w-full h-[1000px] bg-purple-300 scroll-mt-[64px]">
          Forth Section
        </section>        
      </main>
  );
}
