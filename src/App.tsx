import { Input } from "@/components/ui/input"
import { Twitter, ExternalLink } from "lucide-react"

function App() {
  const contractAddress = "72GuLiwv3Lbbwoxv2Jcv1sS6R5boFFRadViUVHWvpump" // Example address
  const dexscreenerUrl = "https://dexscreener.com/solana/" + contractAddress

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Video Player */}
        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
          <video 
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/videos/crypto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contract Address */}
        <div className="space-y-2 max-w-lg mx-auto">
          <label className="text-sm font-medium text-gray-300">Contract Address</label>
          <Input 
            value={contractAddress}
            readOnly
            className="bg-gray-900 border-gray-700 text-white font-mono text-sm px-4 py-3"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center">
          <a 
            href={dexscreenerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-800 rounded-full transition-colors"
            title="View on DexScreener"
          >
            <ExternalLink className="w-8 h-8 text-gray-300 hover:text-white" />
          </a>
          <a 
            href="https://x.com/Trumpper_ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-800 rounded-full transition-colors"
            title="Official Twitter"
          >
            <Twitter className="w-8 h-8 text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
