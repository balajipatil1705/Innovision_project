import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

// Updated Gradient Component with more distinct styling
export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[12rem] w-[60rem] h-[60rem] opacity-70 mix-blend-screen pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[85rem] max-w-[85rem] h-[85rem] -translate-x-1/2 -translate-y-1/2 animate-pulse"
        src={gradient}
        width={1400}
        height={1400}
        alt="Gradient"
      />
    </div>
  );
};

// Enhanced PhotoChatMessage with better visual elements and rounded shapes
export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-10 right-10 max-w-[18rem] py-6 px-8 bg-gradient-to-r from-purple-700 to-indigo-500 rounded-t-xl rounded-bl-xl shadow-lg text-white font-code text-base lg:top-20 lg:right-[9rem] lg:max-w-[18rem] animate-slideIn">
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

// Enhanced VideoChatMessage with improved animation and design
export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[4rem] w-full max-w-[15rem] pt-3 pr-3 pb-7 pl-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl rounded-br-xl shadow-xl text-white font-code text-base md:max-w-[18rem] animate-fadeIn">
      Video generated!
      <div className="absolute left-6 -bottom-[1.25rem] flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-[0.75rem] shadow-md">
        <img
          src={brainwaveWhiteSymbol}
          width={28}
          height={28}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-gray-400 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-gray-800"
      />
    </div>
  );
};

// Updated VideoBar with smoother edges, animations, and a more modern design
export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={28}
        height={28}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-gray-300 rounded-full">
        <div className="w-1/2 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-progress"></div>
      </div>
    </div>
  );
};
