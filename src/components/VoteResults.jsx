import React from "react";

const candidates = [
  { id: "dmk", name: "M. K. Stalin", party: "DMK" },
  { id: "tvk", name: "Vijay", party: "TVK" },
  { id: "aiadmk", name: "Edappadi K. Palaniswami", party: "AIADMK" },
  { id: "ntk", name: "Seeman", party: "NTK" },
];

const VoteResults = ({ voteCounts }) => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          candidate vote results
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          current total votes by candidate.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {candidate.name}
              </h2>
              <p className="text-sm text-slate-600">{candidate.party}</p>
              <p className="mt-3 text-2xl font-bold text-emerald-700">
                {voteCounts[candidate.id] || 0} votes
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoteResults;
