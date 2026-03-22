import React from "react";
import { useNavigate } from "react-router-dom";

const VoteConfirmPanel = ({ selectedCandidate, onConfirmVote, hasVoted }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">confirm your vote</h2>

      {!selectedCandidate && !hasVoted && (
        <p className="mt-2 text-sm text-slate-600">
          select one candidate to enable confirmation.
        </p>
      )}

      {selectedCandidate && !hasVoted && (
        <p className="mt-2 text-sm text-slate-700">
          you selected <span className="font-semibold">{selectedCandidate.name}</span>{" "}
          ({selectedCandidate.party}).
        </p>
      )}

      {hasVoted && (
        <p className="mt-2 text-sm text-emerald-700 font-medium">
          you already voted. you can view the live vote count below.
        </p>
      )}

      <div className="mt-4 flex gap-3">
        <button
          onClick={onConfirmVote}
          disabled={!selectedCandidate || hasVoted}
          className="h-10 px-4 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed"
        >
          confirm vote
        </button>

        <button
          onClick={() => navigate("/results")}
          className="h-10 px-4 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
        >
          view results
        </button>
      </div>
    </div>
  );
};

export default VoteConfirmPanel;
