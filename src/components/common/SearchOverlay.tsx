import type React from "react";
import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex items-center border-b border-gray-200">
          <input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            className="w-full text-lg outline-none text-gray-700"
          />
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="p-4">
          {/* Add search results here */}
          <p className="text-gray-500">Start typing to see search results...</p>
        </div>
      </div>
    </div>
  );
};
