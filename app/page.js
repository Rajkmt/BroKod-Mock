import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240]">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-6xl font-bold font-Wide Latin text-yellow-400">BroKod Mock</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Dashboard</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Questions</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Upgrade</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">How it works?</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-20 text-center">
        {/* New Release Banner */}
        <div className="inline-flex items-center gap-4 bg-[#1a2942] rounded-full px-6 py-3 shadow-lg mb-12 border border-yellow-400/20">
          <span className="font-mono text-yellow-400">NEW</span>
          <div className="h-4 w-px bg-yellow-400/20"></div>
          <a href="#" className="text-yellow-400 hover:text-yellow-300 flex items-center font-mono">
            Check out our latest features 
            <span className="ml-1">→</span>
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl font-bold tracking-tight mb-6 font-['Eras_Bold_ITC']">
          <span className="text-white">Master Your</span>{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Technical Interviews
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-2xl max-w-2xl mx-auto mb-16 font-sans font-['Eras_Bold_ITC']">
          Level up your coding interview game with BroKod Mock. Practice real-world problems, 
          get instant feedback, and crack those tech interviews like a pro.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-6 rounded-lg text-lg font-medium font-mono transition-colors">
            Start Practicing
          </Button>
          <Button variant="outline" className="bg-transparent hover:bg-[#1a2942] px-8 py-6 rounded-lg border-2 border-yellow-400 text-yellow-400 text-lg font-medium font-mono transition-colors">
            View Problems
          </Button>
        </div>
      </div>
    </main>
  );
}
