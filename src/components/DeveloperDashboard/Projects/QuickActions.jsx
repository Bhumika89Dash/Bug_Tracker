import React from "react";

export default function QuickActions({ onCreate, onFileBug, onInvite }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        className="bg-orange hover:bg-yellow text-white rounded-full px-4 py-2 transition-colors"
        onClick={onCreate}
      >
        + Create Project
      </button>
      <button
        className="bg-green hover:bg-neon text-white rounded-full px-4 py-2 transition-colors"
        onClick={onFileBug}
      >
        + File Bug
      </button>
      <button
        className="bg-blue hover:bg-neon text-white rounded-full px-4 py-2 transition-colors"
        onClick={onInvite}
      >
        Invite Teammates
      </button>
    </div>
  );
}
