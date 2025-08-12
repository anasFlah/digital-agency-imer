export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Rayo Next.js
        </h1>
        <p className="text-gray-600 mb-8">
          Your website is working! 🎉
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Next Steps:</h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li>✅ Next.js is running</li>
            <li>✅ Configuration is working</li>
            <li>✅ Basic page is loading</li>
            <li>🔄 Now we can add components back</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
