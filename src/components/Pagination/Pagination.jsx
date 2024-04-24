import React from "react";

function Pagination() {
  return (
    <div>
      <div class="w-full border-t border-gray-300">
        <div class="mt-2 flex items-center justify-between">
          <div>
            <a
              href="#"
              class="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
            >
              ← Previous
            </a>
          </div>
          <div class="hidden md:flex items-center">
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              1
            </a>
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              2
            </a>
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              3
            </a>
            <p>...</p>
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              8
            </a>
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              9
            </a>
            <a
              href="#"
              class="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              10
            </a>
          </div>
          <div>
            <a href="#" class="mx-2 text-sm font-semibold text-gray-900">
              Next →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
