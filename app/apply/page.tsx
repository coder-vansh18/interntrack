import Navbar from "@/components/layout/Navbar";
import MultiStepForm from "@/components/form/MultiStepForm";
import GlowOrb from "@/components/animations/GlowOrb";
import GridBackground from "@/components/animations/GridBackground";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#05050a] flex flex-col">
      <Navbar />
      
      <div className="flex-1 relative pt-32 pb-20 px-6 flex items-center justify-center">
        <GridBackground fadeEdge={false} />
        <GlowOrb color="violet" size="lg" blur="xl" className="top-0 right-0 opacity-40" />
        <GlowOrb color="cyan" size="lg" blur="xl" className="bottom-0 left-0 opacity-30" delay={2} />
        
        <div className="w-full relative z-10">
          <MultiStepForm />
        </div>
      </div>
    </main>
  );
}
