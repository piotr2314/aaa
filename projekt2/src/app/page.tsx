import fs from "fs";
import path from "path";
import Image from "next/image";

// Typowanie Playlisty
interface Playlist {
  id: number;
  name: string;
  imgUrl: string;
}

// Komponent strony
const Home = async () => {
  // Wczytanie danych z pliku JSON w funkcji asynchronicznej
  const filePath = path.join(process.cwd(), "t.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const playlists: Playlist[] = JSON.parse(jsonData);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-black shadow-md">
        <h1 className="text-3xl font-bold">Witaj Spotify</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600">Login</button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-900 p-4">
          <ul className="space-y-4">
            <li className="text-xl hover:bg-green-600 p-2 rounded-md">Home</li>
            <li className="text-xl hover:bg-green-600 p-2 rounded-md">Search</li>
            <li className="text-xl hover:bg-green-600 p-2 rounded-md">Your Library</li>
            <li className="text-xl hover:bg-green-600 p-2 rounded-md">Playlists</li>
            <li className="text-xl hover:bg-green-600 p-2 rounded-md">Podcasts</li>
          </ul>
        </div>

        {/* Main Content (Playlists, Songs, etc.) */}
        <div className="w-4/5 p-4">
          <h2 className="text-xl font-bold">Ulubione Playlisty</h2>

          {/* Playlisty */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg">
                <Image
                  src={playlist.imgUrl}
                  alt={playlist.name}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">{playlist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
