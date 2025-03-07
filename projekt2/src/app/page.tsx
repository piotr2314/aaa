'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Komponent SidebarSong
const SidebarSong = ({ song }) => {
  return (
    <div className="cursor-pointer flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
      <img src={song.imgUrl} alt={song.title} width={50} height={50} className="rounded-lg" />
      <div>
        <p className="text-white font-medium">{song.title}</p>
        <p className="text-gray-400 text-sm">{song.artist}</p>
      </div>
    </div>
  );
};
const SidebarPlaylist = ({ song }) => {
  return (
    <div className="cursor-pointer flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
      <img src={song.imgUrl} alt={song.title} width={50} height={50} className="rounded-lg" />
      <div>
        <p className="text-white font-medium">{song.title}</p>
        <p className="text-gray-400 text-sm">
  {song.songs && song.songs.map((item, index) => (
    <div key={index} className="pointer">
      {item.title} {/* Tutaj zakłada się, że każda piosenka ma właściwość 'title' */}
    </div>
  ))}
</p>
      </div>
    </div>
  );
};
// Komponent Sidebar
const Sidebar = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://67cb164b3395520e6af44746.mockapi.io/songs");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <aside className="  w-[20vw] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 min-w-[300px] overflow-auto shrink-0 rounded-[20px] bg-gray-900 p-4 h-screen flex flex-col justify-between relative left-0">
      {/* Pierwszy prostokąt */}
      <div>
        <ul className="space-y-4 cursor-pointer">
          <li className="text-xl hover:bg-green-600 p-2 rounded-md">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl cursor-pointer hover:bg-green-600 p-2 rounded-md">
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </div>
      
      {/* Drugi prostokąt */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-white mb-2">Twoje Playlisty</h2>
        <div className="space-y-2">
          {songs.map((song) => (
            <SidebarSong key={song.id} song={song} />
          ))}
        </div>
      </div>
    </aside>
  );
};
const Playlist = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://67cb164b3395520e6af44746.mockapi.io/playlists");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <aside className="  w-[20vw] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 min-w-[300px] overflow-auto shrink-0 rounded-[20px] bg-gray-900 p-4 h-screen flex flex-col justify-between relative left-0">

      {/* Drugi prostokąt z tytułem "Ulubione Playlisty" */}
      <div className="mt-6">
        <div className="w-full p-4">
          <h2 className="text-xl font-bold text-white">Ulubione Playlisty</h2>
        </div>
        <div className="space-y-2">
          {songs.map((song) => (
            <SidebarSong key={song.id} song={song} />
          ))}
        </div>
      </div>
    </aside>
  );
};

// Komponent strony Home
const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white w-screen">
      {/* Header */}


      {/* Main Content */}
      <div className="flex flex-row">
        <div className="flex w-fit">
      <header className="flex items-center justify-between p-5 bg-black shadow-md w-fit absolute right-0">
        {/* <h1 className="text-3xl font-bold">Witaj Spotify</h1> */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600">Login</button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700">Sign Up</button>
        </div>
      </header>
        <Sidebar /></div>

        {/* Main Content (Playlists, Songs, etc.) */}
        {/* <Playlist/> */}
      </div>
    </div>
  );
};

export default Home;
export { Sidebar, SidebarSong };
