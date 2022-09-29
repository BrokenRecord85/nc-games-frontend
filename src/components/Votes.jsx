import React, { useEffect } from 'react'
import {useState} from 'react'
import { castVote } from '../utils/api'
import {AiOutlineLike, AiTwotoneLike} from 'react-icons/ai'

const Votes = ({votes, review_id}) => {
  
  const [currVotes, setCurrVotes] = useState(votes)
  const [hasVoted, setHasVoted] = useState(false)
  useEffect(() => {
        setCurrVotes(votes)
  }, [votes])
  

  const handleVote = () => {
    if(!hasVoted) {
        setCurrVotes(currVotes + 1)
        setHasVoted(true)
      const reqBody = {
          inc_votes: 1
      }
      castVote(review_id, reqBody)
      .then(({data}) => {
          return data
      })
    }
    else {
      setCurrVotes(currVotes - 1)
      setHasVoted(false)
      const reqBody = {
          inc_votes: -1
      }
      castVote(review_id, reqBody)
      .then(({data}) => {
          return data
      })
    }
    
  }

  return (
    <div className='voting-container'>
      {!hasVoted ? <AiOutlineLike size={32} onClick={handleVote}/> : <AiTwotoneLike size={32} onClick={handleVote}/>}  
    <p>Votes: {currVotes}</p>    
    </div>
  )
}

export default Votes