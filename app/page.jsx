import Container from "@/components/layout/Container";
import ThreeCanvas from "@/components/three/ThreeCanvas";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="h-screen w-full">
        <div className="h-full w-full">
          <ThreeCanvas />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-500">
            Future collage section placeholder
          </div>
        </Container>
      </section>
    </main>
  );
}
