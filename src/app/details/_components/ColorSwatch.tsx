import React from "react";

type ColorSwatchProps = {
  name: string;
  hex: string;
  description?: string;
};

export default function ColorSwatch({ name, hex, description }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
      <div
        className="w-10 h-10 rounded-md border border-gray-300 dark:border-gray-600"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 dark:text-gray-100">{name}</span>
        <span className="text-xs text-gray-600 dark:text-gray-400">{hex}</span>
        {description && (
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</span>
        )}
      </div>
    </div>
  );
}
