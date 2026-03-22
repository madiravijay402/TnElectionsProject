import React, { useState } from 'react'
import RoutePath from './Routes/RoutePath'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const [selectedCandidateId, setSelectedCandidateId] = useState("")
  const [voteCounts, setVoteCounts] = useState({
    dmk: 0,
    tvk: 0,
    aiadmk: 0,
    ntk: 0,
  })

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setHasVoted(false)
    setSelectedCandidateId("")
  }

  return (
   <>
      <RoutePath
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        hasVoted={hasVoted}
        setHasVoted={setHasVoted}
        selectedCandidateId={selectedCandidateId}
        setSelectedCandidateId={setSelectedCandidateId}
        voteCounts={voteCounts}
        setVoteCounts={setVoteCounts}
      />
   </>
  )
} 

export default App