import React from 'react'

// type TwoProps = {collapse?:boolean ; expanded?:never} | {collapse?:never ; expanded?:boolean}
type TwoProps = {collapse:true ; expanded?:never} | {collapse?:never ; expanded?:true}

const Two = (props:TwoProps) => {
  return (
    <div>Two</div>
  )
}

export default Two