import Header from "@/app/ui/header";

export default function Home() {
  return (
    <section className="min-h-screen overflow-hidden">
      <Header />
      <h1 className="text-5xl tracking-wide uppercase font-bold h-[90vh] flex justify-center items-center bg-slate-300">Welcome to the Home Page!</h1>
    </section>
  )
}
