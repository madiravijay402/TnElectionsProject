import React from "react";
import { useNavigate } from "react-router-dom";
import CandidateCard from "./CandidateCard";
import VoteConfirmPanel from "./VoteConfirmPanel";

const candidates = [
  { id: "dmk",name: "M. K. Stalin", party: "DMK", image: "/MK_Stalin.jpg" },
  { id: "tvk", name: "Vijay", party: "TVK", image: "/TVKcheif.jpg"},
  { id: "aiadmk", name: "Edappadi K. Palaniswami", party: "AIADMK", image: "/Palanisamy.jpg"},
  { id: "ntk", name: "Seeman", party: "NTK", image: "/seemanOG.jpg" },
];

const VoteLanding = ({ hasVoted, setHasVoted, selectedCandidateId, setSelectedCandidateId, voteCounts, setVoteCounts,}) => {
  const navigate = useNavigate();

  const handleSelectCandidate = (candidateId) => {
    if (hasVoted) return;
    if (selectedCandidateId) return;
    setSelectedCandidateId(candidateId);
  };

  const handleConfirmVote = () => {
    if (!selectedCandidateId || hasVoted) return;

    const updatedCounts = {
      ...voteCounts,
      [selectedCandidateId]: (voteCounts[selectedCandidateId] || 0) + 1,
    };

    setVoteCounts(updatedCounts);
    setHasVoted(true);
    navigate("/results");
  };

  const selectedCandidate = candidates.find(
    (candidate) => candidate.id === selectedCandidateId
  );

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          vote for your candidate
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          once you select one candidate, other candidates become disabled.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {candidates.map((candidate) => {
            const isSelected = selectedCandidateId === candidate.id;
            const isDisabled =
              hasVoted || (!!selectedCandidateId && !isSelected);

            return (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onSelect={handleSelectCandidate}
              />
            );
          })}
        </div>

        <VoteConfirmPanel
          selectedCandidate={selectedCandidate}
          onConfirmVote={handleConfirmVote}
          hasVoted={hasVoted}
        />
      </div>
    </div>
  );
};

export default VoteLanding;
