export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-purple-900/80 to-gray-900/95 backdrop-blur-md border-t border-purple-500/30 py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sanika Patade</p>
              <p className="text-xs text-gray-300">Software Engineer · Pune, MH · India</p>
            </div>
            <div className="text-gray-300">
              <p className="text-gray-300 text-sm">Made with <span className="text-pink-400">❤️</span> by <span className="text-purple-400">sanika</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
