import React from "react";
import { useAzkar } from "src/hooks/azkar";
import cx from "classnames";
import text from "src/data/text.json";
import { useSearchParams } from "next/navigation";

const Home: React.FC<{}> = () => {
  const { azkar, countDown } = useAzkar();
  return (
    <div>
      <div>
        {azkar.map((zkar, idx) => (
          <div
            key={idx}
            className={cx(
              "py-6 flex items-start gap-4 px-2",
              zkar.repeatsLeft.every((r) => r === 0) &&
                "bg-gray-100 dark:bg-gray-900 rounded-md"
            )}
          >
            <div className="w-10 h-10 bg-gray-800 dark:bg-gray-600 text-white flex items-center justify-center rounded-full shrink-0 shadow-lg">
              {idx + 1}
            </div>
            <div>
              <div className="w-full mb-2">
                {zkar.header && (
                  <p className="text-xs mb-1 text-gray-500">{zkar.header}</p>
                )}
                <p className="text-lg font-semi mb-1 dark:text-gray-400">
                  {"{" + zkar.body.trim() + "}"}
                </p>
                {zkar.reason && (
                  <p className="italic text-gray-500 text-sm">{zkar.reason}</p>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                {zkar.repeatsLeft.map((repeats, repeatIdx) => (
                  <button
                    key={repeatIdx}
                    onClick={() => countDown(repeatIdx, idx)}
                    className="font-bold w-32 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-50 text-indigo-600 hover:bg-indigo-300 bg-indigo-100 text-sm"
                    disabled={repeats === 0}
                  >
                    {repeats === 0 ? text.done : repeats}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
