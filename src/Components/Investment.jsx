import React,{useEffect} from 'react'
import { allFunds } from '../Functions/funtions'

const Investment = () => {

  useEffect(()=> {
    allFunds()
  },[])
  return (
    <div>
        Investment
    </div>
  )
}

export default Investment