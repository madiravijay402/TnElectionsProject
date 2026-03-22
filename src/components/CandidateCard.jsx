import React from "react";

const CandidateCard = ({ candidate, isSelected, isDisabled, onSelect }) => {
  return (
    <div
      className={`rounded-xl border p-4 transition-all ${
        isSelected
          ? "border-emerald-500 bg-emerald-50"
          : "border-slate-200 bg-white"
      } ${isDisabled ? "opacity-60" : "opacity-100"}`}
    >
      <img
        src={candidate.image}
        alt={candidate.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-lg font-semibold text-slate-900">
        {candidate.name}
      </h3>
      <p className="text-sm text-slate-600">{candidate.party}</p>

      <button
        onClick={() => onSelect(candidate.id)}
        disabled={isDisabled}
        className={`mt-4 w-full h-10 rounded-md text-sm font-medium transition-colors ${
          isSelected
            ? "bg-emerald-600 text-white"
            : "bg-slate-900 text-white hover:bg-slate-800"
        } disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed`}
      >
        {isSelected ? "selected" : "select candidate"}
      </button>
    </div>
  );
};

export default CandidateCard;
