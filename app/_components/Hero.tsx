import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center max-w-3xl">
        <Button className="mb-6 rounded-full text-sm tracking-wide bg-gray-900 text-white px-4 py-2 hover:bg-gray-700 transition">
          See What's New | &nbsp;{" "}
          <span className="text-[#9AE66E]"> AI Diagrams </span>
        </Button>

        <h1 className="text-4xl font-extrabold sm:text-6xl bg-gradient-to-r from-[#9AE66E] via-gray-900 to-black bg-clip-text text-transparent">
          Think. Sketch. Erase.
          <span className="sm:block"> Your Infinite Whiteboard. </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg">
          A fast, intuitive, and collaborative online whiteboard for teams,
          designers, and educators. Brainstorm, plan, and visualize ideas
          effortlessly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="px-12 py-3 text-sm font-semibold bg-[#9AE66E] text-gray-900 hover:bg-[#82d358] transition">
            Start Drawing
          </Button>
          <Button
            variant="outline"
            className="px-12 py-3 text-sm font-semibold border-[#9AE66E] text-gray-900 hover:text-gray-900 transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
