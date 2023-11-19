import React from "react";
import azkar from "src/data/azkar.json";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <div>
        {azkar.map((zkar, idx) => (
          <div key={idx} className="mb-8 flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-full shrink-0">
              {idx + 1}
            </div>
            <div className="w-full">
              {zkar.header && (
                <p className="text-xs mb-1 text-gray-500">{zkar.header}</p>
              )}
              <p className="text-lg font-semi mb-1">{"{" + zkar.body + "}"}</p>
              {zkar.reason && (
                <p className="italic text-gray-500 text-sm">{zkar.reason}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
