import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import Home from '../components/StartingPage'
import StartingPage from '../components/StartingPage'
import Login from '../components/Login'
import Register from '../components/Register'
import Page from '../page/Page'
import VoteLanding from '../components/VoteLanding'
import VoteResults from '../components/VoteResults'

const RoutePath = ({
  isLoggedIn,
  onLogin,
  onLogout,
  hasVoted,
  setHasVoted,
  selectedCandidateId,
  setSelectedCandidateId,
  voteCounts,
  setVoteCounts,
}) => {
  return (
    
     <Routes >

        {/* Pages WITH Navbar */}
        <Route path="/" element={<Page isLoggedIn={isLoggedIn} onLogout={onLogout} />}>
          <Route index element={<StartingPage/>} />
          <Route path="vote" element={
            isLoggedIn ? (
              <VoteLanding
                hasVoted={hasVoted}
                setHasVoted={setHasVoted}
                selectedCandidateId={selectedCandidateId}
                setSelectedCandidateId={setSelectedCandidateId}
                voteCounts={voteCounts}
                setVoteCounts={setVoteCounts}
              />
            ) : (
              <StartingPage/>
            )
          } />
          <Route path="results" element={
            isLoggedIn ? (
              <VoteResults voteCounts={voteCounts} />
            ) : (
              <StartingPage/>
            )
          } />
        </Route>
      
        {/* Pages WITHOUT Navbar */}
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Register/>} />

      </Routes>
  )
}

export default RoutePath