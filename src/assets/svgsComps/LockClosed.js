import React from "react";

export function LockClosed(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 10h-1V8c0-2.205-1.794-4-4-4S8 5.795 8 8v2H7c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2m-5 8.299a1.3 1.3 0 1 1 0-2.6a1.3 1.3 0 0 1 0 2.6M14 11h-4V8c0-1.104.897-2 2-2s2 .896 2 2z"
      ></path>
    </svg>
  );
}