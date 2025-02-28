import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-black">
        <h1 className="text-3xl font-bold">Witaj Spotify</h1>
        <div className="flex space-x-4">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-dark-gray p-4">
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Library</li>
          </ul>
        </div>

        {/* Main Content (Playlists, Songs, etc.) */}
        <div className="w-4/5 p-4">
          <h2 className="text-xl font-bold">Ulubione Playlisty</h2>

          {/* Example Playlist */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image
                src="/spotify-image.jpg" // Placeholder image
                alt="Playlist 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Top Hits</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image
                src="/spotify-image.jpg" // Placeholder image
                alt="Playlist 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Chill Vibes</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image
                src="/spotify-image.jpg" // Placeholder image
                alt="Playlist 3"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Party Mix</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
