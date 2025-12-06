import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
}

export function BrowserMockup({ src, alt, url }: BrowserMockupProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* URL bar */}
        {url && (
          <div className="flex-1 ml-4">
            <div className="bg-gray-700 rounded px-3 py-1 text-sm text-gray-400 truncate max-w-md">
              {url}
            </div>
          </div>
        )}
      </div>
      {/* Screenshot */}
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </div>
  );
}
